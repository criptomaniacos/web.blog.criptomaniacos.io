import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "@/styles/globals.css";
import { Footer, Menu } from "@/components/home";

const fontSora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Criptomaníacos",
  description: "Simplificando o mundo das criptomoedas desde 2018",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${fontSora.className} min-h-screen flex flex-col justify-between`}
      >
        <div className="container py-2">
          <Menu />
        </div>
        {children}
        <div className="container py-4">
          <Footer />
        </div>
      </body>
    </html>
  );
}
