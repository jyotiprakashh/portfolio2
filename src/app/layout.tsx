import type { Metadata } from "next";
import { League_Spartan, Caveat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "./components/fixed-navbar";

export const metadata: Metadata = {
  title: "Jyoti Prakash Panda",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider attribute="class" defaultTheme="dark">
        <body className="flex justify-center dark:bg-hBlack bg-hWhite min-h-screen">
          <div className="sm:w-1/3 w-full min-h-screen">
            <Navbar />
            {children}
          </div>
        </body>
      </ThemeProvider>
    </html>
  );
}
