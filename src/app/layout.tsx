import type { Metadata } from "next";
import { DM_Sans, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const notoArabic = Noto_Sans_Arabic({
  variable: "--font-noto-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Shahad Busaleh — AI Application Developer",
  description:
    "Portfolio of Shahad Busaleh — AI Application Developer building LLM-integrated products and enterprise AI systems.",
  keywords: [
    "Shahad Busaleh",
    "AI Application Developer",
    "Full Stack",
    "Next.js",
    "ASP.NET",
    "Saudi Arabia",
  ],
  authors: [{ name: "Shahad Busaleh" }],
  openGraph: {
    title: "Shahad Busaleh — AI Application Developer",
    description:
      "AI-powered applications, 1st-place travel platform, and enterprise meeting systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${notoArabic.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
