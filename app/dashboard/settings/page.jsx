
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Settings,
  Bell,
  Moon,
  ShieldCheck,
  UserRound,
  ChevronLeft,
} from "lucide-react";

export default function SettingsPage() {
  const [notifications, setNotifications] = useState(true);
  const [workoutReminders, setWorkoutReminders] = useState(true);
  const [privateProfile, setPrivateProfile] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const Toggle = ({ enabled, onChange }) => (
    <button
      type="button"
      role="switch"
      aria-checked={enabled}
      onClick={() => onChange(!enabled)}
      className={`relative h-6 w-11 rounded-full transition ${
        enabled ? "bg-pink-500" : "bg-gray-300 dark:bg-gray-700"
      }`}
    >
      <span
        className={`absolute top-1 h-4 w-4 rounded-full bg-white transition-all ${
          enabled ? "right-1" : "right-6"
        }`}
      />
    </button>
  );

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-gray-50 p-5 sm:p-8 dark:bg-gray-950"
    >
      <div className="mx-auto max-w-4xl">
        {/* عنوان صفحه */}
        <div className="mb-8 flex items-center gap-4">
          <Link
            href="/dashboard"
            aria-label="بازگشت به داشبورد"
            className="rounded-xl bg-white p-3 text-gray-600 shadow-sm transition hover:text-pink-600 dark:bg-gray-900 dark:text-gray-300"
          >
            <ArrowRight size={22} />
          </Link>

          <div>
            <h1 className="text-2xl font-black text-gray-800 dark:text-white">
              تنظیمات
            </h1>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              حساب و تجربه کاربری خودت رو مدیریت کن.
            </p>
          </div>
        </div>

        {/* تنظیمات حساب */}
        <section className="mb-5 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-xl bg-pink-100 p-3 text-pink-600 dark:bg-pink-950">
              <UserRound size={22} />
            </div>
            <div>
              <h2 className="font-bold text-gray-800 dark:text-white">
                حساب کاربری
              </h2>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                مدیریت اطلاعات حساب
              </p>
            </div>
          </div>

          <Link
            href="/dashboard/profile"
            className="flex items-center justify-between rounded-xl p-3 transition hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            <div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                اطلاعات پروفایل
              </p>
              <p className="mt-1 text-xs text-gray-400">
                مشاهده و ویرایش اطلاعات شخصی
              </p>
            </div>
            <ChevronLeft size={19} className="text-gray-400" />
          </Link>
        </section>

        {/* اعلان‌ها */}
        <section className="mb-5 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-xl bg-purple-100 p-3 text-purple-600 dark:bg-purple-950">
              <Bell size={22} />
            </div>
            <div>
              <h2 className="font-bold text-gray-800 dark:text-white">
                اعلان‌ها
              </h2>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                انتخاب اعلان‌هایی که دریافت می‌کنی
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between border-b border-gray-100 py-4 dark:border-gray-800">
            <div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                اعلان‌های سایت
              </p>
              <p className="mt-1 text-xs text-gray-400">
                دریافت اطلاعیه‌ها و اخبار
              </p>
            </div>
            <Toggle enabled={notifications} onChange={setNotifications} />
          </div>

          <div className="flex items-center justify-between py-4">
            <div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                یادآوری تمرین
              </p>
              <p className="mt-1 text-xs text-gray-400">
                یادآوری زمان تمرین‌های ورزشی
              </p>
            </div>
            <Toggle
              enabled={workoutReminders}
              onChange={setWorkoutReminders}
            />
          </div>
        </section>

        {/* ظاهر سایت */}
        <section className="mb-5 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-xl bg-indigo-100 p-3 text-indigo-600 dark:bg-indigo-950">
              <Moon size={22} />
            </div>
            <div>
              <h2 className="font-bold text-gray-800 dark:text-white">
                ظاهر سایت
              </h2>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                شخصی‌سازی نمایش سایت
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between py-3">
            <div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                حالت تاریک
              </p>
              <p className="mt-1 text-xs text-gray-400">
                فعال‌سازی حالت تاریک در این صفحه
              </p>
            </div>
            <Toggle enabled={darkMode} onChange={setDarkMode} />
          </div>
        </section>

        {/* حریم خصوصی */}
        <section className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-xl bg-emerald-100 p-3 text-emerald-600 dark:bg-emerald-950">
              <ShieldCheck size={22} />
            </div>
            <div>
              <h2 className="font-bold text-gray-800 dark:text-white">
                حریم خصوصی
              </h2>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                مدیریت نمایش اطلاعات
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between py-3">
            <div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                پروفایل خصوصی
              </p>
              <p className="mt-1 text-xs text-gray-400">
                محدود کردن نمایش پروفایل
              </p>
            </div>
            <Toggle enabled={privateProfile} onChange={setPrivateProfile} />
          </div>
        </section>

        <div className="mt-6 flex items-center gap-2 text-xs text-gray-400">
          <Settings size={15} />
          تنظیمات این نسخه فعلاً در همین صفحه نگهداری می‌شوند.
        </div>
      </div>
    </main>
  );
}
