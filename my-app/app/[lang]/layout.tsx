import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import { I18nProviderClient } from "@/locales/client";
import { ReactElement } from "react";
import Footer from "@/components/Footer";
import CursorFollower from "@/components/CursorFollower";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "alighieth.",
  description: "Looking for a software engineer",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  params: { lang },
  children,
}: {
  params: { lang: string };
  children: ReactElement;
}) {
  return (
    <html lang="en">
      <body
        className={`scroll-smooth bg-contain bg-black flex flex-col justify-start items-center`}
      >
        <I18nProviderClient locale={lang}>
          <CursorFollower />
          <Header locale={lang} />
          {children}
          <Footer />
        </I18nProviderClient>
      </body>
    </html>
  );
}
