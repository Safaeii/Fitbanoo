
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  UserRound,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowLeft,
  Dumbbell,
} from "lucide-react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main
      dir="rtl"
      className="flex min-h-screen items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-fuchsia-200 px-4 py-10 dark:from-[#10091f] dark:via-[#24113d] dark:to-[#10091f]"
    >
      <div className="w-full max-w-md">
        {/* لوگو */}

        <Link
          href="/"
          className="mb-8 flex items-center justify-center gap-3"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 text-white shadow-lg">
            <Dumbbell size={30} />
          </div>

          <span className="text-3xl font-black text-purple-950 dark:text-white">
            فیت‌بانو
          </span>
        </Link>

        {/* کارت ثبت‌نام */}

        <div className="rounded-3xl border border-white/80 bg-white/80 p-6 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-gray-900/90 sm:p-9">
          <div className="mb-8 text-center">
            <h1 className="mb-3 text-3xl font-black text-gray-900 dark:text-white">
              عضویت در فیت‌بانو 💗
            </h1>

            <p className="leading-7 text-gray-600 dark:text-gray-400">
              اطلاعاتت رو وارد کن و حساب کاربری خودت رو بساز.
            </p>
          </div>

          <form
            className="space-y-5"
            onSubmit={(event) => {
              event.preventDefault();
              alert("ثبت‌نام هنوز به سرور متصل نشده است.");
            }}
          >
            {/* نام */}

            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-300"
              >
                نام و نام خانوادگی
              </label>

              <div className="relative">
                <UserRound
                  size={20}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-pink-500"
                />

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="نام خودت رو وارد کن"
                  className="w-full rounded-xl border border-pink-200 bg-white py-3.5 pr-12 pl-4 text-gray-800 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-300/40 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />
              </div>
            </div>

            {/* ایمیل */}

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-300"
              >
                ایمیل
              </label>

              <div className="relative">
                <Mail
                  size={20}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-pink-500"
                />

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="example@gmail.com"
                  className="w-full rounded-xl border border-pink-200 bg-white py-3.5 pr-12 pl-4 text-gray-800 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-300/40 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />
              </div>
            </div>

            {/* رمز عبور */}

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-300"
              >
                رمز عبور
              </label>

              <div className="relative">
                <Lock
                  size={20}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-pink-500"
                />

                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  minLength={8}
                  autoComplete="new-password"
                  placeholder="حداقل ۸ کاراکتر"
                  className="w-full rounded-xl border border-pink-200 bg-white py-3.5 pr-12 pl-12 text-gray-800 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-300/40 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={
                    showPassword
                      ? "مخفی کردن رمز عبور"
                      : "نمایش رمز عبور"
                  }
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-pink-500"
                >
                  {showPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>
            </div>

            {/* دکمه ثبت‌نام */}

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-pink-500 to-purple-600 py-4 font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              ساخت حساب کاربری
              <ArrowLeft size={20} />
            </button>
          </form>

          {/* ورود به حساب */}

          <div className="mt-7 border-t border-gray-100 pt-6 text-center dark:border-gray-800">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              قبلاً ثبت‌نام کردی؟
              <Link
                href="/login"
                className="mr-2 font-bold text-pink-600 hover:underline dark:text-pink-400"
              >
                وارد شو
              </Link>
            </p>
          </div>
        </div>

        <Link
          href="/"
          className="mt-6 flex items-center justify-center gap-2 text-gray-600 transition hover:text-pink-600 dark:text-gray-400"
        >
          <ArrowLeft size={18} className="rotate-180" />
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </main>
  );
}
