"use client";

import { createContext, useContext, useEffect, useState, useMemo } from "react";
import type { ReactNode } from "react";

export type Theme = "light" | "dark" | "contrast";
export type TextSize = "sm" | "base" | "lg";

interface PreferencesContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  textSize: TextSize;
  setTextSize: (size: TextSize) => void;
}

const PreferencesContext = createContext<PreferencesContextType | undefined>(
  undefined
);

export function PreferencesProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");
  const [textSize, setTextSizeState] = useState<TextSize>("base");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    const storedTextSize = localStorage.getItem("textSize") as TextSize | null;

    if (storedTheme) {
      setThemeState(storedTheme);
    }
    if (storedTextSize) {
      setTextSizeState(storedTextSize);
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      const root = window.document.documentElement;
      root.classList.remove("light", "dark", "theme-light", "theme-high-contrast");
      
      if (theme === "dark") {
        root.classList.add("dark");
      } else if (theme === "contrast") {
        root.classList.add("theme-high-contrast");
      } else {
        root.classList.add("theme-light");
      }
      localStorage.setItem("theme", theme);
    }
  }, [theme, isMounted]);

  useEffect(() => {
    if (isMounted) {
      const root = window.document.documentElement;
      root.classList.remove("text-sm", "text-base", "text-lg");
      root.classList.add(`text-${textSize}`);
      localStorage.setItem("textSize", textSize);
    }
  }, [textSize, isMounted]);
  
  const setTheme = (newTheme: Theme) => {
    if(isMounted) setThemeState(newTheme);
  };
  
  const setTextSize = (newSize: TextSize) => {
    if(isMounted) setTextSizeState(newSize);
  }

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      textSize,
      setTextSize,
    }),
    [theme, textSize, isMounted]
  );
  
  if (!isMounted) {
      return null;
  }

  return (
    <PreferencesContext.Provider value={value}>
      {children}
    </PreferencesContext.Provider>
  );
}

export function usePreferences() {
  const context = useContext(PreferencesContext);
  if (context === undefined) {
    throw new Error("usePreferences must be used within a PreferencesProvider");
  }
  return context;
}
