import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs';
import { QueryProvider } from './providers/query-client-provider';
import { PWAInstaller } from './components/PWAInstaller';
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
  title: "Muizti - Nunca olvides un nombre importante",
  description: "Crea relaciones auténticas recordando los nombres y detalles de las personas que importan. Aplica los principios de Dale Carnegie para hacer que las personas se sientan importantes.",
  keywords: "relaciones, nombres, dale carnegie, networking, contactos, milestones, hitos, personas importantes",
  authors: [{ name: "Muizti Team" }],
  creator: "Muizti",
  publisher: "Muizti",
  applicationName: "Muizti",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Muizti",
  },
  formatDetection: {
    telephone: false,
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/icons/icon-192x192.svg", sizes: "192x192", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/icons/icon-152x152.svg", sizes: "152x152", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    title: "Muizti - Nunca olvides un nombre importante",
    description: "Crea relaciones auténticas recordando los nombres y detalles de las personas que importan",
    url: "https://muizti.com",
    siteName: "Muizti",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muizti - Nunca olvides un nombre importante",
    description: "Crea relaciones auténticas recordando los nombres y detalles de las personas que importan",
    creator: "@muizti",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      afterSignInUrl="/app/dashboard"
      afterSignUpUrl="/app/dashboard"
    >
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <QueryProvider>
            {children}
            <PWAInstaller />
          </QueryProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
