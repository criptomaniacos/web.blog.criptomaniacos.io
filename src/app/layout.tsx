import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "@/styles/globals.css";

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
      <body className={fontSora.className}>
        <div>menu</div>
        {children}
      </body>
    </html>
  );
}
