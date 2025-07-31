import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ziada Spain",
  description: "Ziada Spain Residency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased m-0 p-0 bg-gradient-to-b from-green-50 to-white flex flex-col min-h-screen`}
      >
        <main className="flex-1">
          {/* This wrapper controls layout width for inner content */}
          <div className="">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}

