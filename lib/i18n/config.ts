export const languages = {
  en: "English",
  id: "Indonesia",
} as const;

export type Language = keyof typeof languages;

export const defaultLanguage: Language = "en";

export const i18nConfig = {
  languages,
  defaultLanguage,
  storageKey: "dashboard-language",
} as const;

