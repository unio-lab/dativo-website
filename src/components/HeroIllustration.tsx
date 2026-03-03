"use client";

import { useEffect, useState } from "react";

export default function HeroIllustration() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={`relative mx-auto mt-16 w-full max-w-3xl transition-all duration-1000 ${
        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 800 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        {/* Background grid pattern */}
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#022A5A" strokeOpacity="0.04" strokeWidth="1" />
          </pattern>
          <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#022A5A" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#022A5A" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#022A5A" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="nodeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#022A5A" />
            <stop offset="100%" stopColor="#1A3A62" />
          </linearGradient>
        </defs>

        <rect width="800" height="320" fill="url(#grid)" rx="16" />

        {/* Animated flow lines */}
        <g>
          {/* Line: Manufacturer → Platform */}
          <line x1="205" y1="160" x2="335" y2="160" stroke="#022A5A" strokeOpacity="0.12" strokeWidth="2" strokeDasharray="6 4" />
          <line
            x1="205" y1="160" x2="335" y2="160"
            stroke="#022A5A" strokeOpacity="0.4" strokeWidth="2"
            strokeDasharray="20 110"
            className="animate-[flowRight_3s_linear_infinite]"
          />

          {/* Line: Platform → Customer */}
          <line x1="465" y1="130" x2="595" y2="100" stroke="#022A5A" strokeOpacity="0.12" strokeWidth="2" strokeDasharray="6 4" />
          <line
            x1="465" y1="130" x2="595" y2="100"
            stroke="#022A5A" strokeOpacity="0.4" strokeWidth="2"
            strokeDasharray="20 130"
            className="animate-[flowRight_3s_linear_1s_infinite]"
          />

          {/* Line: Platform → Third Party */}
          <line x1="465" y1="190" x2="595" y2="220" stroke="#022A5A" strokeOpacity="0.12" strokeWidth="2" strokeDasharray="6 4" />
          <line
            x1="465" y1="190" x2="595" y2="220"
            stroke="#022A5A" strokeOpacity="0.4" strokeWidth="2"
            strokeDasharray="20 130"
            className="animate-[flowRight_3s_linear_2s_infinite]"
          />
        </g>

        {/* Node: Manufacturer */}
        <g className="animate-[fadeSlideUp_0.8s_ease-out_0.2s_both]">
          <rect x="80" y="110" width="125" height="100" rx="12" fill="white" stroke="#022A5A" strokeOpacity="0.1" strokeWidth="1.5" />
          <rect x="80" y="110" width="125" height="4" rx="2" fill="url(#nodeGrad)" fillOpacity="0.7" />
          {/* Server icon */}
          <rect x="120" y="132" width="44" height="12" rx="3" fill="#022A5A" fillOpacity="0.08" stroke="#022A5A" strokeOpacity="0.15" strokeWidth="1" />
          <circle cx="152" cy="138" r="2" fill="#022A5A" fillOpacity="0.3" />
          <rect x="120" y="148" width="44" height="12" rx="3" fill="#022A5A" fillOpacity="0.08" stroke="#022A5A" strokeOpacity="0.15" strokeWidth="1" />
          <circle cx="152" cy="154" r="2" fill="#022A5A" fillOpacity="0.3" />
          <rect x="120" y="164" width="44" height="12" rx="3" fill="#022A5A" fillOpacity="0.06" stroke="#022A5A" strokeOpacity="0.1" strokeWidth="1" />
          <circle cx="152" cy="170" r="2" fill="#022A5A" fillOpacity="0.2" />
          <text x="142" y="196" textAnchor="middle" fill="#022A5A" fontSize="11" fontWeight="600" fontFamily="system-ui, sans-serif">Manufacturer</text>
        </g>

        {/* Node: Dativo Platform (center) */}
        <g className="animate-[fadeSlideUp_0.8s_ease-out_0.5s_both]">
          <rect x="335" y="100" width="130" height="120" rx="14" fill="url(#nodeGrad)" />
          {/* Shield icon */}
          <path d="M400 125 L400 155 C400 168 390 175 380 180 C370 175 360 168 360 155 L360 125 L380 118 Z"
            fill="none" stroke="white" strokeOpacity="0.5" strokeWidth="1.5" />
          <path d="M373 148 L378 153 L388 140" stroke="white" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          {/* Data flow dots */}
          <circle cx="420" cy="135" r="3" fill="white" fillOpacity="0.3" className="animate-pulse" />
          <circle cx="430" cy="148" r="2" fill="white" fillOpacity="0.2" className="animate-pulse [animation-delay:0.5s]" />
          <circle cx="418" cy="160" r="2.5" fill="white" fillOpacity="0.25" className="animate-pulse [animation-delay:1s]" />
          <text x="400" y="202" textAnchor="middle" fill="white" fontSize="11" fontWeight="600" fontFamily="system-ui, sans-serif">Dativo</text>
        </g>

        {/* Node: Customer */}
        <g className="animate-[fadeSlideUp_0.8s_ease-out_0.8s_both]">
          <rect x="595" y="60" width="125" height="80" rx="12" fill="white" stroke="#022A5A" strokeOpacity="0.1" strokeWidth="1.5" />
          <rect x="595" y="60" width="125" height="4" rx="2" fill="#022A5A" fillOpacity="0.15" />
          {/* User icon */}
          <circle cx="657" cy="86" r="10" fill="#022A5A" fillOpacity="0.08" stroke="#022A5A" strokeOpacity="0.15" strokeWidth="1" />
          <circle cx="657" cy="84" r="4" fill="#022A5A" fillOpacity="0.2" />
          <path d="M649 93 C649 89 653 87 657 87 C661 87 665 89 665 93" fill="#022A5A" fillOpacity="0.15" />
          {/* Data bars */}
          <rect x="617" y="104" width="30" height="3" rx="1.5" fill="#022A5A" fillOpacity="0.12" />
          <rect x="617" y="111" width="22" height="3" rx="1.5" fill="#022A5A" fillOpacity="0.08" />
          <text x="657" y="133" textAnchor="middle" fill="#022A5A" fontSize="11" fontWeight="600" fontFamily="system-ui, sans-serif">Customer</text>
        </g>

        {/* Node: Third Party */}
        <g className="animate-[fadeSlideUp_0.8s_ease-out_1.1s_both]">
          <rect x="595" y="180" width="125" height="80" rx="12" fill="white" stroke="#022A5A" strokeOpacity="0.1" strokeWidth="1.5" />
          <rect x="595" y="180" width="125" height="4" rx="2" fill="#022A5A" fillOpacity="0.15" />
          {/* Building icon */}
          <rect x="645" y="198" width="24" height="24" rx="3" fill="#022A5A" fillOpacity="0.08" stroke="#022A5A" strokeOpacity="0.15" strokeWidth="1" />
          <rect x="649" y="202" width="4" height="4" rx="0.5" fill="#022A5A" fillOpacity="0.15" />
          <rect x="655" y="202" width="4" height="4" rx="0.5" fill="#022A5A" fillOpacity="0.15" />
          <rect x="649" y="210" width="4" height="4" rx="0.5" fill="#022A5A" fillOpacity="0.15" />
          <rect x="655" y="210" width="4" height="4" rx="0.5" fill="#022A5A" fillOpacity="0.15" />
          {/* Data bars */}
          <rect x="617" y="228" width="24" height="3" rx="1.5" fill="#022A5A" fillOpacity="0.12" />
          <rect x="617" y="235" width="18" height="3" rx="1.5" fill="#022A5A" fillOpacity="0.08" />
          <text x="657" y="256" textAnchor="middle" fill="#022A5A" fontSize="11" fontWeight="600" fontFamily="system-ui, sans-serif">Third Party</text>
        </g>

        {/* Animated data packets */}
        <circle r="4" fill="#022A5A" fillOpacity="0.5" className="animate-[packet1_3s_ease-in-out_infinite]" />
        <circle r="3" fill="#022A5A" fillOpacity="0.35" className="animate-[packet2_3s_ease-in-out_1s_infinite]" />
        <circle r="3" fill="#022A5A" fillOpacity="0.35" className="animate-[packet3_3s_ease-in-out_2s_infinite]" />
      </svg>

      <style jsx>{`
        @keyframes flowRight {
          from { stroke-dashoffset: 130; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes packet1 {
          0%, 100% { cx: 205; cy: 160; opacity: 0; }
          10% { opacity: 0.6; }
          50% { cx: 335; cy: 160; opacity: 0.6; }
          60% { opacity: 0; }
        }
        @keyframes packet2 {
          0%, 100% { cx: 465; cy: 130; opacity: 0; }
          10% { opacity: 0.5; }
          50% { cx: 595; cy: 100; opacity: 0.5; }
          60% { opacity: 0; }
        }
        @keyframes packet3 {
          0%, 100% { cx: 465; cy: 190; opacity: 0; }
          10% { opacity: 0.5; }
          50% { cx: 595; cy: 220; opacity: 0.5; }
          60% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
