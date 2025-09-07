import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/fixed-navbar";

export const metadata: Metadata = {
  title: "Jyoti Prakash Panda",
  description: "Portfolio of Jyoti Prakash Panda",
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
