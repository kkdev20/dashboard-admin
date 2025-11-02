"use client";

import { Globe } from "lucide-react";
import { useLanguage } from "@/app/providers/language-provider";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Language } from "@/lib/i18n/config";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const languages: { code: Language; label: string }[] = [
    { code: "en", label: "English" },
    { code: "id", label: "Indonesia" },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setOpen(!open)}
        className="h-9 w-auto sm:h-10 sm:w-auto px-2 sm:px-3 gap-1.5"
        aria-label="Switch language"
        title={language === "en" ? "English" : "Indonesia"}
      >
        <Globe className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
        <span className="text-xs sm:text-sm font-medium text-gray-700">
          {language.toUpperCase()}
        </span>
      </Button>
      <AnimatePresence>
        {open && (
          <>
            {/* Mobile overlay */}
            <div
              className="fixed inset-0 z-40 bg-black/20 sm:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 sm:right-0 top-12 sm:top-12 z-50 min-w-[160px] sm:min-w-[140px] rounded-lg border border-gray-200 bg-white shadow-xl"
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setOpen(false);
                  }}
                  className={`w-full px-4 py-2.5 text-left text-sm transition-colors first:rounded-t-lg last:rounded-b-lg flex items-center justify-between ${
                    language === lang.code
                      ? "bg-blue-50 text-blue-600 font-medium"
                      : "hover:bg-gray-100 text-gray-900"
                  }`}
                >
                  <span>{lang.label}</span>
                  <span className={`text-xs font-mono px-1.5 py-0.5 rounded ${
                    language === lang.code
                      ? "bg-blue-100 text-blue-700"
                      : "bg-gray-100 text-gray-600"
                  }`}>
                    {lang.code.toUpperCase()}
                  </span>
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

