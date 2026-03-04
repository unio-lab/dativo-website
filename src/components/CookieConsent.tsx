"use client";

import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setShowBanner(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowBanner(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-navy/10 bg-white p-4 shadow-lg">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-grey-accent">
          We use cookies to understand how visitors interact with our site.{" "}
          <a href="/privacy" className="text-navy underline hover:text-navy-mid">
            Privacy Policy
          </a>
        </p>
        <div className="flex gap-3">
          <button
            onClick={decline}
            className="rounded-md border border-navy/20 px-4 py-2 text-sm text-navy hover:bg-navy/5"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="rounded-md bg-navy px-4 py-2 text-sm text-white hover:bg-navy-mid"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
