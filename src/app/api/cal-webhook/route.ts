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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Cal.com sends different event types
    if (body.triggerEvent !== "BOOKING_CREATED") {
      return NextResponse.json({ received: true });
    }

    const { name, email, company } = body.payload?.responses || {};
    const bookingTime = body.payload?.startTime;
    const attendeeName =
      body.payload?.attendees?.[0]?.name || name || "";
    const attendeeEmail =
      body.payload?.attendees?.[0]?.email || email || "";

    if (!attendeeEmail) {
      return NextResponse.json(
        { error: "No email in booking" },
        { status: 400 }
      );
    }

    // Create or update HubSpot contact
    try {
      const searchResponse = await hubspot.crm.contacts.searchApi.doSearch({
        filterGroups: [
          {
            filters: [
              {
                propertyName: "email",
                operator: FilterOperatorEnum.Eq,
                value: attendeeEmail,
              },
            ],
          },
        ],
        properties: ["email"],
        limit: 1,
        after: "0",
        sorts: [],
      });

      const properties: Record<string, string> = {
        firstname: attendeeName.split(" ")[0] || "",
        lastname: attendeeName.split(" ").slice(1).join(" ") || "",
        hs_lead_status: "NEW",
        notes_last_activity: `Demo booked for ${bookingTime}`,
      };
      if (company) properties.company = company;

      if (searchResponse.total > 0) {
        await hubspot.crm.contacts.basicApi.update(
          searchResponse.results[0].id,
          { properties }
        );
      } else {
        await hubspot.crm.contacts.basicApi.create({
          properties: {
            email: attendeeEmail,
            lifecyclestage: "lead",
            ...properties,
          },
          associations: [],
        });
      }
    } catch (hubspotError) {
      console.error("HubSpot error from Cal webhook:", hubspotError);
    }

    // Notify the team
    const resend = getResend();
    if (resend && process.env.NOTIFICATION_EMAIL) {
      try {
        await resend.emails.send({
          from: "Dativo Website <noreply@dativo.dev>",
          to: process.env.NOTIFICATION_EMAIL,
          subject: `Demo booked: ${attendeeName} (${attendeeEmail})`,
          html: `
            <h2>New Demo Booking</h2>
            <p><strong>Name:</strong> ${attendeeName}</p>
            <p><strong>Email:</strong> ${attendeeEmail}</p>
            <p><strong>Company:</strong> ${company || "Not provided"}</p>
            <p><strong>Scheduled for:</strong> ${bookingTime}</p>
          `,
        });
      } catch (emailError) {
        console.error("Cal webhook email error:", emailError);
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Cal webhook error:", error);
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    );
  }
}
