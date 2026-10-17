"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  TrendingUp,
  Dumbbell,
  Clock,
  Target,
  Trophy,
  CheckCircle2,
} from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const weeklyData = [
  { day: "شنبه", minutes: 35 },
  { day: "یکشنبه", minutes: 50 },
  { day: "دوشنبه", minutes: 30 },
  { day: "سه‌شنبه", minutes: 45 },
  { day: "چهارشنبه", minutes: 60 },
  { day: "پنجشنبه", minutes: 25 },
  { day: "جمعه", minutes: 0 },
];

export default function ProgressPage() {
  const [completedGoals, setCompletedGoals] = useState([true, false, false]);

  const goals = [
    { id: 1, title: "۳ جلسه تمرین در هفته", description: "هدف هفتگی تمرین" },
    { id: 2, title: "۱۵۰ دقیقه فعالیت", description: "فعالیت بدنی هفتگی" },
    { id: 3, title: "یک جلسه ریکاوری", description: "استراحت و کشش" },
  ];

  const completedCount = completedGoals.filter(Boolean).length;

  const totalMinutes = weeklyData.reduce(
    (total, day) => total + day.minutes,
    0
  );

  const activeDays = weeklyData.filter((day) => day.minutes > 0).length;

  function toggleGoal(index) {
    setCompletedGoals((previous) =>
      previous.map((completed, i) => (i === index ? !completed : completed))
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
              پیشرفت من
            </h1>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              تلاش‌های کوچکت رو ببین و به مسیرت ادامه بده. 💗
            </p>
          </div>
        </div>

        {/* کارت‌های آماری */}
        <section className="mb-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl bg-gradient-to-l from-pink-500 to-purple-600 p-5 text-white shadow-lg shadow-pink-100 dark:shadow-none">
            <div className="flex items-center justify-between">
              <p className="text-sm text-white/80">زمان فعالیت هفتگی</p>
              <Clock size={24} />
            </div>
            <p className="mt-4 text-3xl font-black">
              {totalMinutes}
              <span className="mr-2 text-base font-medium text-white/80">
                دقیقه
              </span>
            </p>
            <p className="mt-2 text-xs text-white/80">
              مجموع زمان ثبت‌شده در نمودار
            </p>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                روزهای فعال
              </p>
              <Dumbbell size={24} className="text-pink-500" />
            </div>
            <p className="mt-4 text-3xl font-black text-gray-800 dark:text-white">
              {activeDays}
              <span className="mr-2 text-base font-medium text-gray-400">
                روز
              </span>
            </p>
            <p className="mt-2 text-xs text-gray-400">
              روزهایی که فعالیت ثبت شده
            </p>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                اهداف تکمیل‌شده
              </p>
              <Trophy size={24} className="text-amber-500" />
            </div>
            <p className="mt-4 text-3xl font-black text-gray-800 dark:text-white">
              {completedCount}
              <span className="mr-2 text-base font-medium text-gray-400">
                از {goals.length}
              </span>
            </p>
            <p className="mt-2 text-xs text-gray-400">
              اهدافی که علامت زده‌ای
            </p>
          </div>
        </section>

        {/* نمودار هفتگی */}
        <section className="mb-8 rounded-3xl border border-gray-100 bg-white p-5 shadow-sm sm:p-7 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-xl bg-pink-100 p-3 text-pink-600 dark:bg-pink-950">
              <TrendingUp size={23} />
            </div>
            <div>
              <h2 className="font-bold text-gray-800 dark:text-white">
                فعالیت ورزشی هفتگی
              </h2>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                مدت فعالیت روزانه بر حسب دقیقه
              </p>
            </div>
          </div>

          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={weeklyData}
                margin={{ top: 10, right: 0, left: -20, bottom: 5 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#e5e7eb"
                />
                <XAxis
                  dataKey="day"
                  tick={{ fontSize: 11 }}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  tick={{ fontSize: 11 }}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip
                  formatter={(value) => [`${value} دقیقه`, "مدت فعالیت"]}
                  cursor={{ fill: "#fdf2f8" }}
                />
                <Bar
                  dataKey="minutes"
                  fill="#ec4899"
                  radius={[7, 7, 0, 0]}
                  maxBarSize={42}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* اهداف هفتگی */}
        <section className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm sm:p-7 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-xl bg-purple-100 p-3 text-purple-600 dark:bg-purple-950">
              <Target size={23} />
            </div>
            <div>
              <h2 className="font-bold text-gray-800 dark:text-white">
                اهداف هفتگی من
              </h2>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                هدف‌ها رو بعد از انجام علامت بزن.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {goals.map((goal, index) => (
              <button
                key={goal.id}
                type="button"
                onClick={() => toggleGoal(index)}
                aria-pressed={completedGoals[index]}
                className="flex w-full items-center gap-4 rounded-2xl border border-gray-100 p-4 text-right transition hover:border-pink-200 dark:border-gray-800 dark:hover:border-pink-900"
              >
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                    completedGoals[index]
                      ? "bg-emerald-100 text-emerald-600 dark:bg-emerald-950"
                      : "bg-gray-100 text-gray-400 dark:bg-gray-800"
                  }`}
                >
                  <CheckCircle2 size={22} />
                </div>

                <div className="flex-1">
                  <h3
                    className={`text-sm font-bold ${
                      completedGoals[index]
                        ? "text-emerald-600"
                        : "text-gray-800 dark:text-white"
                    }`}
                  >
                    {goal.title}
                  </h3>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    {goal.description}
                  </p>
                </div>

                <span
                  className={`rounded-lg px-3 py-2 text-xs font-bold ${
                    completedGoals[index]
                      ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-950"
                      : "bg-gray-100 text-gray-500 dark:bg-gray-800"
                  }`}
                >
                  {completedGoals[index] ? "تکمیل شد" : "در انتظار"}
                </span>
              </button>
            ))}
          </div>
        </section>

        <div className="mt-8 rounded-2xl bg-gradient-to-l from-pink-50 to-purple-50 p-6 dark:from-gray-900 dark:to-gray-900">
          <h3 className="font-bold text-gray-800 dark:text-white">
            به پیشرفت خودت افتخار کن! 🌷
          </h3>
          <p className="mt-2 text-sm leading-7 text-gray-600 dark:text-gray-400">
            این اطلاعات نمونه هستند. بعداً می‌تونیم آن‌ها رو به تمرین‌های
            واقعی کاربر متصل کنیم تا آمار به‌صورت خودکار به‌روز بشه.
          </p>
        </div>
      </div>
    </main>
  );
}