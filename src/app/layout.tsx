"use client";

import "./globals.css";
import { Roboto_Flex } from "next/font/google";
import { SessionProvider } from "next-auth/react";

const roboto = Roboto_Flex({ subsets: ["latin"] });

export interface AuthContextProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: AuthContextProps) {
  return (
    <html lang="pt-br">
      <meta
        httpEquiv="Content-Security-Policy"
        content="img-src * 'self' data: http:;"
      />
      <title>Netflix</title>

      <SessionProvider>
        <body className={roboto.className}>{children}</body>
      </SessionProvider>
    </html>
  );
}
