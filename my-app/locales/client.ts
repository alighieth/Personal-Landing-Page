// locales/client.ts
"use client";
import { createI18nClient } from "next-international/client";

export const { useI18n, useScopedI18n, I18nProviderClient } = createI18nClient({
  en: () => import("./en.json"),
  de: () => import("./de.json"),
  ar: () => import("./ar.json"),
});
