import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s - Muizti",
    default: "Dashboard - Muizti"
  },
  description: "Gestiona tus relaciones y espacios de trabajo en Muizti. Recuerda nombres importantes y crea hitos memorables.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}