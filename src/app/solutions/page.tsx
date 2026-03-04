import type { Metadata } from "next";
import Container from "@/components/Container";
import CTABlock from "@/components/CTABlock";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Solutions — By Industry",
  description:
    "EU Data Act compliance for pumps & valves, HVAC systems, construction machinery, energy equipment, industrial automation, and process manufacturing.",
  alternates: {
    canonical: "https://dativo.dev/solutions",
  },
};

const challenges = [
  {
    id: "articles-3-4",
    name: "Articles 3–4: Making product data accessible to customers",
    description:
      "The foundation of the Data Act: customers who purchase connected products have a right to access the data those products generate. Manufacturers must make this data available without undue delay, in a structured and machine-readable format. Dativo operationalizes this obligation end-to-end.",
    steps: [
      "Register equipment install base with unified identity resolution",
      "Map datasets to equipment types and configure data sources",
      "Onboard customers to self-service portal",
      "Automated fulfillment with SLA tracking",
    ],
  },
  {
    id: "article-4-3",
    name: "Article 4(3): Protecting trade secrets while sharing data",
    description:
      "The Data Act acknowledges that product data may contain trade secrets. Article 4(3) allows manufacturers to withhold or restrict data that would expose trade secrets — but only with proper classification, economic damage justification, and confidentiality agreements. Dativo provides the tools to protect your IP while remaining compliant.",
    steps: [
      "Classify datasets as trade secrets with justification",
      "Create and manage withholding records",
      "Generate and track confidentiality agreements",
      "Conditional data access with trade secret protections",
    ],
  },
  {
    id: "articles-5-6",
    name: "Articles 5–6: Third-party data sharing",
    description:
      "Customers can designate third parties to receive their product data. Manufacturers must facilitate this sharing while ensuring fair compensation and preventing competitive misuse. Dativo manages the complete third-party sharing workflow, from authorization to fulfillment.",
    steps: [
      "Customer-designated third-party authorization",
      "Data scoping and access provisioning",
      "FRAND compensation terms management",
      "Pre-contractual transparency disclosures",
    ],
  },
  {
    id: "audit",
    name: "Regulatory readiness & audit",
    description:
      "Supervisory authorities can request evidence that your data sharing practices comply with the Data Act. Every action in Dativo is logged with timestamps, actors, and legal basis — creating an audit trail that demonstrates compliance to regulators.",
    steps: [
      "Real-time compliance dashboard",
      "Complete audit trail with actor attribution",
      "Regulatory export in standardized formats",
      "Compliance gap analysis and recommendations",
    ],
  },
];

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-grey-accent">
              Solutions
            </p>
            <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-navy sm:text-5xl text-balance">
              EU Data Act compliance, challenge by challenge
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-grey-accent">
              Every compliance obligation maps to a specific capability in the
              Dativo platform. Here&apos;s how we address each regulatory
              requirement.
            </p>
          </div>
        </Container>
      </section>

      {/* Compliance Challenges */}
      {challenges.map((challenge, index) => (
        <section
          key={challenge.id}
          id={challenge.id}
          className={`py-20 sm:py-24 ${index % 2 === 0 ? "bg-navy/[0.02]" : ""}`}
        >
          <Container>
            <div className="grid items-start gap-12 lg:grid-cols-2">
              <div>
                <h2 className="font-heading text-3xl font-bold tracking-tight text-navy">
                  {challenge.name}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-grey-accent">
                  {challenge.description}
                </p>
                <div className="mt-8">
                  <Button href="/contact" variant="primary">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="rounded-xl border border-navy/10 bg-white p-8">
                <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-grey-accent">
                  Platform Workflow
                </h3>
                <ul className="mt-4 space-y-4">
                  {challenge.steps.map((step) => (
                    <li key={step} className="flex gap-3">
                      <svg
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-navy"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-sm text-grey-accent">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </section>
      ))}

      <CTABlock
        title="Map your compliance obligations to platform capabilities"
        description="Our team can walk you through how Dativo addresses your specific EU Data Act challenges. Schedule a demo."
        buttonText="Request a Demo"
        buttonHref="/contact"
      />
    </>
  );
}
