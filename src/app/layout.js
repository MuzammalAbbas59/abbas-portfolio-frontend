import localFont from "next/font/local";
import { Metadata } from "next";

import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Adding Google Fonts
export const metadata = {
  title: "Muzammal Abbas - Software Engineer & Poet",
  description: "Crafting Code & Weaving Words",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Adding Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-gray-900 text-white">{children}</body>
    </html>
  );
}
