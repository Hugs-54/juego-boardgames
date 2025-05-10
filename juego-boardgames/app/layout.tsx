import type { Metadata } from "next";
import { Bree_Serif, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ju&Go",
  description: "Le site des créations de jeux de société de Ju&Go",
};

const breeSerif = Bree_Serif({
  weight: "400", // Bree Serif a un seul poids
  subsets: ["latin"],
  variable: "--font-bree", // utile pour Tailwind
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${breeSerif.variable}`}>
      <body className={`${inter.className}`}>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
