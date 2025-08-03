import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Iniciar Sesión - Muizti",
  description: "Inicia sesión en Muizti para acceder a tu cuenta y seguir creando relaciones auténticas recordando nombres importantes.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function SignInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}