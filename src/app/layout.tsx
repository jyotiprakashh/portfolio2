import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/fixed-navbar";

export const metadata: Metadata = {
  title: "Jyoti Prakash Panda",
  description: "Portfolio of Jyoti Prakash Panda",
  keywords: ["Jyoti Prakash Panda", "Portfolio", "Jyoti Prakash Panda Portfolio"],
  openGraph: {
    title: "Jyoti Prakash Panda",
    description: "Portfolio of Jyoti Prakash Panda",
    type: "website",
    url: "https://jyotiprakashpanda.vercel.app",
    siteName: "Jyoti Prakash Panda",
    images: [
      {
        url: "https://jyotiprakashpanda.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jyoti Prakash Panda",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex justify-center bg-background">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
