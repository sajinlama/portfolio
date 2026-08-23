import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import Background from "@/components/Background";
import "./globals.css";

const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sajin L. Tamang",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark bg-black">
      <body
        className={`${pressStart.className} bg-black text-emerald-400 min-h-screen relative flex flex-col antialiased selection:bg-emerald-500 selection:text-black leading-relaxed`}
      >
        {/* Persistent Matrix Rain Background */}
        <Background />

        {/* Foreground Content */}
        <div className="relative z-10 flex-1 flex flex-col">{children}</div>
      </body>
    </html>
  );
}