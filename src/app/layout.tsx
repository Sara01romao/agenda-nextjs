import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";


export const metadata: Metadata = {
  title: "Agenda",
  description: "Agenda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
