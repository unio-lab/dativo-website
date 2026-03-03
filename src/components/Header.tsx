"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

const navLinks = [
  { href: "/product", label: "Product", external: false },
  { href: "/solutions", label: "Solutions", external: false },
  { href: "/about", label: "About", external: false },
  { href: "/pricing", label: "Pricing", external: false },
  { href: "https://github.com/unio-lab/dativo", label: "GitHub", external: true },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/5 bg-white/95 backdrop-blur-sm">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex-shrink-0" aria-label="Dativo home">
          <Image
            src="/logos/logo-dark-on-white.svg"
            alt="Dativo"
            width={120}
            height={32}
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${link.label} (opens in new tab)`}
                className="text-sm font-medium text-grey-accent transition-colors hover:text-navy"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-grey-accent transition-colors hover:text-navy"
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button href="/contact" variant="primary">
            Request Demo
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden rounded-md p-2 text-navy"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-navy/5 bg-white">
          <div className="space-y-1 px-6 pb-4 pt-2">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${link.label} (opens in new tab)`}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-grey-accent hover:bg-navy/5 hover:text-navy"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-grey-accent hover:bg-navy/5 hover:text-navy"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-2">
              <Button href="/contact" variant="primary" className="w-full">
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
