import Link from "next/link";
import { Dumbbell, UserRound, Heart } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="bg-gradient-to-l from-pink-100 via-purple-100 to-orange-100 dark:from-gray-900 dark:via-purple-950 dark:to-gray-900 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-white/80 dark:bg-white/10 p-2 rounded-xl text-pink-500 shadow-sm">
            <Dumbbell size={25} />
          </div>

          <span className="text-2xl font-bold text-pink-600 dark:text-pink-300">
            فیت‌بانو
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-gray-700 dark:text-gray-200">
          <Link href="/" className="hover:text-pink-500 dark:hover:text-pink-300 transition">
            خانه
          </Link>

          <Link href="/classes" className="hover:text-pink-500 dark:hover:text-pink-300 transition">
            کلاس‌ها
          </Link>

          <Link href="/trainers" className="hover:text-pink-500 dark:hover:text-pink-300 transition">
            مربیان
          </Link>

          <Link href="/About" className="hover:text-pink-500 dark:hover:text-pink-300 transition">
            درباره ما
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">

          {/* Dark Mode */}
          <ThemeToggle />

          {/* Favorite */}
          <Heart
            size={23}
            className="text-pink-500 dark:text-pink-300 hidden sm:block"
          />

          {/* Login */}
          <Link
            href="/login"
            className="bg-pink-500 hover:bg-pink-600 dark:bg-pink-600 dark:hover:bg-pink-500 text-white px-4 py-3 rounded-xl flex items-center gap-2 transition shadow-sm"
          >
            <UserRound size={20} />
            <span className="hidden sm:inline">ورود / ثبت‌نام</span>
          </Link>

        </div>
      </div>
    </header>
  );
}