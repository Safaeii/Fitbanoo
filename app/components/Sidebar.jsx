"use client";

import Link from "next/link";
import {
  Home,
  UserRound,
  CalendarDays,
  Dumbbell,
  Apple,
  TrendingUp,
  Users,
  Heart,
  Bell,
  Settings,
  ArrowLeft,
  Sparkles,
  X,
  ChevronLeft,
} from "lucide-react";

const menuItems = [
  { label: "داشبورد", icon: Home, href: "/dashboard" },
  { label: "پروفایل من", icon: UserRound, href: "/dashboard/profile" },
  { label: "کلاس‌های من", icon: CalendarDays, href: "/classes" },
  { label: "برنامه تمرینی", icon: Dumbbell, href: "/dashboard/workouts" },
  { label: "برنامه غذایی", icon: Apple, href: "/dashboard/nutrition" },
  { label: "پیشرفت من", icon: TrendingUp, href: "/dashboard/progress" },
  { label: "مربی‌ها", icon: Users, href: "/trainers" },
  { label: "علاقه‌مندی‌ها", icon: Heart, href: "/dashboard/favorites" },
  { label: "اعلان‌ها", icon: Bell, href: "/dashboard/notifications" },
  { label: "تنظیمات", icon: Settings, href: "/dashboard/settings" },
];

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <>
      {/* پس‌زمینه هنگام باز بودن منوی موبایل */}
      {sidebarOpen && (
        <button
          type="button"
          aria-label="بستن منو"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      <aside
        className={`fixed right-0 top-0 z-50 flex h-screen w-72 flex-col overflow-y-auto border-l border-gray-100 bg-white p-5 transition-transform duration-300 dark:border-gray-800 dark:bg-gray-900 ${
          sidebarOpen
            ? "translate-x-0"
            : "translate-x-full lg:translate-x-0"
        }`}
      >
        {/* لوگو */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/"
            onClick={() => setSidebarOpen(false)}
            className="flex items-center gap-3"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 text-white shadow-lg shadow-pink-200 dark:shadow-none">
              <Dumbbell size={26} />
            </div>

            <div>
              <h1 className="text-xl font-black text-gray-900 dark:text-white">
                فیت‌بانو
              </h1>
              <p className="mt-1 text-xs text-gray-400">
                پنل اختصاصی شاگرد
              </p>
            </div>
          </Link>

          <button
            type="button"
            onClick={() => setSidebarOpen(false)}
            aria-label="بستن منو"
            className="rounded-xl p-2 transition hover:bg-gray-100 lg:hidden dark:hover:bg-gray-800"
          >
            <X size={20} />
          </button>
        </div>

        {/* پروفایل کاربر */}
        <Link
          href="/dashboard/profile"
          onClick={() => setSidebarOpen(false)}
          className="mb-8 flex items-center gap-3 rounded-2xl border border-pink-100 bg-gradient-to-l from-pink-50 to-purple-50 p-3 transition hover:border-pink-200 dark:border-gray-800 dark:from-gray-800 dark:to-gray-800"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-400 to-purple-500 text-white">
            <UserRound size={24} />
          </div>

          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-bold text-gray-800 dark:text-white">
              کاربر نمونه
            </p>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              مشاهده پروفایل
            </p>
          </div>

          <ChevronLeft size={18} className="text-gray-400" />
        </Link>

        {/* عنوان منو */}
        <p className="mb-4 px-3 text-xs font-bold text-gray-400">
          منوی اصلی
        </p>

        {/* گزینه‌های منو */}
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.href === "/dashboard";

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                aria-current={isActive ? "page" : undefined}
                className={`group flex items-center gap-3 rounded-2xl px-4 py-3.5 text-sm font-medium transition duration-200 ${
                  isActive
                    ? "bg-gradient-to-l from-pink-500 to-purple-600 text-white shadow-lg shadow-pink-100 dark:shadow-none"
                    : "text-gray-500 hover:bg-pink-50 hover:text-pink-600 dark:text-gray-400 dark:hover:bg-gray-800"
                }`}
              >
                <Icon
                  size={20}
                  className="shrink-0 transition group-hover:scale-110"
                />

                <span className="flex-1">{item.label}</span>

                {isActive && (
                  <ChevronLeft size={17} className="mr-auto" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* کارت انگیزشی */}
        <div className="mt-8 rounded-3xl bg-gradient-to-br from-pink-50 to-purple-50 p-5 dark:from-gray-800 dark:to-gray-800">
          <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-pink-500 shadow-sm dark:bg-gray-700">
            <Sparkles size={23} />
          </div>

          <h3 className="font-bold text-gray-800 dark:text-white">
            تو می‌تونی! 💗
          </h3>

          <p className="mt-2 text-xs leading-6 text-gray-500 dark:text-gray-400">
            هر قدم کوچیک، تو رو به هدف بزرگت نزدیک‌تر می‌کنه.
            استمرار از کامل بودن مهم‌تره.
          </p>

          <div className="mt-4 h-2 overflow-hidden rounded-full bg-white dark:bg-gray-700">
            <div
              className="h-full rounded-full bg-gradient-to-l from-pink-500 to-purple-500"
              style={{ width: "80%" }}
            />
          </div>

          <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
            ۴ جلسه از ۵ جلسه هدف هفتگی
          </p>
        </div>

        {/* بازگشت به سایت */}
        <div className="mt-auto pt-8">
          <div className="mb-4 border-t border-gray-100 dark:border-gray-800" />

          <Link
            href="/"
            onClick={() => setSidebarOpen(false)}
            className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-gray-500 transition hover:bg-pink-50 hover:text-pink-600 dark:text-gray-400 dark:hover:bg-gray-800"
          >
            <ArrowLeft size={19} />
            بازگشت به سایت
          </Link>
        </div>
      </aside>
    </>
  );
}