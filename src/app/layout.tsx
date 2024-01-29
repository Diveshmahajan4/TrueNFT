import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import clsx from "clsx";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Provider from "@/context/Provider";
import { Toaster } from "@/components/ui/sonner";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "TrueNFT",
  description: "NFT marketplace for memberships.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>
          <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange>
            <Provider>
              <Navbar/>
              {children}
            </Provider>
          </ThemeProvider>
            <Toaster/>
          </body>
    </html>
  );
}
