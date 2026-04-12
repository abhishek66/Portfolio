"use client";

import { useState, useEffect, useCallback } from "react";

type Theme = "dark" | "light";

const STORAGE_KEY = "portfolio-theme";

/**
 * Manages the site theme (dark / light).
 *
 * - Reads initial value from the `data-theme` attribute that the anti-flash
 *   inline script has already set on <html> before first paint.
 * - Falls back to localStorage, then defaults to "dark".
 * - Persists every change to localStorage.
 * - Applies the theme by setting `data-theme` on <html>.
 */
export function useTheme() {
  // SSR default: dark — matches the anti-flash script default and avoids
  // a hydration mismatch on first render.
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    // The anti-flash script has already set data-theme correctly before
    // this effect runs, so we read it as the authoritative initial value.
    const fromHtml = document.documentElement.getAttribute(
      "data-theme"
    ) as Theme | null;
    const fromStorage = (() => {
      try {
        return localStorage.getItem(STORAGE_KEY) as Theme | null;
      } catch {
        return null;
      }
    })();

    const resolved: Theme = fromStorage ?? fromHtml ?? "dark";
    setTheme(resolved);
    document.documentElement.setAttribute("data-theme", resolved);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // localStorage unavailable (private mode, permissions, etc.)
      }
      return next;
    });
  }, []);

  return { theme, toggleTheme };
}
