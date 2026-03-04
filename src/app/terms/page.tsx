import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Dativo terms of service. Terms and conditions governing the use of the Dativo website and platform.",
  alternates: {
    canonical: "https://dativo.dev/terms",
  },
};

export default function TermsPage() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="font-heading text-4xl font-bold tracking-tight text-navy sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-grey-accent">
            Last updated: March 2026
          </p>

          <div className="mt-10 space-y-8 text-base leading-relaxed text-grey-accent">
            <section>
              <h2 className="font-heading text-2xl font-semibold text-navy">
                1. Scope
              </h2>
              <p className="mt-3">
                These Terms of Service govern your use of the Dativo website
                (dativo.dev) and any related services provided by Dativo. By
                accessing our website, you agree to these terms.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-navy">
                2. Services
              </h2>
              <p className="mt-3">
                Dativo provides an EU Data Act compliance platform for connected
                product manufacturers. The Community Edition is available as
                source-available software under the BSL 1.1 license. Commercial
                editions (Professional and Enterprise) are subject to separate
                license agreements.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-navy">
                3. User Obligations
              </h2>
              <p className="mt-3">
                You agree to use the website and services lawfully and not to
                misuse, disrupt, or attempt to gain unauthorized access to any
                part of the platform or its infrastructure.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-navy">
                4. Intellectual Property
              </h2>
              <p className="mt-3">
                All content on this website, including text, graphics, logos, and
                software, is the property of Dativo or its licensors and is
                protected by applicable intellectual property laws. The Dativo
                Community Edition source code is available under the BSL 1.1
                license as specified in the repository.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-navy">
                5. Limitation of Liability
              </h2>
              <p className="mt-3">
                Dativo provides this website and the Community Edition software
                &ldquo;as is&rdquo; without warranty of any kind. To the extent
                permitted by law, Dativo shall not be liable for any indirect,
                incidental, or consequential damages arising from the use of the
                website or software.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-navy">
                6. Governing Law
              </h2>
              <p className="mt-3">
                These terms are governed by the laws of the Federal Republic of
                Germany. The courts of Berlin shall have exclusive jurisdiction
                for any disputes arising from these terms.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-navy">
                7. Changes to These Terms
              </h2>
              <p className="mt-3">
                We reserve the right to update these terms at any time. Changes
                will be posted on this page with an updated revision date.
                Continued use of the website after changes constitutes
                acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-navy">
                8. Contact
              </h2>
              <p className="mt-3">
                For questions about these terms, please contact us at{" "}
                <a
                  href="mailto:hello@dativo.dev"
                  className="text-navy underline hover:no-underline"
                >
                  hello@dativo.dev
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </Container>
    </section>
  );
}
