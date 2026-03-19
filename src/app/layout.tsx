import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import { PurpleDust } from "@/components/PurpleDust";
import "./globals.css";

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const headingFont = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VEVOR STORE",
  description: "Premium digital goods storefront experience built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${headingFont.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body 
        className="min-h-full flex flex-col relative bg-[#020203] text-white"
        suppressHydrationWarning
      >
        <PurpleDust />
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-violet-600/20 blur-[120px] animate-blob" />
          <div className="absolute top-[40%] right-[-10%] w-[30%] h-[50%] rounded-full bg-indigo-600/20 blur-[120px] animate-blob animation-delay-2000" />
          <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[40%] rounded-full bg-purple-600/10 blur-[120px] animate-blob animation-delay-4000" />
          <div className="absolute inset-0 bg-[#020203]/40 backdrop-blur-[1px]" />
        </div>
        <div className="site-noise"></div>
        <div className="relative z-10 flex flex-col flex-1">
          {children}
        </div>
      </body>
    </html>
  );
}
