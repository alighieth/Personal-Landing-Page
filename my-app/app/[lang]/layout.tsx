import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import { I18nProviderClient } from "@/locales/client";
import { ReactElement } from "react";
import Footer from "@/components/Footer";
import CursorFollower from "@/components/CursorFollower";
import { getScopedI18n } from "@/locales/server";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollWatcher from "@/components/ScrollWatcher";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "alighieth.",
  description: "Looking for a software engineer",
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({
  params: { lang },
  children,
}: {
  params: { lang: string };
  children: ReactElement;
}) {
  const t = await getScopedI18n("footer");
  return (
    <html lang="en">
      <body className="w-[100vw] scroll-smooth bg-contain bg-black flex flex-col justify-start items-center">
        <I18nProviderClient locale={lang}>
          <ScrollWatcher />
          <ScrollToTop />
          <CursorFollower />
          <Header locale={lang} />
          {children}
          <Footer />
          <div className="w-full text-center p-5 h-8 flex flex-row justify-between items-center">
            <span>{t("created")} alighieth</span>
            <span>&copy;2024</span>
          </div>
        </I18nProviderClient>
      </body>
    </html>
  );
}
