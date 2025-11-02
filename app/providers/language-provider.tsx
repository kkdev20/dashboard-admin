"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { defaultLanguage, type Language, i18nConfig } from "@/lib/i18n/config";
import enCommon from "@/lib/i18n/locales/en/common.json";
import enDashboard from "@/lib/i18n/locales/en/dashboard.json";
import enProducts from "@/lib/i18n/locales/en/products.json";
import enOrders from "@/lib/i18n/locales/en/orders.json";
import enCustomers from "@/lib/i18n/locales/en/customers.json";
import enSettings from "@/lib/i18n/locales/en/settings.json";
import enSidebar from "@/lib/i18n/locales/en/sidebar.json";
import idCommon from "@/lib/i18n/locales/id/common.json";
import idDashboard from "@/lib/i18n/locales/id/dashboard.json";
import idProducts from "@/lib/i18n/locales/id/products.json";
import idOrders from "@/lib/i18n/locales/id/orders.json";
import idCustomers from "@/lib/i18n/locales/id/customers.json";
import idSettings from "@/lib/i18n/locales/id/settings.json";
import idSidebar from "@/lib/i18n/locales/id/sidebar.json";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (namespace: string, key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

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

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(i18nConfig.storageKey) as Language | null;
      if (stored && (stored === "en" || stored === "id")) {
        return stored;
      }
    }
    return defaultLanguage;
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Hydration check - needed for SSR/client hydration
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem(i18nConfig.storageKey, lang);
    }
  }, []);

  const t = useCallback((namespace: string, key: string): string => {
    if (!mounted) return key;
    
    try {
      const namespaced = translations[language][namespace as keyof typeof translations.en];
      if (!namespaced) return key;

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
    } catch {
      return key;
    }
  }, [language, mounted]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
