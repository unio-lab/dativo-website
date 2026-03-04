import type { Metadata } from "next";
import Container from "@/components/Container";
import RequestDemoForm from "./RequestDemoForm";

export const metadata: Metadata = {
  title: "Request a Demo",
  description:
    "Schedule a demo of Dativo to see how it operationalizes EU Data Act compliance for your connected products.",
  alternates: {
    canonical: "https://dativo.dev/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="py-24 sm:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Left column — info */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-grey-accent">
                Contact Us
              </p>
              <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-navy sm:text-5xl">
                Request a demo
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-grey-accent">
                Schedule a personalized demo with our compliance team. We&apos;ll
                walk you through how Dativo can automate your EU Data Act
                obligations for connected products.
              </p>
              <div className="mt-10 space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-navy/5">
                    <svg className="h-5 w-5 text-navy" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-heading text-sm font-semibold text-navy">
                      Email
                    </p>
                    <a
                      href="mailto:hello@dativo.dev"
                      className="text-sm text-grey-accent hover:text-navy"
                    >
                      hello@dativo.dev
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column — form */}
            <RequestDemoForm />
          </div>
        </Container>
      </section>
    </>
  );
}
