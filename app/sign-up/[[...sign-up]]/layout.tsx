import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crear Cuenta - Muizti",
  description: "Regístrate en Muizti y comienza a crear relaciones auténticas. Nunca más olvides un nombre importante aplicando los principios de Dale Carnegie.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}