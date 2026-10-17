"use client";

import { useState } from "react";
import {
  Phone,
  MessageCircle,
  X,
  Headset,
  ArrowUpLeft,
} from "lucide-react";

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);

  // شماره تماس مجموعه را اینجا وارد کن.
  const phoneNumber = "09123456789";

  // شماره واتساپ با کد کشور و بدون صفر ابتدایی.
  const whatsappNumber = "989123456789";

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-pink-600 px-6 py-4 font-bold text-white transition hover:bg-pink-700 sm:w-auto"
      >
        ارتباط با مجموعه
        <Headset size={20} />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div
            dir="rtl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            onClick={(event) => event.stopPropagation()}
            className="relative w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl dark:bg-gray-900 sm:p-8"
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="بستن پنجره"
              className="absolute left-5 top-5 rounded-xl p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-white"
            >
              <X size={21} />
            </button>

            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-100 text-pink-600 dark:bg-pink-950 dark:text-pink-300">
              <Headset size={28} />
            </div>

            <h2
              id="contact-modal-title"
              className="text-2xl font-extrabold text-gray-800 dark:text-white"
            >
              ارتباط با مجموعه
            </h2>

            <p className="mt-3 leading-7 text-gray-500 dark:text-gray-400">
              برای دریافت اطلاعات کلاس‌ها، ثبت‌نام و ارتباط با مجموعه،
              یکی از روش‌های زیر را انتخاب کنید.
            </p>

            <div className="mt-7 space-y-3">
              {/* تماس تلفنی */}
              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center gap-4 rounded-2xl border border-gray-100 p-4 transition hover:border-pink-300 hover:bg-pink-50 dark:border-gray-800 dark:hover:bg-gray-800"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-pink-100 text-pink-600 dark:bg-gray-800 dark:text-pink-300">
                  <Phone size={23} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="font-bold text-gray-800 dark:text-white">
                    تماس تلفنی
                  </p>

                  <p dir="ltr" className="mt-1 text-left text-sm text-gray-500 dark:text-gray-400">
                    {phoneNumber}
                  </p>
                </div>

                <ArrowUpLeft
                  size={19}
                  className="shrink-0 text-gray-400"
                />
              </a>

              {/* واتساپ */}
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-gray-100 p-4 transition hover:border-green-300 hover:bg-green-50 dark:border-gray-800 dark:hover:bg-gray-800"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600 dark:bg-gray-800 dark:text-green-400">
                  <MessageCircle size={23} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="font-bold text-gray-800 dark:text-white">
                    واتساپ
                  </p>

                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    ارسال پیام به مجموعه
                  </p>
                </div>

                <ArrowUpLeft
                  size={19}
                  className="shrink-0 text-gray-400"
                />
              </a>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="mt-6 w-full rounded-xl bg-gray-100 py-3 font-semibold text-gray-600 transition hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              بستن پنجره
            </button>
          </div>
        </div>
      )}
    </>
  );
}