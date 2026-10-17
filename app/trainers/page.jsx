"use client";

import Link from "next/link";
import {
  Dumbbell,
  Star,
  ArrowLeft,
  Heart,
  Sparkles,
  Award,
  Clock,
  Users,
  Search,
} from "lucide-react";

const coaches = [
  {
    id: 1,
    name: "سارا محمدی",
    specialty: "مربی بدنسازی",
    experience: "۵ سال سابقه",
    rating: "۴.۹",
    students: "۱۲۰+",
    color: "from-pink-500 to-rose-600",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=80",
    skills: ["بدنسازی", "تمرین قدرتی"],
  },
  {
    id: 2,
    name: "نگار احمدی",
    specialty: "مربی یوگا",
    experience: "۴ سال سابقه",
    rating: "۴.۸",
    students: "۹۰+",
    color: "from-purple-500 to-violet-600",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&auto=format&fit=crop&q=80",
    skills: ["یوگا", "انعطاف‌پذیری"],
  },
  {
    id: 3,
    name: "مریم رضایی",
    specialty: "مربی پیلاتس",
    experience: "۶ سال سابقه",
    rating: "۵.۰",
    students: "۱۵۰+",
    color: "from-fuchsia-500 to-pink-600",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80",
    skills: ["پیلاتس", "تمرینات اصلاحی"],
  },
  {
    id: 4,
    name: "الهام کریمی",
    specialty: "مربی فیتنس",
    experience: "۳ سال سابقه",
    rating: "۴.۷",
    students: "۷۰+",
    color: "from-rose-500 to-purple-600",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=80",
    skills: ["فیتنس", "تمرین هوازی"],
  },
];

export default function CoachesPage() {
  return (
    <main
      dir="rtl"
      className="min-h-screen overflow-hidden bg-[#fff5fa] text-[#302038] transition-colors duration-300 dark:bg-[#100817] dark:text-[#fff0fa]"
    >
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-bl from-[#db2777] via-[#c026d3] to-[#6d28d9] px-5 py-20 text-white md:py-28">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-pink-300/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-16 h-72 w-72 rounded-full bg-purple-300/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-2 text-sm backdrop-blur-md">
                <Sparkles size={17} className="text-yellow-300" />
                تیم حرفه‌ای فیت‌بانو
              </span>

              <h1 className="mb-6 text-4xl font-black leading-tight md:text-6xl">
                مربی مناسب خودت رو
                <span className="mt-3 block text-yellow-300">
                  پیدا کن!
                </span>
              </h1>

              <p className="mb-8 max-w-xl text-base leading-9 text-white/90 md:text-lg">
                با مربیانی آشنا شو که می‌تونن در مسیر ورزشی همراهت باشن.
                تخصص‌ها رو بررسی کن و با توجه به علاقه‌ات انتخاب کن.
              </p>

              <a
                href="#coaches"
                className="inline-flex items-center gap-3 rounded-2xl bg-white px-7 py-4 font-bold text-purple-700 shadow-xl transition hover:-translate-y-1 hover:bg-yellow-300 hover:text-purple-950"
              >
                مشاهده مربیان
                <ArrowLeft size={20} />
              </a>
            </div>

            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute inset-0 rotate-6 rounded-[3rem] bg-yellow-300/30 blur-sm" />

              <div className="relative rounded-[3rem] border border-white/20 bg-white/10 p-8 text-center shadow-2xl backdrop-blur-xl md:p-12">
                <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-[2rem] bg-gradient-to-br from-yellow-300 to-pink-400 text-purple-950 shadow-xl md:h-40 md:w-40">
                  <Users size={76} strokeWidth={1.5} />
                </div>

                <h2 className="mt-7 text-3xl font-black">
                  FitBanoo Coaches
                </h2>

                <p className="mt-3 leading-8 text-white/80">
                  همراه تو برای یک مسیر ورزشی بهتر
                </p>

                <div className="absolute -left-4 top-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-300 text-purple-950 shadow-lg">
                  <Award size={28} />
                </div>

                <div className="absolute -right-4 bottom-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-400 text-white shadow-lg">
                  <Heart size={28} fill="currentColor" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coaches */}
      <section id="coaches" className="px-5 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="mb-4 inline-block rounded-full bg-pink-100 px-5 py-2 text-sm font-bold text-pink-700 dark:bg-[#36172f] dark:text-pink-300">
                مربیان ما
              </span>

              <h2 className="text-3xl font-black md:text-4xl">
                با مربیان آشنا شو
              </h2>

              <p className="mt-4 leading-8 text-[#756579] dark:text-[#cbb8d5]">
                تخصص‌ها و سبک‌های مختلف رو بررسی کن.
              </p>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-pink-100 bg-white px-5 py-4 dark:border-[#432344] dark:bg-[#24142f]">
              <Search size={21} className="text-pink-500" />
              <span className="text-sm text-[#756579] dark:text-[#d1bfd9]">
                ۴ مربی نمونه
              </span>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {coaches.map((coach) => (
              <article
                key={coach.id}
                className="group overflow-hidden rounded-[2rem] border border-pink-100 bg-white shadow-xl shadow-pink-200/20 transition duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-[#432344] dark:bg-[#24142f] dark:shadow-black/20 dark:hover:border-pink-500/50"
              >
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-pink-200 to-purple-200 dark:from-[#402044] dark:to-[#28163b]">
                  <img
                    src={coach.image}
                    alt={coach.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-purple-950/70 via-transparent to-transparent" />

                  <span className="absolute right-4 top-4 rounded-full border border-white/20 bg-white/90 px-3 py-2 text-xs font-bold text-purple-800 shadow-md">
                    {coach.specialty}
                  </span>

                  <div className="absolute bottom-4 right-4 flex items-center gap-1 rounded-xl bg-white/95 px-3 py-2 text-sm font-bold text-purple-900">
                    <Star
                      size={16}
                      fill="currentColor"
                      className="text-amber-500"
                    />
                    {coach.rating}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="mb-2 text-xl font-black">
                    {coach.name}
                  </h3>

                  <div className="mb-5 flex items-center gap-2 text-sm text-[#8b7793] dark:text-[#c3aecf]">
                    <Clock size={17} className="text-pink-500" />
                    {coach.experience}
                  </div>

                  <div className="mb-5 flex flex-wrap gap-2">
                    {coach.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg bg-pink-50 px-3 py-2 text-xs font-medium text-pink-700 dark:bg-[#36172f] dark:text-pink-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="mb-5 flex items-center justify-between border-t border-pink-100 pt-4 text-sm dark:border-[#432344]">
                    <span className="text-[#8b7793] dark:text-[#c3aecf]">
                      هنرجویان
                    </span>
                    <span className="font-bold text-purple-700 dark:text-purple-300">
                      {coach.students}
                    </span>
                  </div>

                  <Link
                    href={`/coaches/${coach.id}`}
                    className={`flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-l ${coach.color} px-4 py-3 font-bold text-white shadow-lg transition hover:brightness-110`}
                  >
                    مشاهده پروفایل
                    <ArrowLeft size={18} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-8 text-center text-sm leading-7 text-[#8b7793] dark:text-[#bda6c9]">
            اطلاعات و تصاویر این مربیان نمونه هستند و برای نمایش واقعی
            باید با اطلاعات تأییدشده جایگزین شوند.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-20 md:pb-28">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-to-l from-[#db2777] via-[#c026d3] to-[#6d28d9] px-7 py-14 text-center text-white shadow-2xl shadow-purple-500/20 md:px-16 md:py-20">
          <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-24 -left-12 h-64 w-64 rounded-full bg-pink-300/20 blur-2xl" />

          <div className="relative">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15">
              <Dumbbell size={32} className="text-yellow-300" />
            </div>

            <h2 className="mb-5 text-3xl font-black leading-relaxed md:text-4xl">
              مسیر ورزشی خودت رو با انگیزه شروع کن
            </h2>

            <p className="mx-auto mb-8 max-w-2xl leading-8 text-white/90">
              کلاس‌های ورزشی رو بررسی کن و فعالیت موردعلاقه‌ات رو پیدا کن.
            </p>

            <Link
              href="/classes"
              className="inline-flex items-center gap-3 rounded-2xl bg-yellow-300 px-8 py-4 font-black text-purple-950 shadow-xl transition hover:-translate-y-1 hover:bg-white"
            >
              مشاهده کلاس‌ها
              <ArrowLeft size={21} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}