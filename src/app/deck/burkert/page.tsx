import type { Metadata } from "next";
import BurkertDeck from "./BurkertDeck";

export const metadata: Metadata = {
  title: "Bürkert — Dativo",
  robots: { index: false, follow: false },
};

export default function BurkertDeckPage() {
  return <BurkertDeck />;
}
