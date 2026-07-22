/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import en from "./en.json";
import ta from "./ta.json";

type Language = "en" | "ta";
type Dictionary = typeof en;

const dictionaries: Record<Language, Dictionary> = { en, ta };

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const getInitialLanguage = (): Language => {
  const stored = localStorage.getItem("aaris-language");
  if (stored === "ta" || stored === "en") {
    return stored;
  }
  return navigator.language.toLowerCase().startsWith("ta") ? "ta" : "en";
};

const readPath = (dictionary: Dictionary, key: string) => {
  return key.split(".").reduce<unknown>((value, part) => {
    if (value && typeof value === "object" && part in value) {
      return (value as Record<string, unknown>)[part];
    }
    return undefined;
  }, dictionary);
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const value = useMemo<LanguageContextValue>(() => {
    const setLanguage = (nextLanguage: Language) => {
      localStorage.setItem("aaris-language", nextLanguage);
      setLanguageState(nextLanguage);
    };

    return {
      language,
      setLanguage,
      toggleLanguage: () => setLanguage(language === "en" ? "ta" : "en"),
      t: (key) => {
        const translated = readPath(dictionaries[language], key);
        const fallback = readPath(dictionaries.en, key);
        return typeof translated === "string"
          ? translated
          : typeof fallback === "string"
            ? fallback
            : key;
      },
    };
  }, [language]);

  return (
    <LanguageContext.Provider value={value}>
      <div key={language} className="animate-[fadeIn_180ms_ease-out]">
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
}
