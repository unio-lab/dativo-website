import { NextRequest, NextResponse } from "next/server";
import { Client } from "@hubspot/api-client";
import { FilterOperatorEnum } from "@hubspot/api-client/lib/codegen/crm/contacts/models/Filter";
import { Resend } from "resend";

const hubspot = new Client({
  accessToken: process.env.HUBSPOT_ACCESS_TOKEN || "",
});

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

// Rate limiting: simple in-memory store (resets on cold start, fine for low volume)
const submissions = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const MAX_SUBMISSIONS_PER_IP = 3;

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    const now = Date.now();
    const ipSubmissions = submissions.get(ip) || [];
    const recentSubmissions = ipSubmissions.filter(
      (time) => now - time < RATE_LIMIT_WINDOW
    );

    if (recentSubmissions.length >= MAX_SUBMISSIONS_PER_IP) {
      return NextResponse.json(
        { error: "Too many submissions. Please try again later." },
        { status: 429 }
      );
    }

    recentSubmissions.push(now);
    submissions.set(ip, recentSubmissions);

    // Parse body
    const body = await request.json();
    const { firstName, lastName, email, company, role, message } = body;

    // Validate required fields
    if (!email || !firstName || !company) {
      return NextResponse.json(
        { error: "Missing required fields: firstName, email, company" },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Create or update contact in HubSpot
    let contactId: string | null = null;

    try {
      // Search for existing contact by email
      const searchResponse = await hubspot.crm.contacts.searchApi.doSearch({
        filterGroups: [
          {
            filters: [
              {
                propertyName: "email",
                operator: FilterOperatorEnum.Eq,
                value: email,
              },
            ],
          },
        ],
        properties: ["email", "firstname", "lastname"],
        limit: 1,
        after: "0",
        sorts: [],
      });

      if (searchResponse.total > 0) {
        // Update existing contact
        contactId = searchResponse.results[0].id;
        await hubspot.crm.contacts.basicApi.update(contactId, {
          properties: {
            firstname: firstName,
            lastname: lastName || "",
            company: company,
            jobtitle: role || "",
            message: message || "",
            hs_lead_status: "NEW",
          },
        });
      } else {
        // Create new contact
        const createResponse =
          await hubspot.crm.contacts.basicApi.create({
            properties: {
              email: email,
              firstname: firstName,
              lastname: lastName || "",
              company: company,
              jobtitle: role || "",
              message: message || "",
              hs_lead_status: "NEW",
              lifecyclestage: "lead",
            },
            associations: [],
          });
        contactId = createResponse.id;
      }
    } catch (hubspotError: unknown) {
      const errBody =
        hubspotError && typeof hubspotError === "object" && "body" in hubspotError
          ? (hubspotError as { body: unknown }).body
          : hubspotError;
      console.error("HubSpot API error:", errBody);
      // Don't fail the request if HubSpot is down — still send notification
    }

    // Send notification email to team
    const resend = getResend();
    if (resend && process.env.NOTIFICATION_EMAIL) {
      try {
        await resend.emails.send({
          from: "Dativo Website <noreply@dativo.dev>",
          to: process.env.NOTIFICATION_EMAIL,
          subject: `New inquiry from ${firstName} at ${company}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${firstName} ${lastName || ""}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Role:</strong> ${role || "Not provided"}</p>
            <p><strong>Message:</strong></p>
            <p>${message || "No message provided"}</p>
            <hr />
            <p><small>HubSpot Contact ID: ${contactId || "Failed to create"}</small></p>
          `,
        });
      } catch (emailError) {
        console.error("Email notification error:", emailError);
        // Don't fail the request if email fails
      }
    }

    return NextResponse.json(
      { success: true, message: "Thank you. We will be in touch shortly." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        error:
          "Something went wrong. Please try again or email us directly.",
      },
      { status: 500 }
    );
  }
}
