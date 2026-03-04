import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Dativo privacy policy. How we collect, use, and protect your personal data in compliance with the GDPR.",
  alternates: {
    canonical: "https://dativo.dev/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="font-heading text-4xl font-bold tracking-tight text-navy sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-grey-accent">
            Last updated: March 2026
          </p>

          <div className="mt-10 space-y-8 text-base leading-relaxed text-grey-accent">
            <section>
              <h2 className="font-heading text-2xl font-semibold text-navy">
                1. Controller
              </h2>
              <p className="mt-3">
                The data controller for this website is Dativo. For contact
                details, please see our{" "}
                <a href="/imprint" className="text-navy underline hover:no-underline">
                  Imprint
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-navy">
                2. Data We Collect
              </h2>
              <p className="mt-3">
                When you visit our website, we may collect the following data:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  <strong>Contact form submissions:</strong> Name, email
                  address, company name, and message content when you submit our
                  contact or demo request form.
                </li>
                <li>
                  <strong>Technical data:</strong> IP address, browser type,
                  operating system, and pages visited — collected automatically
                  by our hosting provider for security and performance purposes.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-navy">
                3. Purpose and Legal Basis
              </h2>
              <p className="mt-3">
                We process your data for the following purposes:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  To respond to your inquiries and demo requests (Art. 6(1)(b)
                  GDPR — contract performance / pre-contractual measures).
                </li>
                <li>
                  To ensure the security and availability of our website (Art.
                  6(1)(f) GDPR — legitimate interest).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-navy">
                4. Data Sharing
              </h2>
              <p className="mt-3">
                We do not sell your personal data. We may share data with
                service providers who help us operate this website (e.g.,
                hosting providers), bound by data processing agreements.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-navy">
                5. Data Retention
              </h2>
              <p className="mt-3">
                We retain personal data only as long as necessary for the
                purpose it was collected, or as required by law. Contact form
                submissions are retained for up to 12 months.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-navy">
                6. Your Rights
              </h2>
              <p className="mt-3">
                Under the GDPR, you have the right to access, rectify, erase,
                restrict processing, data portability, and object to processing
                of your personal data. To exercise these rights, contact us at{" "}
                <a
                  href="mailto:privacy@dativo.dev"
                  className="text-navy underline hover:no-underline"
                >
                  privacy@dativo.dev
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-navy">
                7. Cookies
              </h2>
              <p className="mt-3">
                This website uses only technically necessary cookies. We do not
                use tracking cookies or third-party advertising cookies.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </section>
  );
}
