"use client";

import { useEffect, useRef } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    Cal?: any;
  }
}
/* eslint-enable @typescript-eslint/no-explicit-any */

interface CalEmbedProps {
  /** Cal.com link, e.g. "dativo/demo" */
  calLink?: string;
}

export default function CalEmbed({
  calLink = `${process.env.NEXT_PUBLIC_CALCOM_USERNAME}/${process.env.NEXT_PUBLIC_CALCOM_EVENT_SLUG}`,
}: CalEmbedProps) {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // Cal.com official embed bootstrapper — must run BEFORE the script loads.
    // Mirrors the snippet from https://cal.com/docs/core-features/embed
    (function (C: Window, A: string, L: Document) {
      if (!C.Cal) {
        const q: unknown[][] = [];
        const cal = function (...args: unknown[]) {
          q.push(args);
        };
        cal.q = q;
        cal.loaded = false;
        cal.ns = {};
        C.Cal = cal;
      }
      C.Cal("init", { origin: A });

      const s = L.createElement("script");
      s.src = `${A}/embed/embed.js`;
      s.async = true;
      L.head.appendChild(s);
    })(window, "https://app.cal.com", document);

    // Queue the inline embed + branding — Cal processes these once the script loads
    window.Cal("inline", {
      elementOrSelector: "#cal-embed",
      calLink: calLink,
      config: {
        layout: "month_view",
        theme: "light",
      },
    });

    window.Cal("ui", {
      styles: {
        branding: { brandColor: "#022A5A" },
      },
    });
  }, [calLink]);

  return (
    <div
      id="cal-embed"
      className="min-h-[500px] w-full overflow-hidden rounded-lg"
    />
  );
}
