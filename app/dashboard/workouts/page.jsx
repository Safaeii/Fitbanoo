"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Dumbbell,
  Clock,
  CheckCircle2,
  Circle,
  Flame,
  CalendarDays,
} from "lucide-react";

const initialWorkouts = [
  {
    id: 1,
    day: "شنبه",
    title: "تمرین پایین‌تنه",
    description: "تمرکز روی پاها و عضلات باسن",
    duration: "۴۵ دقیقه",
    level: "متوسط",
  },
  {
    id: 2,
    day: "یکشنبه",
    title: "تمرین بالاتنه",
    description: "تقویت عضلات دست، سینه و پشت",
    duration: "۴۰ دقیقه",
    level: "متوسط",
  },
  {
    id: 3,
    day: "دوشنبه",
    title: "کاردیو",
    description: "تمرین هوازی و افزایش استقامت",
    duration: "۳۰ دقیقه",
    level: "مبتدی",
  },
  {
    id: 4,
    day: "سه‌شنبه",
    title: "تمرین شکم و میان‌تنه",
    description: "تقویت عضلات مرکزی بدن",
    duration: "۲۵ دقیقه",
    level: "متوسط",
  },
  {
    id: 5,
    day: "چهارشنبه",
    title: "تمرین کل بدن",
    description: "تمرین ترکیبی برای کل عضلات",
    duration: "۵۰ دقیقه",
    level: "پیشرفته",
  },
  {
    id: 6,
    day: "پنجشنبه",
    title: "یوگا و کشش",
    description: "افزایش انعطاف‌پذیری و آرامش",
    duration: "۳۰ دقیقه",
    level: "مبتدی",
  },
  {
    id: 7,
    day: "جمعه",
    title: "استراحت و ریکاوری",
    description: "استراحت و بازیابی انرژی بدن",
    duration: "استراحت",
    level: "ریکاوری",
  },
];

export default function WorkoutsPage() {
  const [workouts, setWorkouts] = useState(initialWorkouts);

  const completedCount = workouts.filter(
    (workout) => workout.completed
  ).length;

  function toggleWorkout(id) {
    setWorkouts((previousWorkouts) =>
      previousWorkouts.map((workout) =>
        workout.id === id
          ? { ...workout, completed: !workout.completed }
          : workout
      )
    );
  }

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-gray-50 p-5 sm:p-8 dark:bg-gray-950"
    >
      <div className="mx-auto max-w-6xl">
        {/* عنوان */}
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
              برنامه تمرینی من
            </h1>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              قدم‌به‌قدم به هدف‌های ورزشی‌ات نزدیک شو.
            </p>
          </div>
        </div>

        {/* کارت خلاصه */}
        <section className="mb-8 grid gap-5 sm:grid-cols-3">
          <div className="rounded-2xl bg-gradient-to-l from-pink-500 to-purple-600 p-5 text-white shadow-lg shadow-pink-100 dark:shadow-none">
            <div className="flex items-center justify-between">
              <p className="text-sm text-white/80">تمرین‌های این هفته</p>
              <Dumbbell size={23} />
            </div>
            <p className="mt-4 text-3xl font-black">۶</p>
            <p className="mt-2 text-xs text-white/80">
              به‌علاوه یک روز ریکاوری
            </p>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                تمرین‌های انجام‌شده
              </p>
              <CheckCircle2 className="text-emerald-500" size={23} />
            </div>
            <p className="mt-4 text-3xl font-black text-gray-800 dark:text-white">
              {completedCount}
              <span className="mr-1 text-base font-medium text-gray-400">
                از ۷
              </span>
            </p>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
              <div
                className="h-full rounded-full bg-emerald-500 transition-all"
                style={{ width: `${(completedCount / 7) * 100}%` }}
              />
            </div>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                مدت تمرین روزانه
              </p>
              <Clock className="text-purple-500" size={23} />
            </div>
            <p className="mt-4 text-3xl font-black text-gray-800 dark:text-white">
              ۳۷
              <span className="mr-1 text-base font-medium text-gray-400">
                دقیقه
              </span>
            </p>
            <p className="mt-2 text-xs text-gray-400">
              میانگین تقریبی تمرین‌ها
            </p>
          </div>
        </section>

        {/* عنوان برنامه هفتگی */}
        <div className="mb-5 flex items-center gap-3">
          <div className="rounded-xl bg-pink-100 p-3 text-pink-600 dark:bg-pink-950">
            <CalendarDays size={22} />
          </div>
          <div>
            <h2 className="font-bold text-gray-800 dark:text-white">
              برنامه هفتگی
            </h2>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              بعد از انجام هر تمرین، آن را علامت بزن.
            </p>
          </div>
        </div>

        {/* فهرست تمرین‌ها */}
        <div className="space-y-4">
          {workouts.map((workout) => (
            <article
              key={workout.id}
              className={`rounded-2xl border bg-white p-5 transition dark:bg-gray-900 ${
                workout.completed
                  ? "border-emerald-200 dark:border-emerald-900"
                  : "border-gray-100 dark:border-gray-800"
              }`}
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${
                      workout.completed
                        ? "bg-emerald-100 text-emerald-600 dark:bg-emerald-950"
                        : "bg-pink-50 text-pink-500 dark:bg-pink-950"
                    }`}
                  >
                    {workout.completed ? (
                      <CheckCircle2 size={27} />
                    ) : (
                      <Dumbbell size={27} />
                    )}
                  </div>

                  <div>
                    <p className="mb-1 text-xs font-bold text-pink-500">
                      {workout.day}
                    </p>
                    <h3
                      className={`font-bold ${
                        workout.completed
                          ? "text-gray-400 line-through"
                          : "text-gray-800 dark:text-white"
                      }`}
                    >
                      {workout.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      {workout.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 sm:mr-auto">
                  <span className="rounded-lg bg-gray-100 px-3 py-2 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                    {workout.duration}
                  </span>

                  <span className="rounded-lg bg-purple-50 px-3 py-2 text-xs text-purple-600 dark:bg-purple-950 dark:text-purple-300">
                    {workout.level}
                  </span>

                  <button
                    type="button"
                    onClick={() => toggleWorkout(workout.id)}
                    aria-pressed={Boolean(workout.completed)}
                    className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold transition ${
                      workout.completed
                        ? "bg-emerald-50 text-emerald-600 hover:bg-emerald-100 dark:bg-emerald-950"
                        : "bg-pink-500 text-white hover:bg-pink-600"
                    }`}
                  >
                    {workout.completed ? (
                      <>
                        <CheckCircle2 size={17} />
                        انجام شد
                      </>
                    ) : (
                      <>
                        <Circle size={17} />
                        انجام دادم
                      </>
                    )}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* پیام انگیزشی */}
        <div className="mt-8 rounded-2xl bg-gradient-to-l from-pink-50 to-purple-50 p-6 dark:from-gray-900 dark:to-gray-900">
          <div className="flex items-start gap-4">
            <Flame size={27} className="shrink-0 text-pink-500" />
            <div>
              <h3 className="font-bold text-gray-800 dark:text-white">
                استمرار از کامل بودن مهم‌تره 💗
              </h3>
              <p className="mt-2 text-sm leading-7 text-gray-600 dark:text-gray-400">
                متناسب با توان و شرایط خودت تمرین کن و برای استراحت هم به
                اندازه تمرین ارزش قائل شو.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}