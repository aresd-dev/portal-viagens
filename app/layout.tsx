import type { Metadata } from "next";
import Layout from "@/components/Layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portal de Viagens",
  description: "Descubra destinos turísticos incríveis pelo Brasil.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}