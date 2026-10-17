
"use client";

import Link from "next/link";
import { Heart, ArrowRight, Dumbbell, Users, Trash2 } from "lucide-react";

export default function FavoritesPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-gray-50 p-6 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl">
        {/* عنوان صفحه */}
        <div className="mb-8 flex items-center gap-4">
          <Link
            href="/dashboard"
            className="rounded-xl bg-white p-3 text-gray-600 shadow-sm transition hover:text-pink-600 dark:bg-gray-900 dark:text-gray-300"
          >
            <ArrowRight size={22} />
          </Link>

          <div>
            <h1 className="text-2xl font-black text-gray-800 dark:text-white">
              علاقه‌مندی‌های من
            </h1>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              مربی‌ها و کلاس‌های موردعلاقه‌ات رو اینجا ببین.
            </p>
          </div>
        </div>

        {/* کارت‌های خلاصه */}
        <div className="mb-8 grid gap-5 sm:grid-cols-2">
          <div className="flex items-center gap-4 rounded-2xl border border-pink-100 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <div className="rounded-xl bg-pink-100 p-3 text-pink-600 dark:bg-pink-950">
              <Users size={25} />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                مربی‌های محبوب
              </p>
              <p className="mt-1 text-2xl font-black text-gray-800 dark:text-white">
                ۰
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-purple-100 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <div className="rounded-xl bg-purple-100 p-3 text-purple-600 dark:bg-purple-950">
              <Dumbbell size={25} />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                کلاس‌های محبوب
              </p>
              <p className="mt-1 text-2xl font-black text-gray-800 dark:text-white">
                ۰
              </p>
            </div>
          </div>
        </div>

        {/* حالت خالی */}
        <section className="rounded-3xl border border-gray-100 bg-white px-6 py-16 text-center shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-pink-50 text-pink-500 dark:bg-pink-950">
            <Heart size={38} />
          </div>

          <h2 className="text-xl font-bold text-gray-800 dark:text-white">
            هنوز چیزی ذخیره نکردی!
          </h2>

          <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-gray-500 dark:text-gray-400">
            مربی‌ها و کلاس‌هایی رو که دوست داری به علاقه‌مندی‌هات اضافه کن
            تا همیشه بهشون دسترسی داشته باشی.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              href="/trainers"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-l from-pink-500 to-purple-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-pink-100 transition hover:scale-105 dark:shadow-none"
            >
              <Users size={18} />
              مشاهده مربی‌ها
            </Link>

            <Link
              href="/classes"
              className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-5 py-3 text-sm font-bold text-gray-700 transition hover:border-pink-300 hover:text-pink-600 dark:border-gray-700 dark:text-gray-200"
            >
              <Dumbbell size={18} />
              مشاهده کلاس‌ها
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}