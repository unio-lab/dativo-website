import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import CTABlock from "@/components/CTABlock";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Product — Platform Overview",
  description:
    "Equipment identity resolution, dataset cataloging, customer self-service portal, fulfillment engine with SLA tracking, and compliance audit trail. Full EU Data Act Articles 3–6 coverage.",
  alternates: {
    canonical: "https://dativo.dev/product",
  },
};

function CheckIcon() {
  return (
    <div className="flex-shrink-0">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/5">
        <svg className="h-5 w-5 text-navy" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    </div>
  );
}

function FeatureItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex gap-4">
      <CheckIcon />
      <div>
        <h3 className="font-heading font-semibold text-navy">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-grey-accent">{description}</p>
      </div>
    </div>
  );
}

function ProductHero() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-grey-accent">
            Product
          </p>
          <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-navy sm:text-5xl text-balance">
            The compliance platform for connected product data
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-grey-accent">
            Dativo provides the complete infrastructure to manage your data
            sharing obligations under the EU Data Act — from registering your
            equipment install base to fulfilling customer data requests.
          </p>
          <div className="mt-10">
            <Button href="/contact" variant="primary">
              Request a Demo
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ManufacturerSection() {
  const items = [
    {
      title: "Equipment Install Base Management",
      description:
        "Import equipment records, resolve identifier conflicts, and build a unified registry with quality scoring.",
    },
    {
      title: "Dataset Catalog & Data Mapping",
      description:
        "Define data sources, configure mapping rules between datasets and equipment types. Auto-suggested mappings reduce manual effort.",
    },
    {
      title: "Customer Organization Onboarding",
      description:
        "Onboard customer organizations with sites, business units, and consent tracking.",
    },
    {
      title: "Fulfillment Queue Management",
      description:
        "Monitor and manage data access requests. Track every request from submission to resolution with built-in SLA monitoring.",
    },
    {
      title: "Invite Management & Domain Rules",
      description:
        "Control who can access the platform with invitation-based onboarding and domain validation rules.",
    },
    {
      title: "Trade Secret Classification",
      description:
        "Classify datasets as trade secrets with economic damage justification. Manage withholding records and confidentiality agreements. (Commercial)",
    },
    {
      title: "Compliance Monitoring",
      description:
        "Dashboard with real-time compliance status, gap analysis, and regulatory export capabilities.",
    },
  ];

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeader
          label="For Manufacturer Admins"
          title="Manage your install base and compliance obligations"
        />
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {items.map((item) => (
            <FeatureItem key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function CustomerSection() {
  const items = [
    {
      title: "Self-Service Registration",
      description:
        "Register directly or accept an invitation. Onboard your organization and manage your team.",
    },
    {
      title: "Equipment Browsing & Data Explorer",
      description:
        "Browse your installed equipment, see what data is available, and explore dataset details.",
    },
    {
      title: "Data Access Request Workflows",
      description:
        "Request access to specific datasets. Track request status and download data when approved.",
    },
    {
      title: "Third-Party Recipient Designation",
      description:
        "Designate authorized third parties to receive your equipment data under Articles 5–6.",
    },
    {
      title: "User Management",
      description:
        "Manage users within your organization with site-scoped access controls.",
    },
  ];

  return (
    <section className="bg-navy/[0.02] py-20 sm:py-24">
      <Container>
        <SectionHeader
          label="For Customers"
          title="Self-service access to your equipment data"
        />
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {items.map((item) => (
            <FeatureItem key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function ComplianceSection() {
  const items = [
    {
      title: "Compliance Dashboard",
      description:
        "Real-time overview of compliance status across your equipment portfolio.",
    },
    {
      title: "Audit Trail Review",
      description:
        "Every action logged with timestamps, actors, and legal basis.",
    },
    {
      title: "Classification Record Review",
      description:
        "Review and manage trade secret classifications and withholding records.",
    },
    {
      title: "Regulatory Export",
      description:
        "Export compliance records in formats ready for supervisory authority review.",
    },
  ];

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeader
          label="For Compliance Reviewers"
          title="Audit-ready compliance infrastructure"
        />
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {items.map((item) => (
            <FeatureItem key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function ArchitectureSection() {
  const items = [
    {
      title: "Microservices Architecture",
      description:
        "8 services with monolith composition for Community edition. Scale individual services as your compliance needs grow.",
    },
    {
      title: "Connector SDK",
      description:
        "Plugin-based architecture for data source connectors. CSV included. Build custom connectors with the open SDK.",
    },
    {
      title: "Feature Flags",
      description:
        "Community and Commercial capabilities gated via configuration. One codebase, one architecture, different feature sets.",
    },
    {
      title: "PostgreSQL",
      description:
        "Works with managed databases (RDS, Cloud SQL) or vanilla on-premises PostgreSQL. No proprietary database dependencies.",
    },
  ];

  return (
    <section className="bg-navy/[0.02] py-20 sm:py-24">
      <Container>
        <SectionHeader
          label="Architecture"
          title="Built for enterprise deployment"
        />
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {items.map((item) => (
            <FeatureItem key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default function ProductPage() {
  return (
    <>
      <ProductHero />
      <ManufacturerSection />
      <CustomerSection />
      <ComplianceSection />
      <ArchitectureSection />
      <CTABlock
        title="See the platform in action"
        description="Schedule a personalized demo to learn how Dativo can operationalize your EU Data Act compliance."
        buttonText="Request a Demo"
        buttonHref="/contact"
      />
    </>
  );
}
