"use client";
 
import { useState, useEffect, useCallback } from "react";
 
// ─── SLIDE DATA — BÜRKERT-SPECIFIC (TIGHTENED) ───
const slides = [
  {
    id: "title",
    tag: null,
    title: "Dativo × Bürkert",
    subtitle:
      "EU Data Act compliance\nfor connected fluid control systems",
    body: null,
    items: null,
    footer: "dativo.dev · Prepared for BÜRKERT",
    layout: "center" as const,
  },
  {
    id: "problem",
    tag: "THE CHALLENGE",
    title:
      "Your customers can now legally request the data your devices generate.",
    subtitle: null,
    body: "Since September 2025, the EU Data Act gives customers of connected products a formal right to access the operational data their equipment generates. For Bürkert, that means process values from EDIP-connected devices — positioners, flowmeters, sensors — deployed across pharma lines, food plants, and water systems.\n\nThe legal review is probably done. The operational question is harder.",
    items: [
      {
        phase: "01",
        name: "Identity fragmentation",
        desc: "EDIP assigns büS addresses. SAP uses material numbers. Customers use asset tags. One valve, four identifiers — and no unified view of what data exists for which equipment.",
      },
      {
        phase: "02",
        name: "Trade secret exposure",
        desc: "ValveInsight diagnostics, FLOWave calibration models, predictive algorithms — IP that must be protected under Art. 4(3) with structured economic justification, not a blanket refusal.",
      },
      {
        phase: "03",
        name: "Regulated customers will move first",
        desc: "Pharma (GxP) and food (HACCP) customers already have data governance teams. They will exercise Data Act rights before anyone else — because they already have the processes to do it.",
      },
    ],
    footer:
      "Art. 3(1) product design obligations take effect September 2026 — products designed today must comply",
    layout: "phases" as const,
  },
  {
    id: "dativo",
    tag: "THE PLATFORM",
    title: "Dativo",
    subtitle:
      "The operational layer between your equipment data and your customer's data access request.",
    body: "Purpose-built for EU Data Act Articles 3–6. Equipment registry with identity resolution. Dataset catalog and mapping. Trade secret classification. Customer self-service portal. Fulfillment with SLA tracking. Complete compliance audit trail.\n\nOpen-source core on GitHub. Self-hosted — your data never leaves your network.",
    items: null,
    footer:
      "dativo.dev · github.com/unio-lab/dativo · BSL 1.1 license",
    layout: "default" as const,
  },
  {
    id: "workflow",
    tag: "HOW IT WORKS",
    title: "Three steps from equipment registry to compliant data sharing",
    subtitle: null,
    body: null,
    items: [
      {
        phase: "01",
        name: "Register equipment, resolve identities",
        desc: "Import from SAP, service records, or CSV. The platform resolves conflicting identifiers — büS addresses, material numbers, asset tags — into a unified registry with confidence scoring. One valve, one record.",
      },
      {
        phase: "02",
        name: "Map data sources, classify trade secrets",
        desc: "Connect your data sources. Map datasets to equipment types. Classify what's shareable and what's protected IP — with Art. 4(3) economic justification, confidentiality agreements, and a full audit trail.",
      },
      {
        phase: "03",
        name: "Customers self-serve, you stay compliant",
        desc: "Branded portal where customers view their installed Bürkert equipment, browse available data, and request access. Fulfillment queue tracks every request against the 30-day SLA. Every action logged.",
      },
    ],
    footer:
      "Connector SDK for custom data sources · CSV included · Snowflake + Databricks in Commercial",
    layout: "phases" as const,
  },
  {
    id: "trade-secret",
    tag: "ARTICLE 4(3)",
    title: "Your IP stays protected.",
    subtitle: null,
    body: 'The Data Act requires data sharing — but it also gives manufacturers the right to withhold trade secrets. The catch: you can\'t simply refuse. You need structured classification under Directive 2016/943, with documented economic damage justification.',
    items: [
      {
        phase: "01",
        name: "Classify Datasets",
        desc: "Classify each dataset as freely shareable, restricted, or trade secret. Manage ValveInsight algorithms and calibration parameters without risking exposure.",
      },
      {
        phase: "02",
        name: "Economic Justification",
        desc: "Document the economic damage justification required by Directive 2016/943. Offer confidentiality agreements as a structured alternative to withholding.",
      },
      {
        phase: "03",
        name: "Audit Trail",
        desc: "Track every classification decision with timestamps and actors. Maintain the documentation a supervisory authority would expect to see.",
      },
    ],
    footer: "Trade secret classification is a Commercial Edition feature",
    layout: "phases" as const,
  },
  {
    id: "offer",
    tag: "THE OFFER",
    title: "Design partnership.\nYour requirements. A running system. Weeks, not months.",
    subtitle: null,
    body: "Dativo is built by Unio Lab — a spec-driven engineering lab where senior engineers author specifications and AI agents implement under human governance. It's how we deliver production platforms fast, without cutting corners.\n\nWe want Bürkert's real-world requirements to shape the product. In return, you get a compliance platform adapted to your architecture at zero cost. And if the collaboration works — there's a bigger conversation to have.",
    items: [
      {
        phase: "01",
        name: "You share initial requirements",
        desc: "Equipment types, EDIP integration points, data sources, customer scenarios. A single working session is enough to start.",
      },
      {
        phase: "02",
        name: "We deliver a Bürkert-specific instance",
        desc: "Your products. Your identifier formats. Your pharma and food customer scenarios. Running code, deployed on your infrastructure.",
      },
      {
        phase: "03",
        name: "You evaluate with real data and shape what's next",
        desc: "Test with actual equipment data. Tell us what's missing. Your feedback directly drives the roadmap. ",
      },
    ],
    footer:
      "unio-lab.com · Open source · No procurement required · Co-authored case study",
    layout: "phases" as const,
  },
  {
    id: "bigger-picture",
    tag: "BEYOND COMPLIANCE",
    title: "The Data Act forces a question\nyou'd eventually ask anyway.",
    subtitle: null,
    body: "How does Bürkert turn equipment data into a managed, governed, customer-accessible asset? EDIP is built for device communication. The layer above it — centralised data services, customer portals, governed API access — doesn't exist yet.",
    items: [
      {
        phase: "→",
        name: "Compliance infrastructure becomes commercial infrastructure",
        desc: "The equipment registry, data catalog, and customer portal you build for compliance are the same components you need for a data services business. Build once, serve both.",
      },
      {
        phase: "→",
        name: "Customer data access becomes a differentiator",
        desc: "Your pharma and food customers will prefer the manufacturer who gives them structured, self-service access to equipment data. Compliance becomes a competitive advantage.",
      },
      {
        phase: "→",
        name: "The investment compounds",
        desc: "Every equipment record, every data mapping, every customer onboarded for compliance is an asset that makes the next digital service cheaper to build.",
      },
    ],
    footer: "Dativo solves compliance now. The same infrastructure unlocks revenue later.",
    layout: "phases" as const,
  },
  {
    id: "how-we-build",
    tag: "HOW WE BUILD",
    title: "Spec → Agent → Ship",
    subtitle: null,
    body: "Every system we build starts as a machine-readable specification authored by a senior engineer. AI agents implement against that spec under human governance. Every output is verified against the contract — not against vibes.\n\nDativo was built this way. Production platform, shipped in weeks, open-source on GitHub. That's not a pitch — it's the repo you can read right now.",
    items: [
      {
        phase: "→",
        name: "Specifications are visible before code is written",
        desc: "You read the spec. You approve it. You file change requests on record. If you've ever received software that didn't match what you asked for — this is the fix.",
      },
      {
        phase: "→",
        name: "Full handoff, no lock-in",
        desc: "Source code, specifications, agent configuration, documentation. Everything is yours. We don't create dependencies — we deliver assets.",
      },
    ],
    footer: "app.unio-lab.com/demo — public project demo, real specs, no login required",
    layout: "phases" as const,
  },
  {
    id: "enablement",
    tag: "AI ENABLEMENT",
    title: "Your R&D engineers become 10× more productive.\nNot by working harder. By directing agents.",
    subtitle: null,
    body: "Bürkert's competitive advantage is domain expertise — fluid dynamics, sensor physics, process control. That expertise doesn't get replaced by AI. It gets amplified. Your engineers define what to build. AI agents handle the implementation volume. The methodology makes that handoff precise and verifiable.",
    items: [
      {
        phase: "01",
        name: "We work alongside your team on a real project",
        desc: "Not a training workshop. Not a PowerPoint about AI strategy. A joint engineering engagement where your people spec, direct, and verify alongside ours.",
      },
      {
        phase: "02",
        name: "Your engineers learn by doing",
        desc: "Spec authoring. Agent orchestration. Verification workflows. The skills transfer happens through the work itself — not through a course.",
      },
      {
        phase: "03",
        name: "The capability stays with Bürkert",
        desc: "Tooling, methodology, templates — all transferred. Your team ships their own digital products at the speed the market demands. No ongoing dependency.",
      },
    ],
    footer: "The future competitive advantage is speed of digital product delivery — not headcount",
    layout: "phases" as const,
  },
  {
    id: "roadmap",
    tag: "PARTNERSHIP ROADMAP",
    title: "Three phases. Each one earns the next.",
    subtitle: null,
    body: null,
    items: [
      {
        phase: "NOW",
        name: "Dativo design partnership",
        desc: "Adapt Dativo to Bürkert's architecture. One working session to define requirements. Running instance on your infrastructure within weeks. You evaluate with real data.",
      },
      {
        phase: "NEXT",
        name: "Scope the digital layer above EDIP",
        desc: "If the design partnership proves the methodology: scope a cloud data platform, customer portal, or API layer as a joint engineering project. You review the specification before we write code.",
      },
      {
        phase: "THEN",
        name: "Your team builds at AI speed",
        desc: "Methodology transfer through joint projects. Your R&D engineers direct AI agents. Bürkert ships its own digital products — independently, permanently, at a pace the market now rewards.",
      },
    ],
    footer: "Each phase is independent — commit to one, evaluate, then decide on the next",
    layout: "phases" as const,
  },
  {
    id: "close",
    tag: null,
    title: "Next Steps: Alignment & Scope",
    subtitle: "\n\nmafdhal@dativo.dev\ndativo.dev/demo · unio-lab.com",
    body: null,
    items: null,
    footer: "Dativo × Unio Lab · Compliance platform + Spec-driven engineering",
    layout: "center" as const,
  },
];
 
// ─── COMPONENTS ───
 
function PhaseList({
  items,
}: {
  items: Array<{ phase: string; name: string; desc: string }>;
}) {
  return (
    <div className="mt-6 flex flex-col gap-5">
      {items.map((item, i) => (
        <div key={i} className="flex gap-4 items-start">
          <span className="font-mono text-sm text-navy opacity-60 min-w-[28px] pt-0.5">
            {item.phase}
          </span>
          <div className="flex-1">
            <div className="font-mono text-[15px] text-navy font-medium tracking-tight mb-1">
              {item.name}
            </div>
            <div className="font-body text-sm text-grey-accent leading-relaxed">
              {item.desc}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
 
function Slide({
  data,
  isActive,
}: {
  data: (typeof slides)[number];
  isActive: boolean;
}) {
  const isCenter = data.layout === "center";
 
  return (
    <div
      className={`absolute inset-0 flex flex-col items-center bg-white transition-opacity duration-300 ${
        isActive ? "opacity-100" : "opacity-0"
      }`}
      style={{
        justifyContent: isCenter ? "center" : "flex-start",
        padding: isCenter ? "60px 40px" : "56px 40px 40px",
      }}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#022A5A 1px, transparent 1px), linear-gradient(90deg, #022A5A 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
 
      {/* Left accent bar */}
      <div className="absolute top-0 left-0 w-[3px] h-20 bg-navy" />
 
      {/* Content */}
      <div
        className="relative z-10 w-full max-w-[900px]"
      >
        {data.tag && (
          <div
            className="font-mono text-[11px] tracking-[3px] text-navy/60 mb-5"
            style={{ textAlign: isCenter ? "center" : "left" }}
          >
            {data.tag}
          </div>
        )}
 
        <h1
          className="font-heading font-bold text-navy leading-tight m-0 whitespace-pre-line"
          style={{
            fontSize: isCenter ? 36 : 30,
            marginBottom: data.subtitle ? 16 : data.body ? 24 : 0,
            textAlign: isCenter ? "center" : "left",
          }}
        >
          {data.title}
        </h1>
 
        {data.subtitle && (
          <p
            className="font-body text-grey-accent leading-relaxed m-0 whitespace-pre-line"
            style={{
              fontSize: isCenter ? 17 : 16,
              marginBottom: data.body ? 24 : data.items ? 8 : 0,
              textAlign: isCenter ? "center" : "left",
            }}
          >
            {data.subtitle}
          </p>
        )}
 
        {data.body && (
          <p
            className="font-body text-[15px] text-grey-accent leading-[1.7] m-0 max-w-[720px] whitespace-pre-line"
            style={{
              marginBottom: data.items ? 8 : 0,
              textAlign: isCenter ? "center" : "left",
            }}
          >
            {data.body}
          </p>
        )}
 
        {data.items && <PhaseList items={data.items} />}
      </div>
 
      {/* Footer */}
      {data.footer && (
        <div className="absolute bottom-7 left-10 right-10 flex justify-between items-center">
          <span className="font-mono text-[11px] text-navy/20 tracking-[1px]">
            {data.footer}
          </span>
          <span className="font-mono text-[11px] text-navy/20">
            {slides.findIndex((s) => s.id === data.id) + 1} /{" "}
            {slides.length}
          </span>
        </div>
      )}
    </div>
  );
}
 
// ─── PASSWORD GATE ───
 
function PasswordGate({ onUnlock }: { onUnlock: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "burkert2026") {
      sessionStorage.setItem("deck-burkert-auth", "1");
      onUnlock();
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };
 
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-sm text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-grey-accent">
          Protected Presentation
        </p>
        <h1 className="mt-4 font-heading text-2xl font-bold text-navy">
          Dativo × Bürkert
        </h1>
        <form onSubmit={handleSubmit} className="mt-8">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter access code"
            autoFocus
            className={`w-full rounded-lg border px-4 py-3 text-center font-mono text-sm outline-none transition-colors ${
              error
                ? "border-red-400 bg-red-50"
                : "border-navy/10 bg-white focus:border-navy/40"
            }`}
          />
          <button
            type="submit"
            className="mt-4 w-full rounded-lg bg-navy px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-navy-mid"
          >
            View Presentation
          </button>
        </form>
        {error && (
          <p className="mt-3 text-sm text-red-500">Invalid access code</p>
        )}
      </div>
    </div>
  );
}
 
// ─── MAIN DECK ───
 
export default function BurkertDeck() {
  const [unlocked, setUnlocked] = useState(false);
  const [current, setCurrent] = useState(0);
  const [isActive, setIsActive] = useState(true);
 
  useEffect(() => {
    document.body.classList.add("deck-mode");
    return () => document.body.classList.remove("deck-mode");
  }, []);
 
  useEffect(() => {
    if (sessionStorage.getItem("deck-burkert-auth") === "1") {
      setUnlocked(true);
    }
  }, []);
 
  const goTo = useCallback(
    (idx: number) => {
      if (idx === current || idx < 0 || idx >= slides.length) return;
      setIsActive(false);
      setTimeout(() => {
        setCurrent(idx);
        setIsActive(true);
      }, 200);
    },
    [current],
  );
 
  useEffect(() => {
    if (!unlocked) return;
    const handler = (e: KeyboardEvent) => {
      if (
        e.key === "ArrowRight" ||
        e.key === " " ||
        e.key === "Enter"
      ) {
        e.preventDefault();
        goTo(current + 1);
      }
      if (e.key === "ArrowLeft" || e.key === "Backspace") {
        e.preventDefault();
        goTo(current - 1);
      }
      if (e.key === "Home") goTo(0);
      if (e.key === "End") goTo(slides.length - 1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [current, unlocked, goTo]);
 
  if (!unlocked) {
    return <PasswordGate onUnlock={() => setUnlocked(true)} />;
  }
 
  return (
    <div className="w-full h-screen bg-white flex flex-col font-body select-none overflow-hidden">
      {/* Slide area */}
      <div
        className="flex-1 relative cursor-pointer overflow-hidden"
        onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          if (x > rect.width / 2) goTo(current + 1);
          else goTo(current - 1);
        }}
      >
        <Slide data={slides[current]} isActive={isActive} />
      </div>
 
      {/* Progress bar */}
      <div className="h-[3px] bg-navy/5 flex-shrink-0">
        <div
          className="h-full bg-navy transition-[width] duration-300 ease-out"
          style={{
            width: `${((current + 1) / slides.length) * 100}%`,
          }}
        />
      </div>
 
      {/* Navigation dots */}
      <div className="h-10 flex items-center justify-center gap-2 bg-white flex-shrink-0">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={(e) => {
              e.stopPropagation();
              goTo(i);
            }}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded transition-all duration-300 border-none cursor-pointer p-0 ${
              i === current ? "w-6 bg-navy" : "w-2 bg-navy/10"
            }`}
          />
        ))}
      </div>
    </div>
  );
}