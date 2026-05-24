import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "CS AI — Ship Customer Success with AI",
  description: "Automate ticket triage, draft replies, and uncover churn risk with a secure AI assistant built for SaaS teams.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
