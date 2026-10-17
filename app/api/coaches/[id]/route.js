"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Star,
  Clock,
  Users,
  Award,
  CalendarDays,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export default function CoachDetailsPage({ params }) {
  const { id } = use(params);

  const [coach, setCoach] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function getCoach() {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(`/api/coaches/${id}`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error("مربی موردنظر پیدا نشد");
          }

          throw new Error("خطا در دریافت اطلاعات مربی");
        }

        const data = await response.json();
        setCoach(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    getCoach();

    return () => controller.abort();
  }, [id]);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#fff5fa] dark:bg-[#100817]">
        <div className="text-center text-pink-600 dark:text-pink-300">
          <div className="mx-auto mb-5 h-12 w-12 animate-spin rounded-full border-4 border-pink-200 border-t-pink-600" />
          در حال دریافت اطلاعات مربی...
        </div>
      </main>
    );
  }

  if (error || !coach) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-5 bg-[#fff5fa] px-5 text-center dark:bg-[#100817]">
        <AlertCircle size={45} className="text-pink-500" />

        <p className="text-lg text-gray-700 dark:text-gray-200">
          {error || "مربی پیدا نشد"}
        </p>

        <Link
          href="/coaches"
          className="rounded-xl bg-pink-600 px-6 py-3 font-bold text-white"
        >
          بازگشت به مربیان
        </Link>
      </main>
    );
  }

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#fff5fa] px-5 py-12 text-[#302038] dark:bg-[#100817] dark:text-[#fff0fa]"
    >
      <div className="mx-auto max-w-5xl">
        <Link
          href="/coaches"
          className="mb-8 inline-flex items-center gap-2 text-pink-600 transition hover:text-purple-600 dark:text-pink-400"
        >
          <ArrowRight size={20} />
          بازگشت به مربیان
        </Link>

        <div className="overflow-hidden rounded-[2rem] border border-pink-100 bg-white shadow-xl shadow-pink-200/30 dark:border-[#432344] dark:bg-[#24142f] dark:shadow-black/30">
          <div className="grid md:grid-cols-2">
            <div className="h-80 overflow-hidden bg-pink-100 md:h-full md:min-h-[440px]">
              <img
                src={coach.image}
                alt={coach.name}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-7 md:p-12">
              <span className="inline-block rounded-full bg-pink-100 px-4 py-2 text-sm font-bold text-pink-700 dark:bg-[#36172f] dark:text-pink-300">
                {coach.specialty}
              </span>

              <h1 className="mt-6 text-3xl font-black md:text-4xl">
                {coach.name}
              </h1>

              <p className="mt-6 leading-9 text-gray-600 dark:text-gray-300">
                {coach.description}
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-pink-50 p-5 dark:bg-[#36172f]">
                  <Clock className="mb-3 text-pink-500" />
                  <p className="font-bold">{coach.experience}</p>
                </div>

                <div className="rounded-2xl bg-purple-50 p-5 dark:bg-[#301d46]">
                  <Star
                    className="mb-3 text-amber-500"
                    fill="currentColor"
                  />
                  <p className="font-bold">
                    امتیاز {coach.rating.toFixed(1)}
                  </p>
                </div>

                <div className="rounded-2xl bg-purple-50 p-5 dark:bg-[#301d46]">
                  <Users className="mb-3 text-purple-500" />
                  <p className="font-bold">
                    {coach.students} هنرجو
                  </p>
                </div>

                <div className="rounded-2xl bg-pink-50 p-5 dark:bg-[#36172f]">
                  <Award className="mb-3 text-pink-500" />
                  <p className="font-bold">مربی ورزشی</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {/* Skills */}
          <div className="rounded-3xl border border-pink-100 bg-white p-8 dark:border-[#432344] dark:bg-[#24142f]">
            <h2 className="mb-6 text-2xl font-black">
              تخصص‌های مربی
            </h2>

            <div className="space-y-4">
              {coach.skills.map((skill) => (
                <div key={skill} className="flex items-center gap-3">
                  <CheckCircle2 className="text-pink-500" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Schedule */}
          <div className="rounded-3xl border border-pink-100 bg-white p-8 dark:border-[#432344] dark:bg-[#24142f]">
            <h2 className="mb-6 flex items-center gap-3 text-2xl font-black">
              <CalendarDays className="text-pink-500" />
              روزهای کلاس
            </h2>

            <div className="flex flex-wrap gap-3">
              {coach.schedule.map((day) => (
                <span
                  key={day}
                  className="rounded-xl bg-pink-100 px-5 py-3 font-bold text-pink-700 dark:bg-[#36172f] dark:text-pink-300"
                >
                  {day}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/classes"
            className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-l from-pink-600 to-purple-600 px-9 py-4 font-bold text-white shadow-xl shadow-pink-500/20 transition hover:brightness-110"
          >
            مشاهده کلاس‌های ورزشی
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </main>
  );
}