"use client";

import "./globals.css";
import { Roboto_Flex } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { Metadata } from "next";

const roboto = Roboto_Flex({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NetFlix Clone",
  description: "Clone Da Netflix, feita totalmente com Next.js 13",
  viewport: { initialScale: 1, viewportFit: "cover" },
  authors: { name: "Gabriel Barbosa" },
};

export interface AuthContextProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: AuthContextProps) {
  return (
    <SessionProvider>
      <html lang="pt-br">
        <body className={roboto.className}>{children}</body>
      </html>
    </SessionProvider>
  );
}
