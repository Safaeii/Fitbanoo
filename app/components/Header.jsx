


import Link from "next/link";
import { Dumbbell, UserRound,  } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-l from-pink-100 via-purple-100 to-orange-100 shadow-sm transition-colors duration-300 dark:from-gray-900 dark:via-purple-950 dark:to-gray-900">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">

        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <div className="rounded-xl bg-white/80 p-2 text-pink-500 shadow-sm dark:bg-white/10">
            <Dumbbell size={25} />
          </div>

          <span className="text-xl font-bold text-pink-600 sm:text-2xl dark:text-pink-300">
            فیت‌بانو
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-6 font-medium text-gray-700 md:flex lg:gap-8 dark:text-gray-200">
          <Link
            href="/"
            className="transition hover:text-pink-500 dark:hover:text-pink-300"
          >
            خانه
          </Link>

          <Link
            href="/classes"
            className="transition hover:text-pink-500 dark:hover:text-pink-300"
          >
            کلاس‌ها
          </Link>

          <Link
            href="/trainers"
            className="transition hover:text-pink-500 dark:hover:text-pink-300"
          >
            مربیان
          </Link>

          <Link
            href="/About"
            className="transition hover:text-pink-500 dark:hover:text-pink-300"
          >
            درباره ما
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">

          {/* Dark Mode */}
          <ThemeToggle />

     
          {/* Login / Register */}
          <Link
            href="/login"
            className="flex items-center gap-2 rounded-xl bg-pink-500 px-3 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-pink-600 sm:px-4 dark:bg-pink-600 dark:hover:bg-pink-500"
          >
            <UserRound size={19} />
            <span className="hidden sm:inline">ورود / ثبت‌نام</span>
            <span className="sm:hidden">ورود</span>
          </Link>

          {/* Profile */}
          <Link
            href="/dashboard/profile"
            aria-label="پروفایل من"
            title="پروفایل من"
            className="group flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-pink-200 bg-white/80 text-pink-600 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-pink-400 hover:bg-pink-50 hover:shadow-md dark:border-pink-900 dark:bg-white/10 dark:text-pink-300 dark:hover:bg-white/20"
          >
            <UserRound
              size={21}
              className="transition group-hover:scale-110"
            />
          </Link>

        </div>
      </div>
    </header>
  );
}
