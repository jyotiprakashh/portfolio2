import type { Metadata } from "next";
import { League_Spartan, Caveat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";


const inter = League_Spartan({ subsets: ["latin"] });

const caveat = Caveat({ subsets: ["latin"] });

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
      <body className={inter.className}>
      <ThemeProvider attribute="class" defaultTheme="dark">
      {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
