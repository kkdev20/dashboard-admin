import type { Language } from "./config";
import enCommon from "./locales/en/common.json";
import enDashboard from "./locales/en/dashboard.json";
import enProducts from "./locales/en/products.json";
import enOrders from "./locales/en/orders.json";
import enCustomers from "./locales/en/customers.json";
import enSettings from "./locales/en/settings.json";
import enSidebar from "./locales/en/sidebar.json";
import idCommon from "./locales/id/common.json";
import idDashboard from "./locales/id/dashboard.json";
import idProducts from "./locales/id/products.json";
import idOrders from "./locales/id/orders.json";
import idCustomers from "./locales/id/customers.json";
import idSettings from "./locales/id/settings.json";
import idSidebar from "./locales/id/sidebar.json";

const translations = {
  en: {
    common: enCommon,
    dashboard: enDashboard,
    products: enProducts,
    orders: enOrders,
    customers: enCustomers,
    settings: enSettings,
    sidebar: enSidebar,
  },
  id: {
    common: idCommon,
    dashboard: idDashboard,
    products: idProducts,
    orders: idOrders,
    customers: idCustomers,
    settings: idSettings,
    sidebar: idSidebar,
  },
} as const;

export type TranslationKey = keyof typeof translations.en;

export function getTranslations(lang: Language) {
  return translations[lang];
}

export function getTranslation(lang: Language, namespace: TranslationKey, key: string): string {
  const namespaced = translations[lang][namespace] as Record<string, unknown>;
  const keys = key.split(".");
  let value: unknown = namespaced;

  for (const k of keys) {
    if (value && typeof value === "object" && k in value) {
      value = (value as Record<string, unknown>)[k];
    } else {
      return key;
    }
  }

  return typeof value === "string" ? value : key;
}

