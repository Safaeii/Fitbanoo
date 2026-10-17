"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Bell,
  Check,
  CheckCheck,
  Trash2,
  CalendarDays,
  Dumbbell,
  Heart,
  Info,
  CheckCircle2,
} from "lucide-react";

const initialNotifications = [
  {
    id: 1,
    title: "به فیت‌بانو خوش اومدی! 💗",
    message: "حساب کاربری تو آماده است. می‌تونی اطلاعات پروفایلت رو تکمیل کنی.",
    time: "امروز",
    type: "info",
    read: false,
  },
  {
    id: 2,
    title: "برنامه تمرینی هفتگی",
    message: "برنامه تمرینی این هفته‌ات رو ببین و برای فعالیت‌هات برنامه‌ریزی کن.",
    time: "امروز",
    type: "workout",
    read: false,
  },
  {
    id: 3,
    title: "کلاس‌های جدید",
    message: "کلاس‌های ورزشی رو بررسی کن و کلاس موردعلاقه‌ات رو پیدا کن.",
    time: "دیروز",
    type: "class",
    read: true,
  },
  {
    id: 4,
    title: "علاقه‌مندی‌های تو",
    message: "مربی‌ها و کلاس‌های موردعلاقه‌ات رو در بخش علاقه‌مندی‌ها مدیریت کن.",
    time: "۲ روز پیش",
    type: "favorite",
    read: true,
  },
];

const notificationStyles = {
  info: {
    icon: Info,
    color: "bg-blue-100 text-blue-600 dark:bg-blue-950",
  },
  workout: {
    icon: Dumbbell,
    color: "bg-pink-100 text-pink-600 dark:bg-pink-950",
  },
  class: {
    icon: CalendarDays,
    color: "bg-purple-100 text-purple-600 dark:bg-purple-950",
  },
  favorite: {
    icon: Heart,
    color: "bg-rose-100 text-rose-600 dark:bg-rose-950",
  },
};

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [filter, setFilter] = useState("all");

  const unreadCount = notifications.filter(
    (notification) => !notification.read
  ).length;

  const filteredNotifications = notifications.filter((notification) => {
    if (filter === "unread") return !notification.read;
    if (filter === "read") return notification.read;
    return true;
  });

  function markAsRead(id) {
    setNotifications((previous) =>
      previous.map((notification) =>
        notification.id === id
          ? { ...notification, read: true }
          : notification
      )
    );
  }

  function markAllAsRead() {
    setNotifications((previous) =>
      previous.map((notification) => ({
        ...notification,
        read: true,
      }))
    );
  }

  function deleteNotification(id) {
    setNotifications((previous) =>
      previous.filter((notification) => notification.id !== id)
    );
  }

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-gray-50 p-5 sm:p-8 dark:bg-gray-950"
    >
      <div className="mx-auto max-w-5xl">
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
              اعلان‌های من
            </h1>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              پیام‌ها و اطلاعیه‌های حساب کاربری تو
            </p>
          </div>
        </div>

        {/* خلاصه اعلان‌ها */}
        <section className="mb-8 grid gap-5 sm:grid-cols-2">
          <div className="rounded-2xl bg-gradient-to-l from-pink-500 to-purple-600 p-6 text-white shadow-lg shadow-pink-100 dark:shadow-none">
            <div className="flex items-center justify-between">
              <p className="text-sm text-white/80">همه اعلان‌ها</p>
              <Bell size={25} />
            </div>
            <p className="mt-4 text-3xl font-black">
              {notifications.length}
            </p>
            <p className="mt-2 text-xs text-white/80">
              تعداد کل پیام‌های نمایشی
            </p>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                اعلان‌های خوانده‌نشده
              </p>
              <Bell size={25} className="text-pink-500" />
            </div>
            <p className="mt-4 text-3xl font-black text-gray-800 dark:text-white">
              {unreadCount}
            </p>
            <p className="mt-2 text-xs text-gray-400">
              پیام‌هایی که هنوز بررسی نکرده‌ای
            </p>
          </div>
        </section>

        {/* عنوان فهرست و خواندن همه */}
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <h2 className="font-bold text-gray-800 dark:text-white">
            فهرست اعلان‌ها
          </h2>

          <button
            type="button"
            onClick={markAllAsRead}
            disabled={unreadCount === 0}
            className="flex items-center gap-2 rounded-xl bg-pink-50 px-4 py-2.5 text-sm font-bold text-pink-600 transition hover:bg-pink-100 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-pink-950"
          >
            <CheckCheck size={18} />
            خواندن همه
          </button>
        </div>

        {/* فیلتر اعلان‌ها */}
        <div className="mb-5 flex flex-wrap gap-2">
          {[
            { value: "all", label: "همه" },
            { value: "unread", label: "خوانده‌نشده" },
            { value: "read", label: "خوانده‌شده" },
          ].map((item) => (
            <button
              key={item.value}
              type="button"
              onClick={() => setFilter(item.value)}
              className={`rounded-xl px-4 py-2.5 text-sm font-bold transition ${
                filter === item.value
                  ? "bg-pink-500 text-white"
                  : "bg-white text-gray-500 hover:bg-pink-50 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* فهرست */}
        <section className="space-y-4">
          {filteredNotifications.map((notification) => {
            const style = notificationStyles[notification.type];
            const Icon = style.icon;

            return (
              <article
                key={notification.id}
                className={`rounded-2xl border p-5 transition ${
                  notification.read
                    ? "border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-900"
                    : "border-pink-200 bg-pink-50/50 dark:border-pink-950 dark:bg-gray-900"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${style.color}`}
                  >
                    <Icon size={23} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-bold text-gray-800 dark:text-white">
                        {notification.title}
                      </h3>

                      {!notification.read && (
                        <span className="h-2 w-2 rounded-full bg-pink-500" />
                      )}
                    </div>

                    <p className="mt-2 text-sm leading-7 text-gray-500 dark:text-gray-400">
                      {notification.message}
                    </p>

                    <p className="mt-3 text-xs text-gray-400">
                      {notification.time}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {!notification.read && (
                        <button
                          type="button"
                          onClick={() => markAsRead(notification.id)}
                          className="flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-600 transition hover:bg-emerald-100 dark:bg-emerald-950"
                        >
                          <Check size={15} />
                          علامت‌گذاری به‌عنوان خوانده‌شده
                        </button>
                      )}

                      <button
                        type="button"
                        onClick={() => deleteNotification(notification.id)}
                        className="flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 text-xs font-bold text-gray-500 transition hover:bg-red-50 hover:text-red-500 dark:bg-gray-800"
                      >
                        <Trash2 size={15} />
                        حذف اعلان
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}

          {filteredNotifications.length === 0 && (
            <div className="rounded-3xl border border-gray-100 bg-white px-6 py-14 text-center dark:border-gray-800 dark:bg-gray-900">
              <CheckCircle2
                size={42}
                className="mx-auto mb-4 text-emerald-500"
              />
              <h3 className="font-bold text-gray-800 dark:text-white">
                اعلانی برای نمایش وجود نداره
              </h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                می‌تونی فیلتر دیگه‌ای رو انتخاب کنی.
              </p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}