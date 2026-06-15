import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://muhammad-zain-farrukh.vercel.app"),
  title: {
    default: "Muhammad Zain Farrukh | AI/ML Engineer",
    template: "%s | Muhammad Zain Farrukh"
  },
  description:
    "Portfolio of Muhammad Zain Farrukh, an AI/ML Engineer and Full-Stack Developer building computer vision, automation, RAG, and backend systems.",
  keywords: [
    "Muhammad Zain Farrukh",
    "AI/ML Engineer",
    "Full-Stack Developer",
    "Computer Vision",
    "YOLOv8",
    "FastAPI",
    "Next.js",
    "Lahore"
  ],
  authors: [{ name: "Muhammad Zain Farrukh" }],
  creator: "Muhammad Zain Farrukh",
  openGraph: {
    type: "website",
    url: "https://muhammad-zain-farrukh.vercel.app",
    title: "Muhammad Zain Farrukh | AI/ML Engineer",
    description:
      "AI/ML engineer and full-stack developer building intelligent systems, automation tools, and production dashboards.",
    siteName: "Muhammad Zain Farrukh Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammad Zain Farrukh - AI/ML Engineer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Zain Farrukh | AI/ML Engineer",
    description:
      "Building intelligent systems - from computer vision pipelines to full-stack automation tools.",
    images: ["/profile.jpg"]
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
