import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dra. Marisol Gandini",
  description:
    " Soy mamá de Paulina y Odontóloga. Desde chiquita me generó mucha curiosidad los materiales e instrumentos al visitar a mi dentista. Siempre dije que iba a ser Odontóloga y así fue...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
