import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Anime Vault",
  description: "Curated anime merch, server ranks, and services — catalogued and kept.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-ivory text-navy min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
