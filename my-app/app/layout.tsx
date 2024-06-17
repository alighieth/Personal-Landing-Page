import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { I18nProviderClient } from "@/locales/client";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "alighieth.",
  description: "Looking for a software engineer",
};

export default function RootLayout({
  params: { lang },
  children,
}: {
  params: { lang: string };
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`scroll-smooth bg-contain bg-gradient-to-r from-slate-800 to-slate-200 flex flex-col justify-start items-center`}
      >
        <I18nProviderClient locale={lang ?? "en"}>
          <Header locale={lang} />
          {children}
        </I18nProviderClient>
      </body>
    </html>
  );
}
