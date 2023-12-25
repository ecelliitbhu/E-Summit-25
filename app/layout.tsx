"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { fontSans } from "@/lib/fonts";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";
import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//     applicationName:'E-Summit\'24 | IIT BHU Varanasi',
//     referrer: 'origin-when-cross-origin',
//     title: {
//         default: "E-Summit'24 | IIT BHU Varanasi",
//         template: "%s | E-Summit'24 | IIT BHU Varanasi",
//     },
//     description: "E-Summit'24 | IIT BHU Varanasi",
//     category: "Technology and Entrepreneurship Summit",
//     keywords: [
//         "E-Summit",
//         "E-Summit'24",
//         "E-Summit'24 IIT BHU Varanasi",
//         "IIT BHU Varanasi",
//         "E-Summit IIT BHU Varanasi",
//         "E-Summit'24 IIT BHU",
//     ],
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn("min-h-screen  font-sans antialiased", fontSans.variable)}
      >
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <ParallaxProvider>
            <main className="flex-1 herobackground ">{children}</main>
          </ParallaxProvider>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
