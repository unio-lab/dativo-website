import type { Metadata } from "next";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";
import CalEmbed from "@/components/CalEmbed";

export const metadata: Metadata = {
  title: "Request a Demo",
  description:
    "Schedule a demo of Dativo or send us an inquiry. Learn how Dativo operationalizes EU Data Act compliance for connected product manufacturers.",
  alternates: {
    canonical: "https://dativo.dev/contact",
  },
};

export default function ContactPage() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        {/* Page header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-grey-accent">
            Contact Us
          </p>
          <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Get in touch
          </h1>
          <p className="mt-4 text-lg text-grey-accent">
            Send us an inquiry or book a 30-minute demo directly.
          </p>
        </div>

        {/* Two-column layout on desktop */}
        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left: Contact Form */}
          <div>
            <h2 className="font-heading text-xl font-semibold text-navy">
              Send an inquiry
            </h2>
            <p className="mt-2 text-sm text-grey-accent">
              Tell us about your compliance needs and we will respond within one
              business day.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          {/* Right: Cal.com embed */}
          <div>
            <h2 className="font-heading text-xl font-semibold text-navy">
              Book a demo
            </h2>
            <p className="mt-2 text-sm text-grey-accent">
              Choose a time that works for you. 30 minutes, no commitment.
            </p>
            <div className="mt-6">
              <CalEmbed />
            </div>
          </div>
        </div>

        {/* Direct contact fallback */}
        <div className="mt-16 text-center text-sm text-grey-accent">
          <p>
            Prefer email? Reach us directly at{" "}
            <a
              href="mailto:hello@dativo.dev"
              className="text-navy underline hover:text-navy-mid"
            >
              hello@dativo.dev
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}
