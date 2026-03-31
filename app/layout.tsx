import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fluid Glass — Structural & Architectural Glazing Specialists",
  description: "Exceptional glazing systems for those who build with vision. Premium architectural glass doors, windows, and structural glazing solutions trusted by leading architects.",
  keywords: "architectural glazing, glass doors, structural glass, glass windows, fluid glass",
  openGraph: {
    title: "Fluid Glass — Structural & Architectural Glazing",
    description: "We bring architecture to life through craft and innovation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
