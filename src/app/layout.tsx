import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-heading",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Reihan Mudajanto | Creative Developer",
  description:
    "Full-Stack Engineer & Data Strategist. Crafting digital experiences with purpose.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${bricolage.variable} ${dmSans.variable} font-sans antialiased bg-background text-foreground selection:bg-accent selection:text-accent-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
