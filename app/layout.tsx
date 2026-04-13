import type { Metadata } from "next";
import { Dancing_Script } from "next/font/google";
import "./globals.css";

const scriptFont = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "My Little Memory Box",
  description: "Ένα παντοτινό μέρος αναμνήσεων",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el">
      <body>{children}</body>
    </html>
  );
}
