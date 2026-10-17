



"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!mounted) {
    return (
      <button
        aria-label="تغییر تم"
        className="w-11 h-11 rounded-xl bg-white/70"
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "فعال کردن تم روشن" : "فعال کردن تم تاریک"}
      title={isDark ? "تم روشن" : "تم تاریک"}
      className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/70 dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-700 text-purple-600 dark:text-yellow-400 transition shadow-sm"
    >
      {isDark ? <Sun size={22} /> : <Moon size={22} />}
    </button>
  );
}
