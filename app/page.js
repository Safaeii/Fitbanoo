

import Link from "next/link";
import {
  ArrowLeft,
  Heart,
  Sparkles,
  Users,
  Star,
} from "lucide-react";

import ClassesSection from "./components/ClassesSection.jsx";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-purple-50 transition-colors duration-300 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950">
      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Text */}
          <div className="text-center lg:text-right">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-2 text-sm text-pink-600 dark:bg-pink-500/10 dark:text-pink-300">
              <Sparkles size={18} />
              <span>شروع یک زندگی پرانرژی</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl font-black leading-relaxed text-gray-800 dark:text-white md:text-5xl lg:text-6xl">
              قوی‌تر شو،
              <br />
              <span className="text-pink-500 dark:text-pink-400">
                درخشان‌تر زندگی کن!
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-xl text-lg leading-9 text-gray-600 dark:text-gray-300 lg:mx-0">
              در فیت‌بانو، کنار هم برای سلامتی، قدرت و حس بهتر تلاش می‌کنیم.
              با مربیان حرفه‌ای و کلاس‌های متنوع، مسیر تناسب اندام خودت رو
              با انگیزه شروع کن.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
              <Link
                href="/register"
                className="flex items-center gap-2 rounded-2xl bg-pink-500 px-7 py-4 text-white shadow-lg shadow-pink-200/50 transition hover:bg-pink-600 dark:bg-pink-600 dark:shadow-pink-950/30 dark:hover:bg-pink-500"
              >
                شروع عضویت
                <ArrowLeft size={20} />
              </Link>

              <Link
                href="/classes"
                className="flex items-center gap-2 rounded-2xl border border-purple-200 bg-white px-7 py-4 text-purple-600 transition hover:bg-purple-50 dark:border-purple-800 dark:bg-gray-800 dark:text-purple-300 dark:hover:bg-gray-700"
              >
                مشاهده کلاس‌ها
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-3 sm:gap-4">
              <div className="rounded-2xl border border-pink-100 bg-white p-3 text-center shadow-sm transition-colors dark:border-gray-700 dark:bg-gray-800/90 dark:shadow-black/20 sm:p-4">
                <Users
                  className="mx-auto mb-2 text-pink-500 dark:text-pink-400"
                  size={25}
                />

                <p className="text-xl font-black text-gray-800 dark:text-white sm:text-2xl">
                  ۵۰۰+
                </p>

                <p className="mt-1 text-xs text-gray-500 dark:text-gray-300 sm:text-sm">
                  عضو فعال
                </p>
              </div>

              <div className="rounded-2xl border border-orange-100 bg-white p-3 text-center shadow-sm transition-colors dark:border-gray-700 dark:bg-gray-800/90 dark:shadow-black/20 sm:p-4">
                <Star
                  className="mx-auto mb-2 text-orange-400"
                  size={25}
                />

                <p className="text-xl font-black text-gray-800 dark:text-white sm:text-2xl">
                  ۱۵+
                </p>

                <p className="mt-1 text-xs text-gray-500 dark:text-gray-300 sm:text-sm">
                  مربی حرفه‌ای
                </p>
              </div>

              <div className="rounded-2xl border border-purple-100 bg-white p-3 text-center shadow-sm transition-colors dark:border-gray-700 dark:bg-gray-800/90 dark:shadow-black/20 sm:p-4">
                <Heart
                  className="mx-auto mb-2 text-purple-500 dark:text-purple-400"
                  size={25}
                />

                <p className="text-xl font-black text-gray-800 dark:text-white sm:text-2xl">
                  ۱۰+
                </p>

                <p className="mt-1 text-xs text-gray-500 dark:text-gray-300 sm:text-sm">
                  نوع کلاس
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative  mb-10">
            <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-pink-300 opacity-40 blur-3xl dark:bg-pink-600" />

            <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-purple-300 opacity-40 blur-3xl dark:bg-purple-600" />

            <div className="relative overflow-hidden mt-20 rounded-[2rem] border-4 border-white shadow-2xl shadow-pink-200/50 dark:border-gray-800 dark:shadow-black/40">
              <img
                src="/images/running-48.png"
                alt="تمرین ورزشی در باشگاه"
                className="h-[400px] w-full object-cover md:h-[550px]"
              />
            </div>
          </div>
        </div>

        {/* Classes */}
        <ClassesSection />
      </section>
    </main>
  );
}
