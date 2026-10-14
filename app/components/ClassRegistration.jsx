"use client";

import { useState } from "react";

export default function ClassRegistration({ className }) {
  const [isOpen, setIsOpen] = useState(false);
const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <div className="mt-8">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-gradient-to-l from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-4 rounded-2xl transition-all duration-300"
      >
        {isOpen ? "بستن فرم" : "ثبت‌نام در این کلاس"}
      </button>

      {isOpen && (
        <form
  onSubmit={(event) => {
    event.preventDefault();
    setIsSubmitted(true);
  }}
  className="mt-6 bg-white dark:bg-gray-900 border border-pink-100 dark:border-gray-800 rounded-2xl p-6 space-y-5"
>
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">
            فرم ثبت‌نام کلاس {className}
          </h2>

          <div>
            <label className="block mb-2 text-gray-700 dark:text-gray-300">
              نام و نام خانوادگی
            </label>
            <input
              type="text"
              required
              placeholder="نام خود را وارد کنید"
              className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-transparent text-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700 dark:text-gray-300">
              شماره تماس
            </label>
            <input
              type="tel"
              required
              placeholder="شماره تماس خود را وارد کنید"
              className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-transparent text-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 rounded-xl transition"
          >
            تأیید ثبت‌نام
          </button>
        </form>
      )}
      {isSubmitted && (
  <p className="text-green-600 dark:text-green-400 text-center font-bold">
    ثبت‌نام شما با موفقیت انجام شد! 💚
  </p>
)}
    </div>
  );
}