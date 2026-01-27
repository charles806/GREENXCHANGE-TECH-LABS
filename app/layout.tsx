import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LoadingProvider } from "@/app/providers/LoadingProvider";
import GlobalLoader from "@/component/UI/GlobalLoader";
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
  title: "GREENXCHANGE TECH LABS",
  description: "",
  icons: {
    icon: "/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LoadingProvider>
          <GlobalLoader />
          {children}
        </LoadingProvider>
      </body>
    </html>
  );
}