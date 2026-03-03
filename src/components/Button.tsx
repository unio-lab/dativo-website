import Link from "next/link";
import React from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-navy text-white hover:bg-navy-mid focus-visible:ring-navy",
  secondary:
    "bg-white text-navy border border-navy/20 hover:border-navy/40 focus-visible:ring-navy",
  outline:
    "bg-transparent text-navy border border-navy hover:bg-navy hover:text-white focus-visible:ring-navy",
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
  const styles = `${base} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} className={styles} onClick={onClick}>
      {children}
    </button>
  );
}
