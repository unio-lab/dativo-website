import type { Metadata } from "next";
import Container from "@/components/Container";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Dativo Community Edition is free and open source. Professional and Enterprise editions for managed deployment, advanced connectors, and third-party data sharing.",
  alternates: {
    canonical: "https://dativo.dev/pricing",
  },
};

const tiers = [
  {
    name: "Community",
    label: "Free & Open Source",
    description:
      "A genuinely useful, production-ready EU Data Act compliance engine. Not a crippled demo. Deploy on your infrastructure, audit the source code, extend it yourself.",
    license:
      "Source-available under BSL 1.1. Converts to Apache 2.0 after 3 years.",
    features: [
      "Equipment registry with quality scoring",
      "Fuzzy identifier matching",
      "CSV file connector",
      "Manual data-to-equipment mapping",
      "Customer self-service portal",
      "Data access request workflows",
      "Fulfillment queue with SLA tracking",
      "Basic audit logging",
      "REST API",
      "Single-tenant deployment",
      "Community support (GitHub)",
    ],
    cta: "Deploy Now",
    ctaHref: "https://github.com/unio-lab/dativo",
    highlighted: false,
  },
  {
    name: "Professional",
    label: "Managed Cloud",
    description:
      "Everything in Community, plus enterprise compliance features, advanced connectors, and managed EU-hosted infrastructure. We run it, you use it.",
    features: [
      "Everything in Community",
      "Managed EU-hosted cloud infrastructure",
      "Snowflake and Databricks connectors",
      "Trade secret classification & withholding records",
      "Confidentiality agreements",
      "Compliance dashboard with regulatory export",
      "Third-party data recipient flows (Art. 5–6)",
      "Pre-contractual transparency disclosures",
      "Intelligent equipment identity resolution",
      "Auto-suggested data mapping",
      "Advanced RBAC",
      "Priority support with SLA",
    ],
    cta: "Talk to Sales",
    ctaHref: "/contact",
    highlighted: true,
  },
  {
    name: "Enterprise",
    label: "Self-Hosted",
    description:
      "Full commercial capabilities deployed inside your infrastructure. Your data never leaves your network. Kubernetes-ready with dedicated support.",
    features: [
      "Everything in Professional",
      "Self-hosted on your Kubernetes cluster",
      "Data never leaves your infrastructure",
      "SSO/SAML integration",
      "Multi-tenant management",
      "Real-time streaming connectors",
      "Custom connector development support",
      "Dedicated customer success manager",
      "SLA-based L3 support",
      "On-site implementation available",
    ],
    cta: "Talk to Sales",
    ctaHref: "/contact",
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-grey-accent">
              Pricing
            </p>
            <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-navy sm:text-5xl text-balance">
              Open core. Start free, scale commercially.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-grey-accent">
              Deploy on your infrastructure or ours. All editions run the same
              codebase — commercial features are controlled via configuration,
              not separate builds.
            </p>
          </div>
        </Container>
      </section>

      {/* Pricing tiers */}
      <section className="pb-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl border p-8 ${
                  tier.highlighted
                    ? "border-navy bg-navy text-white shadow-xl"
                    : "border-navy/10 bg-white"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1 text-xs font-semibold text-navy shadow-sm">
                    Most Popular
                  </div>
                )}
                <p
                  className={`text-xs font-semibold uppercase tracking-wider ${
                    tier.highlighted ? "text-white/60" : "text-grey-accent"
                  }`}
                >
                  {tier.label}
                </p>
                <h2
                  className={`mt-2 font-heading text-2xl font-bold ${
                    tier.highlighted ? "text-white" : "text-navy"
                  }`}
                >
                  {tier.name}
                </h2>
                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    tier.highlighted ? "text-white/70" : "text-grey-accent"
                  }`}
                >
                  {tier.description}
                </p>
                {"license" in tier && tier.license && (
                  <p
                    className={`mt-2 text-xs italic ${
                      tier.highlighted
                        ? "text-white/50"
                        : "text-grey-accent"
                    }`}
                  >
                    {tier.license}
                  </p>
                )}
                <div className="my-8 border-t border-current/10" />
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg
                        className={`mt-0.5 h-4 w-4 flex-shrink-0 ${
                          tier.highlighted ? "text-white/80" : "text-navy"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      <span
                        className={`text-sm ${
                          tier.highlighted ? "text-white/80" : "text-grey-accent"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button
                    href={tier.ctaHref}
                    variant={tier.highlighted ? "secondary" : "primary"}
                    className={`w-full ${
                      tier.highlighted
                        ? "bg-white text-navy hover:bg-white/90 border-0"
                        : ""
                    }`}
                  >
                    {tier.cta}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Quick start */}
          {/* <div className="mt-12 mx-auto max-w-2xl rounded-xl border border-navy/10 bg-navy/[0.02] p-6 text-center">
            <p className="text-sm font-semibold text-navy">
              Try it in 5 minutes
            </p>
            <code className="mt-3 block rounded-md bg-navy px-4 py-3 text-sm text-white font-mono">
              docker compose -f deploy/docker-compose.community.yml up --build
            </code>
            <p className="mt-3 text-xs text-grey-accent">
              Self-hosted via Docker Compose. No account required.
            </p>
          </div> */}

          <div className="mt-12 text-center">
            <p className="text-sm text-grey-accent">
              All editions run the same codebase. Commercial features are
              controlled via configuration, not separate builds. One platform,
              one architecture, different capabilities.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
