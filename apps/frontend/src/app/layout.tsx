import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OlmosOS Enterprise 8",
  description:
    "An interactive Linux-inspired portfolio for Senior Software Engineer David Antonio Olmos Ruiz.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}