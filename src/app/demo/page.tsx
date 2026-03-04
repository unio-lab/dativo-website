import type { Metadata } from "next";
import Container from "@/components/Container";
import CalEmbed from "@/components/CalEmbed";

export const metadata: Metadata = {
  title: "Request a Demo",
  description:
    "Book a 30-minute demo of Dativo. See how the platform operationalizes EU Data Act compliance for connected product manufacturers.",
  alternates: {
    canonical: "https://dativo.dev/demo",
  },
};

export default function DemoPage() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-6xl">
          {/* Page header */}
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-grey-accent">
              Book a Demo
            </p>
            <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              See Dativo in action
            </h1>
            <p className="mt-4 text-lg text-grey-accent">
              Choose a time that works for you. 30 minutes, no commitment.
            </p>
          </div>

          {/* Cal.com embed */}
          <div className="mt-12">
            <CalEmbed />
          </div>

          {/* Fallback */}
          <div className="mt-12 text-center text-sm text-grey-accent">
            <p>
              Prefer to send a message first?{" "}
              <a
                href="/contact"
                className="text-navy underline hover:text-navy-mid"
              >
                Contact us
              </a>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
