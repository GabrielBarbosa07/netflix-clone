"use client"

import "./globals.css";
import { Roboto_Flex } from "next/font/google";
import { SessionProvider } from "next-auth/react";
// import { Metadata } from "next";

const roboto = Roboto_Flex({ subsets: ["latin"] });

export const dynamic = "force-dynamic"

export const metadata = {
  title: "Netflix Clone !",
};

export interface AuthContextProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: AuthContextProps) {
  return (
    <html lang="pt-br">
      <SessionProvider>
        <body className={roboto.className}>{children}</body>
      </SessionProvider>
    </html>
  );
}
