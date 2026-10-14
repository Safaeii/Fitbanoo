
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Dumbbell,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowLeft,
  Sparkles,
  Heart,
} from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main
      dir="rtl"
      className="relative isolate flex min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-br from-pink-100 via-purple-100 to-fuchsia-200 px-4 py-10 transition-colors duration-300 dark:from-[#10091f] dark:via-[#24113d] dark:to-[#10091f] sm:px-6"
    >
      {/* نورهای پس‌زمینه */}

      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-pink-400/30 blur-3xl sm:h-96 sm:w-96 dark:bg-pink-600/20" />

      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-purple-400/30 blur-3xl sm:h-96 sm:w-96 dark:bg-purple-600/20" />

      <div className="pointer-events-none absolute right-[12%] top-[15%] text-pink-500 dark:text-pink-300">
        <Sparkles size={28} />
      </div>

      <div className="pointer-events-none absolute bottom-[15%] left-[10%] text-purple-500 dark:text-purple-300">
        <Sparkles size={32} />
      </div>

      {/* محتوای صفحه */}

      <div className="relative z-10 mx-auto w-full max-w-md min-w-0">

        {/* لوگو */}

        <Link
          href="/"
          className="mb-8 flex items-center justify-center gap-3"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 via-fuchsia-500 to-purple-600 text-white shadow-xl shadow-pink-500/30 transition-transform duration-300 hover:rotate-6 hover:scale-110">
            <Dumbbell size={30} />
          </div>

          <div>
            <span className="block text-3xl font-black text-purple-950 dark:text-white">
              فیت‌بانو
            </span>

            <span className="mt-1 block text-xs font-medium text-pink-700 dark:text-pink-300">
              همراه تو در مسیر سلامتی 💗
            </span>
          </div>
        </Link>

        {/* کارت ورود */}

        <div className="w-full min-w-0 rounded-[2rem] border border-white/80 bg-white/80 p-5 shadow-2xl shadow-purple-500/10 backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-gray-900/85 dark:shadow-black/20 sm:p-8 md:p-9">

          {/* آیکون بالای فرم */}

          <div className="mb-5 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-pink-400 to-purple-600 text-white shadow-lg shadow-pink-500/30 sm:h-20 sm:w-20">
              <Heart size={34} className="fill-white/20 sm:h-10 sm:w-10" />
            </div>
          </div>

          {/* عنوان */}

          <div className="mb-8 text-center">
            <h1 className="mb-3 text-2xl font-black leading-relaxed text-gray-900 dark:text-white sm:text-3xl">
              خوش برگشتی! 💗
            </h1>

            <p className="text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
              برای ورود به حساب کاربری خودت اطلاعاتت رو وارد کن.
            </p>
          </div>

          {/* فرم */}

          <form
            className="space-y-5"
            onSubmit={(event) => {
              event.preventDefault();
              alert("فرم ورود هنوز به سیستم احراز هویت متصل نشده است.");
            }}
          >

            {/* ایمیل */}

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-bold text-gray-800 dark:text-gray-200"
              >
                ایمیل
              </label>

              <div className="relative">
                <Mail
                  size={20}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-pink-500 dark:text-pink-400"
                />

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="example@gmail.com"
                  className="w-full min-w-0 rounded-2xl border border-pink-200 bg-white/80 py-3.5 pl-4 pr-12 text-sm text-gray-900 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-pink-500 focus:ring-4 focus:ring-pink-400/20 dark:border-gray-700 dark:bg-gray-800/80 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-pink-400 sm:text-base"
                />
              </div>
            </div>

            {/* رمز عبور */}

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-bold text-gray-800 dark:text-gray-200"
              >
                رمز عبور
              </label>

              <div className="relative">
                <Lock
                  size={20}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-pink-500 dark:text-pink-400"
                />

                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  minLength={8}
                  autoComplete="current-password"
                  placeholder="رمز عبورت رو وارد کن"
                  className="w-full min-w-0 rounded-2xl border border-pink-200 bg-white/80 py-3.5 pl-12 pr-12 text-sm text-gray-900 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-pink-500 focus:ring-4 focus:ring-pink-400/20 dark:border-gray-700 dark:bg-gray-800/80 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-pink-400 sm:text-base"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={
                    showPassword
                      ? "مخفی کردن رمز عبور"
                      : "نمایش رمز عبور"
                  }
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-pink-500 dark:hover:text-pink-400"
                >
                  {showPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>
            </div>

            {/* فراموشی رمز */}

            <div className="flex justify-end">
              <Link
                href="/forgot-password"
                className="text-sm font-semibold text-purple-700 transition hover:text-pink-600 hover:underline dark:text-pink-400 dark:hover:text-pink-300"
              >
                رمز عبورت رو فراموش کردی؟
              </Link>
            </div>

            {/* دکمه ورود */}

            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-l from-pink-500 via-fuchsia-500 to-purple-600 px-3 py-4 text-sm font-extrabold text-white shadow-lg shadow-pink-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/30 active:translate-y-0 sm:text-base"
            >
              ورود به حساب کاربری

              <ArrowLeft
                size={20}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
            </button>
          </form>

          {/* ثبت‌نام */}

          <div className="mt-7 border-t border-pink-100 pt-6 text-center dark:border-gray-800">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              هنوز حساب کاربری نداری؟
            </p>

            <Link
              href="/register"
              className="mt-3 inline-flex items-center gap-2 font-extrabold text-pink-600 transition hover:text-purple-700 dark:text-pink-400 dark:hover:text-pink-300"
            >
              <Heart size={17} />
              ثبت‌نام کن
            </Link>
          </div>
        </div>

        {/* بازگشت به خانه */}

        <Link
          href="/"
          className="mt-6 flex items-center justify-center gap-2 text-sm font-medium text-purple-800 transition hover:text-pink-600 dark:text-purple-200 dark:hover:text-pink-300"
        >
          <ArrowLeft size={18} className="rotate-180" />
          بازگشت به صفحه اصلی
        </Link>

        {/* متن پایین */}

        <p className="mt-6 text-center text-xs text-purple-700/70 dark:text-purple-300/60">
          فیت‌بانو؛ همراه تو برای زندگی سالم‌تر 💜
        </p>
      </div>
    </main>
  );
}
