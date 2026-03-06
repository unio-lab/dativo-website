import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import FeatureCard from "@/components/FeatureCard";
import CTABlock from "@/components/CTABlock";
import Button from "@/components/Button";
import HeroIllustration from "@/components/HeroIllustration";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://dativo.dev",
  },
};

function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-grey-accent">
            EU Data Act · In Force Since September 2025
          </p>
          <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-navy sm:text-5xl lg:text-6xl text-balance">
            EU Data Act compliance for connected product manufacturers
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-grey-accent sm:text-xl">
            Dativo is the operational platform that enables manufacturers of
            connected products to share product-generated data with customers and
            authorized third parties — as required by Articles&nbsp;3–6 of
            Regulation (EU)&nbsp;2023/2854.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/demo" variant="primary">
              Request a Demo
            </Button>
            <Button href="https://github.com/unio-lab/dativo" variant="secondary">
              Explore on GitHub
            </Button>
          </div>
        </div>
        <HeroIllustration />
      </Container>
      {/* Subtle geometric accent */}
      <div className="absolute -top-40 right-0 -z-10 h-96 w-96 rounded-full bg-navy/[0.03] blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-40 left-0 -z-10 h-96 w-96 rounded-full bg-navy/[0.02] blur-3xl" aria-hidden="true" />
    </section>
  );
}

function ProblemSection() {
  const problems = [
    {
      title: "The EU Data Act is in effect",
      description:
        "Regulation (EU) 2023/2854 is enforceable since September 2025. Manufacturers of connected products must provide customers with access to product-generated data. Non-compliance carries penalties of up to 4% of global annual turnover. This is not a future obligation — it is a current one.",
    },
    {
      title: "Your equipment data lives in silos",
      description:
        "Equipment data is scattered across Snowflake, Databricks, legacy SQL databases, SAP, and IIoT platforms. You can't share what you can't find. Conflicting identifiers — serial numbers, SAP IDs, asset tags — make it nearly impossible to build a unified view of what data exists for which equipment.",
    },
    {
      title: "Compliance is a continuous obligation",
      description:
        "This is not a one-time project. Every new customer, every new product line, every new data source needs to be mapped, classified, and made accessible. You need a platform that scales with your obligations, not a consulting engagement that ends with a report.",
    },
  ];

  return (
    <section className="bg-navy/[0.02] py-20 sm:py-24">
      <Container>
        <SectionHeader
          label="The Challenge"
          title="What the EU Data Act means for manufacturers"
          description="Connected product manufacturers face a new regulatory reality. Here's what's at stake."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {problems.map((problem) => (
            <div key={problem.title} className="rounded-xl bg-white p-8 shadow-sm border border-navy/5">
              <h3 className="font-heading text-lg font-semibold text-navy">
                {problem.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-grey-accent">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      step: "01",
      actor: "Manufacturer",
      title: "Register your equipment install base",
      description:
        "Import equipment records via CSV or API. The platform resolves conflicting identifiers — serial numbers, SAP IDs, asset tags — and learns your naming conventions to handle edge cases automatically. Unified equipment registry with quality scoring.",
    },
    {
      step: "02",
      actor: "Manufacturer",
      title: "Map data to equipment and classify",
      description:
        "Connect your data sources (CSV included, Snowflake and Databricks with Commercial). The platform analyzes your data and auto-suggests mapping rules — you review and approve. Classify trade secrets. It tracks what data exists for which equipment.",
    },
    {
      step: "03",
      actor: "Customer",
      title: "Customers access their data",
      description:
        "Self-service portal where customers see their equipment, browse available datasets, request access, and download data. Fulfillment queue with SLA tracking ensures requests are resolved on time.",
    },
  ];

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeader
          label="How It Works"
          title="From equipment registry to compliant data sharing"
          description="Three steps to operationalize your EU Data Act obligations."
        />
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.step} className="relative">
              <div className="mb-4 text-5xl font-bold text-navy/10 font-heading">
                {step.step}
              </div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-grey-accent">
                {step.actor}
              </p>
              <h3 className="font-heading text-lg font-semibold text-navy">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-grey-accent">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function CapabilitiesSection() {
  const coreCapabilities = [
    {
      title: "Equipment Identity Resolution",
      description:
        "Unified registry with quality scoring and fuzzy identifier matching. Import thousands of equipment records and resolve conflicts automatically, with intelligent matching that improves over time.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
        </svg>
      ),
    },
    {
      title: "Dataset Catalog & Data Mapping",
      description:
        "Define data sources, configure mapping rules between raw datasets and equipment types, and manage schema associations. Auto-suggested mappings reduce manual configuration by up to 80%.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
        </svg>
      ),
    },
    {
      title: "Customer Self-Service Portal",
      description:
        "Branded portal for customers to view equipment, explore datasets, request data access, manage users, and designate third-party recipients. No support tickets required.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      ),
    },
    {
      title: "Fulfillment Engine with SLA Tracking",
      description:
        "Task queue that tracks every data access request from submission to resolution. Built-in SLA monitoring ensures Article 4 timing requirements are met.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
    },
    {
      title: "Trade Secret Classification",
      description:
        "Classify datasets as trade secrets with economic damage justification. Manage withholding records and confidentiality agreements. Full Article 4(3) compliance.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
    },
    {
      title: "Compliance Audit Trail",
      description:
        "Every action logged with timestamps, actors, and legal basis. Compliance dashboard with regulatory export. Ready for supervisory authority review.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
        </svg>
      ),
    },
    {
      title: "Connector SDK",
      description:
        "Plugin architecture for data source connectors. CSV included. Snowflake, Databricks, and custom connectors available in Commercial. Build your own with the open SDK.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
        </svg>
      ),
    },
    {
      title: "Third-Party Data Sharing",
      description:
        "Complete Articles 5–6 workflow: customer-designated third parties, authorization verification, data scoping, FRAND compensation terms, and pre-contractual transparency.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
        </svg>
      ),
    },
  ];

  const advancedCapabilities = [
    {
      title: "Equipment Identity Resolution (Smart Matching)",
      description:
        "Your install base uses different identifiers across SAP, CRM, and service records. The platform learns your naming conventions and proposes matches with confidence scores. Review, correct, and it gets smarter. Onboarding cycles drop from 40 hours to under 2.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
        </svg>
      ),
      badge: "COMING SOON",
    },
    {
      title: "Auto-Suggested Data Mapping",
      description:
        "When you add a dataset, the platform analyzes its structure against your confirmed configurations and proposes mapping rules — which equipment type, which measurements, which transformations. You review and approve. Each confirmation makes the next one more accurate.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
        </svg>
      ),
      badge: "COMING SOON",
    },
    {
      title: "Natural Language Data Explorer",
      description:
        "Instead of navigating filters and dataset catalogs, your customers type what they need: 'pressure data from our pumps in Building 3, last quarter.' The platform finds the right data, checks permissions, and delivers it — or routes it through your fulfillment workflow.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
        </svg>
      ),
      badge: "COMING SOON",
    },
  ];

  return (
    <section className="bg-navy/[0.02] py-20 sm:py-24">
      <Container>
        <SectionHeader
          label="Capabilities"
          title="Everything you need for Data Act compliance"
          description="A purpose-built platform covering the full scope of your data sharing obligations under the EU Data Act."
        />

        {/* Core Capabilities */}
        <div className="mt-16 flex items-center gap-4">
          <div className="h-px flex-1 bg-navy/10" />
          <p className="text-xs font-semibold uppercase tracking-wider text-grey-accent">
            Core Platform
          </p>
          <div className="h-px flex-1 bg-navy/10" />
        </div>
        <p className="mt-3 text-center text-sm text-grey-accent">
          The foundational capabilities to operationalize your EU Data Act obligations. 
        </p>
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coreCapabilities.map((cap) => (
            <FeatureCard
              key={cap.title}
              title={cap.title}
              description={cap.description}
              icon={cap.icon}
            />
          ))}
        </div>

        {/* Divider */}
        <div className="mt-16 flex items-center gap-4">
          <div className="h-px flex-1 bg-navy/10" />
          <p className="text-xs font-semibold uppercase tracking-wider text-grey-accent">
            Operational Intelligence
          </p>
          <div className="h-px flex-1 bg-navy/10" />
        </div>
        <p className="mt-3 text-center text-sm text-grey-accent">
          The same compliance workflows — without the manual bottlenecks. The platform proposes, your team decides.
        </p>

        {/* Advanced Capabilities */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {advancedCapabilities.map((cap) => (
            <FeatureCard
              key={cap.title}
              title={cap.title}
              description={cap.description}
              icon={cap.icon}
              badge={cap.badge}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

function TrustSection() {
  const sectors = [
    { name: "Pumps & Valves", icon: "⚙" },
    { name: "HVAC Systems", icon: "❄" },
    { name: "Construction Machinery", icon: "🏗" },
    { name: "Energy Equipment", icon: "⚡" },
    { name: "Industrial Automation", icon: "🔧" },
    { name: "Process Manufacturing", icon: "🏭" },
  ];

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeader
          label="Industry Focus"
          title="Built for EU industrial manufacturers"
          description="Dativo is purpose-built for manufacturers of connected products who must comply with the EU Data Act."
        />
        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {sectors.map((sector) => (
            <div
              key={sector.name}
              className="flex flex-col items-center rounded-xl border border-navy/5 bg-white p-6 text-center"
            >
              <span className="text-3xl" role="img" aria-label={sector.name}>
                {sector.icon}
              </span>
              <p className="mt-3 text-xs font-medium text-grey-accent">
                {sector.name}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

const faqItems = [
  {
    question: "What is the EU Data Act?",
    answer:
      "The EU Data Act (Regulation (EU) 2023/2854) is a regulation requiring manufacturers of connected products to share product-generated data with customers and authorized third parties. It has been enforceable since September 12, 2025.",
  },
  {
    question: "What are the penalties for non-compliance?",
    answer:
      "Member states set their own penalty frameworks, but the regulation allows for fines of up to 4% of global annual turnover — the same ceiling as GDPR.",
  },
  {
    question: "Which manufacturers are affected?",
    answer:
      "Any manufacturer of connected products sold in the EU that generate data through sensors, software, or network connectivity. This includes industrial machinery, HVAC systems, pumps, valves, construction equipment, energy systems, and consumer IoT devices.",
  },
  {
    question: "What data must manufacturers share?",
    answer:
      "Under Article 3, manufacturers must make product data and related service data readily accessible to users. Under Article 4, users can request any data generated by their connected product. Under Articles 5–6, users can designate third parties to receive their data.",
  },
  {
    question: "What is Article 4(3) trade secret protection?",
    answer:
      "Manufacturers can withhold specific data if disclosure would cause serious economic damage through trade secret exposure. However, they must provide structured justification under Directive (EU) 2016/943 and offer a confidentiality agreement as an alternative.",
  },
  {
    question: "How long do manufacturers have to respond to data access requests?",
    answer:
      'The Data Act requires data to be made available "without undue delay" and within the same quality as the data holder receives. There is no fixed number of days, but the expectation from guidance documents is prompt fulfillment, typically interpreted as within 30 days.',
  },
];

function FAQSection() {
  return (
    <section className="bg-navy/[0.02] py-20 sm:py-24">
      <Container>
        <SectionHeader
          label="FAQ"
          title="Frequently Asked Questions"
          description="Key questions about the EU Data Act and how it affects connected product manufacturers."
        />
        <div className="mx-auto mt-12 max-w-3xl divide-y divide-navy/10">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="group py-6 first:pt-0 last:pb-0"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-lg font-semibold text-navy [&::-webkit-details-marker]:hidden">
                <span>{item.question}</span>
                <svg
                  className="h-5 w-5 flex-shrink-0 text-grey-accent transition-transform duration-200 group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-grey-accent">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <CapabilitiesSection />
      <TrustSection />
      <FAQSection />
      <CTABlock
        title="The EU Data Act is in force. Are you compliant?"
        description="Join the manufacturers already using Dativo to operationalize their data sharing obligations. Deploy the Community Edition or schedule a demo with our team."
        buttonText="Request a Demo"
        buttonHref="/demo"
      />
    </>
  );
}
