import type { Metadata } from "next";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Send us an inquiry about EU Data Act compliance. Our team will respond within one business day.",
  alternates: {
    canonical: "https://dativo.dev/contact",
  },
};

export default function ContactPage() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl">
          {/* Page header */}
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-grey-accent">
              Contact Us
            </p>
            <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Send an inquiry
            </h1>
            <p className="mt-4 text-lg text-grey-accent">
              Tell us about your compliance needs and we will respond within one
              business day.
            </p>
          </div>

          {/* Contact Form */}
          <div className="mt-12">
            <ContactForm />
          </div>

          {/* Direct contact fallback */}
          <div className="mt-12 text-center text-sm text-grey-accent">
            <p>
              Prefer email? Reach us directly at{" "}
              <a
                href="mailto:hello@dativo.dev"
                className="text-navy underline hover:text-navy-mid"
              >
                hello@dativo.dev
              </a>
            </p>
            <p className="mt-2">
              Want a live walkthrough instead?{" "}
              <a
                href="/demo"
                className="text-navy underline hover:text-navy-mid"
              >
                Book a demo
              </a>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
