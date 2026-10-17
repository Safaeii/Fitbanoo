"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Apple,
  Coffee,
  Sun,
  Moon,
  Cookie,
  GlassWater,
  CheckCircle2,
  Circle,
  Utensils,
} from "lucide-react";

const initialMeals = [
  {
    id: 1,
    title: "صبحانه",
    time: "۸:۰۰ صبح",
    description: "نان سبوس‌دار، تخم‌مرغ و پنیر",
    icon: Coffee,
    color: "bg-orange-100 text-orange-600 dark:bg-orange-950",
  },
  {
    id: 2,
    title: "ناهار",
    time: "۱۳:۰۰ ظهر",
    description: "مرغ یا حبوبات، برنج و سالاد",
    icon: Sun,
    color: "bg-emerald-100 text-emerald-600 dark:bg-emerald-950",
  },
  {
    id: 3,
    title: "میان‌وعده",
    time: "۱۶:۰۰ عصر",
    description: "میوه و مقداری مغزها",
    icon: Cookie,
    color: "bg-purple-100 text-purple-600 dark:bg-purple-950",
  },
  {
    id: 4,
    title: "شام",
    time: "۱۹:۳۰ شب",
    description: "املت سبزیجات یا غذای سبک دلخواه",
    icon: Moon,
    color: "bg-pink-100 text-pink-600 dark:bg-pink-950",
  },
];

export default function NutritionPage() {
  const [meals, setMeals] = useState(initialMeals);
  const [waterGlasses, setWaterGlasses] = useState(0);

  const completedMeals = meals.filter((meal) => meal.completed).length;

  function toggleMeal(id) {
    setMeals((previousMeals) =>
      previousMeals.map((meal) =>
        meal.id === id ? { ...meal, completed: !meal.completed } : meal
      )
    );
  }

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-gray-50 p-5 sm:p-8 dark:bg-gray-950"
    >
      <div className="mx-auto max-w-6xl">
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
              برنامه غذایی من
            </h1>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              تغذیه متنوع و متعادل، بخشی از مراقبت از خودته. 💗
            </p>
          </div>
        </div>

        {/* کارت‌های خلاصه */}
        <section className="mb-8 grid gap-5 sm:grid-cols-2">
          <div className="rounded-2xl bg-gradient-to-l from-pink-500 to-purple-600 p-6 text-white shadow-lg shadow-pink-100 dark:shadow-none">
            <div className="flex items-center justify-between">
              <p className="text-sm text-white/80">وعده‌های امروز</p>
              <Utensils size={25} />
            </div>

            <p className="mt-4 text-3xl font-black">
              {completedMeals}
              <span className="mr-2 text-base font-medium text-white/80">
                از {meals.length} وعده
              </span>
            </p>

            <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/30">
              <div
                className="h-full rounded-full bg-white transition-all"
                style={{
                  width: `${(completedMeals / meals.length) * 100}%`,
                }}
              />
            </div>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  آب مصرف‌شده
                </p>
                <p className="mt-3 text-3xl font-black text-gray-800 dark:text-white">
                  {waterGlasses}
                  <span className="mr-2 text-base font-medium text-gray-400">
                    لیوان
                  </span>
                </p>
              </div>

              <div className="rounded-2xl bg-sky-100 p-4 text-sky-600 dark:bg-sky-950">
                <GlassWater size={28} />
              </div>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  setWaterGlasses((previous) => previous + 1)
                }
                className="rounded-xl bg-sky-500 px-4 py-2 text-sm font-bold text-white transition hover:bg-sky-600"
              >
                + ثبت یک لیوان
              </button>

              <button
                type="button"
                onClick={() =>
                  setWaterGlasses((previous) => Math.max(0, previous - 1))
                }
                disabled={waterGlasses === 0}
                className="rounded-xl border border-gray-200 px-4 py-2 text-sm font-bold text-gray-600 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                −
              </button>
            </div>
          </div>
        </section>

        {/* فهرست وعده‌ها */}
        <div className="mb-5 flex items-center gap-3">
          <div className="rounded-xl bg-pink-100 p-3 text-pink-600 dark:bg-pink-950">
            <Apple size={23} />
          </div>

          <div>
            <h2 className="font-bold text-gray-800 dark:text-white">
              وعده‌های غذایی
            </h2>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              بعد از هر وعده، وضعیتش رو ثبت کن.
            </p>
          </div>
        </div>

        <section className="space-y-4">
          {meals.map((meal) => {
            const Icon = meal.icon;

            return (
              <article
                key={meal.id}
                className={`rounded-2xl border bg-white p-5 transition dark:bg-gray-900 ${
                  meal.completed
                    ? "border-emerald-200 dark:border-emerald-900"
                    : "border-gray-100 dark:border-gray-800"
                }`}
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${meal.color}`}
                    >
                      <Icon size={27} />
                    </div>

                    <div>
                      <p className="mb-1 text-xs text-pink-500">
                        {meal.time}
                      </p>

                      <h3
                        className={`font-bold ${
                          meal.completed
                            ? "text-gray-400"
                            : "text-gray-800 dark:text-white"
                        }`}
                      >
                        {meal.title}
                      </h3>

                      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        {meal.description}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => toggleMeal(meal.id)}
                    aria-pressed={Boolean(meal.completed)}
                    className={`flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition sm:mr-auto ${
                      meal.completed
                        ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-950"
                        : "bg-pink-50 text-pink-600 hover:bg-pink-100 dark:bg-pink-950"
                    }`}
                  >
                    {meal.completed ? (
                      <>
                        <CheckCircle2 size={18} />
                        ثبت شد
                      </>
                    ) : (
                      <>
                        <Circle size={18} />
                        ثبت وعده
                      </>
                    )}
                  </button>
                </div>
              </article>
            );
          })}
        </section>

        {/* پیام پایانی */}
        <div className="mt-8 rounded-2xl bg-gradient-to-l from-pink-50 to-purple-50 p-6 dark:from-gray-900 dark:to-gray-900">
          <h3 className="font-bold text-gray-800 dark:text-white">
            به بدنت گوش بده 🌷
          </h3>
          <p className="mt-2 text-sm leading-7 text-gray-600 dark:text-gray-400">
            این برنامه صرفاً نمونه نمایشی است. نیازهای غذایی افراد متفاوت
            است؛ وعده‌ها و مقدار غذا را متناسب با نیازهای خودت انتخاب کن.
          </p>
        </div>
      </div>
    </main>
  );
}