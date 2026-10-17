

"use client";

import Link from "next/link";
import {
  Heart,
  Sparkles,
  Dumbbell,
  Users,
  Target,
  ArrowLeft,
  Star,
  Flower2,
  CheckCircle2,
  Zap,
} from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "سلامتی در اولویت",
    description:
      "هدف ما کمک به ساختن عادت‌های سالم و داشتن زندگی پرانرژی‌تر است.",
    gradient: "from-pink-500 to-rose-600",
    shadow: "shadow-pink-500/20",
  },
  {
    icon: Users,
    title: "همراه هم هستیم",
    description:
      "در فیت‌بانو هر فرد می‌تواند مسیر ورزشی مناسب خودش را پیدا کند.",
    gradient: "from-purple-500 to-violet-600",
    shadow: "shadow-purple-500/20",
  },
  {
    icon: Target,
    title: "هدف‌های واقعی",
    description:
      "قدم‌های کوچک و مداوم می‌توانند به تغییرات مثبت و ماندگار کمک کنند.",
    gradient: "from-fuchsia-500 to-pink-600",
    shadow: "shadow-fuchsia-500/20",
  },
];

const benefits = [
  "معرفی کلاس‌های ورزشی متنوع بانوان",
  "دسترسی راحت به اطلاعات کلاس‌ها",
  "فضایی دوستانه و انگیزه‌بخش",
  "توجه به تفاوت نیازها و هدف‌های فردی",
];

export default function AboutPage() {
  return (
    <main
      dir="rtl"
      className="min-h-screen overflow-hidden bg-[#fff5fa] text-[#302038] transition-colors duration-300 dark:bg-[#100817] dark:text-[#fff0fa]"
    >
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-bl from-[#db2777] via-[#c026d3] to-[#6d28d9] px-5 py-24 text-white md:py-32">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-pink-300/20 blur-3xl" />
        <div className="absolute -bottom-28 -left-16 h-80 w-80 rounded-full bg-purple-300/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <div className="grid items-center gap-14 md:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-2 backdrop-blur-md">
                <Sparkles size={18} className="text-yellow-300" />
                <span className="text-sm font-medium">
                  درباره دنیای فیت‌بانو
                </span>
              </div>

              <h1 className="mb-6 text-4xl font-black leading-tight md:text-6xl">
                شروع یک مسیر تازه
                <br />
                <span className="text-yellow-300">
                  با قدرت و انرژی!
                </span>
              </h1>

              <p className="mb-9 max-w-xl text-base leading-9 text-white/90 md:text-lg">
                فیت‌بانو با این هدف ساخته شده که پیدا کردن مسیر ورزشی
                مناسب برای بانوان ساده‌تر، لذت‌بخش‌تر و در دسترس‌تر باشد.
                اینجا می‌توانی قدم اولت را با انگیزه برداری.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/classes"
                  className="inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-4 font-bold text-[#9d174d] shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-yellow-300 hover:text-purple-950"
                >
                  مشاهده کلاس‌ها
                  <ArrowLeft size={20} />
                </Link>

                <Link
                  href="/"
                  className="rounded-2xl border border-white/40 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur-md transition hover:bg-white/20"
                >
                  صفحه اصلی
                </Link>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute inset-0 rotate-6 rounded-[3rem] bg-yellow-300/30 blur-sm" />

              <div className="relative rounded-[3rem] border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl md:p-12">
                <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-[2.5rem] bg-gradient-to-br from-yellow-300 to-pink-400 shadow-2xl md:h-44 md:w-44">
                  <Dumbbell
                    size={90}
                    strokeWidth={1.5}
                    className="text-purple-950"
                  />
                </div>

                <div className="mt-8 text-center">
                  <h2 className="text-3xl font-black">FitBanoo</h2>
                  <p className="mt-3 text-white/85">
                    قدرت، سلامتی و حال خوب
                  </p>
                </div>

                <div className="absolute -left-5 top-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-300 text-purple-950 shadow-xl">
                  <Star size={30} fill="currentColor" />
                </div>

                <div className="absolute -right-5 bottom-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-400 text-white shadow-xl">
                  <Heart size={30} fill="currentColor" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="px-5 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-pink-400/20 to-purple-500/20 blur-xl dark:from-pink-500/15 dark:to-purple-500/15" />

            <div className="relative overflow-hidden rounded-[2.5rem] border border-pink-200 bg-white p-8 shadow-xl shadow-pink-200/30 dark:border-[#633052] dark:bg-[#1c1026] dark:shadow-black/30 md:p-10">
              <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 text-white shadow-lg shadow-pink-500/20">
                <Flower2 size={34} />
              </div>

              <h2 className="mb-5 text-2xl font-black leading-relaxed md:text-3xl">
                ورزش فقط یک فعالیت نیست؛
                <span className="block bg-gradient-to-l from-pink-600 to-purple-600 bg-clip-text text-transparent dark:from-pink-400 dark:to-purple-400">
                  یک سبک زندگی است.
                </span>
              </h2>

              <p className="leading-9 text-[#756579] dark:text-[#d1bfd9]">
                ما باور داریم که هر کسی می‌تواند مسیر خودش را برای داشتن
                زندگی فعال‌تر پیدا کند. فیت‌بانو تلاش می‌کند اطلاعات کلاس‌ها
                و فرصت‌های ورزشی را در فضایی ساده و دوستانه در اختیار بانوان
                قرار دهد.
              </p>

              <div className="mt-8 flex items-center gap-3 rounded-2xl bg-pink-50 p-4 dark:bg-[#2b1737]">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 text-white">
                  <Sparkles size={24} />
                </div>

                <div>
                  <p className="font-bold">هر قدم، یک شروع تازه</p>
                  <p className="mt-1 text-sm text-[#907e98] dark:text-[#bda6c9]">
                    با قدم‌های کوچک شروع کن.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="mb-5 inline-block rounded-full bg-pink-100 px-5 py-2 text-sm font-bold text-pink-700 dark:bg-[#36172f] dark:text-pink-300">
              داستان فیت‌بانو
            </span>

            <h2 className="mb-6 text-3xl font-black leading-relaxed md:text-4xl">
              اینجا قراره
              <span className="block bg-gradient-to-l from-pink-600 via-fuchsia-600 to-purple-600 bg-clip-text text-transparent dark:from-pink-400 dark:via-fuchsia-400 dark:to-purple-400">
                با انگیزه‌تر حرکت کنیم
              </span>
            </h2>

            <p className="mb-5 leading-9 text-[#756579] dark:text-[#d1bfd9]">
              فیت‌بانو با یک ایده ساده شکل گرفته است: پیدا کردن فعالیت
              ورزشی مناسب نباید سخت و پیچیده باشد. به همین دلیل تلاش می‌کنیم
              تجربه‌ای ساده و کاربردی برای آشنایی با کلاس‌های ورزشی بانوان
              فراهم کنیم.
            </p>

            <p className="mb-8 leading-9 text-[#756579] dark:text-[#d1bfd9]">
              هدف ما این است که ورزش را به بخشی لذت‌بخش از زندگی روزمره
              تبدیل کنیم؛ بدون فشارهای غیرضروری و با توجه به شرایط و
              هدف‌های متفاوت هر فرد.
            </p>

            <div className="flex flex-col gap-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle2
                    size={23}
                    className="shrink-0 text-pink-600 dark:text-pink-400"
                  />
                  <span className="font-medium text-[#57435f] dark:text-[#eadcf0]">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#ffe4f1] via-[#fce7ff] to-[#ede9fe] px-5 py-20 dark:from-[#1b0e26] dark:via-[#200f2c] dark:to-[#180d2a] md:py-28">
        <div className="absolute -right-24 top-0 h-64 w-64 rounded-full bg-pink-500/10 blur-3xl" />
        <div className="absolute -bottom-24 left-0 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="mb-4 inline-block rounded-full bg-white px-5 py-2 text-sm font-bold text-purple-700 shadow-sm dark:border dark:border-purple-400/20 dark:bg-[#2b1737] dark:text-purple-300">
              ارزش‌های ما
            </span>

            <h2 className="mb-5 text-3xl font-black md:text-4xl">
              چیزی که به آن باور داریم
            </h2>

            <p className="leading-8 text-[#756579] dark:text-[#cbb8d5]">
              فیت‌بانو بر پایه سلامتی، همراهی و انتخاب آگاهانه ساخته شده است.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className="group rounded-[2rem] border border-pink-100 bg-white p-8 shadow-xl shadow-pink-200/30 transition duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-[#432344] dark:bg-[#24142f] dark:shadow-black/20 dark:hover:border-pink-500/50"
                >
                  <div
                    className={`mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${value.gradient} text-white shadow-xl ${value.shadow} transition duration-300 group-hover:rotate-6 group-hover:scale-110`}
                  >
                    <Icon size={32} />
                  </div>

                  <span className="mb-3 block text-sm font-bold text-pink-600 dark:text-pink-400">
                    ۰{index + 1}
                  </span>

                  <h3 className="mb-4 text-xl font-black">
                    {value.title}
                  </h3>

                  <p className="leading-8 text-[#756579] dark:text-[#d1bfd9]">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="px-5 py-20 md:py-28">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-to-l from-[#db2777] via-[#c026d3] to-[#6d28d9] px-7 py-14 text-center text-white shadow-2xl shadow-purple-500/20 md:px-16 md:py-20">
          <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-24 -left-12 h-64 w-64 rounded-full bg-pink-300/20 blur-2xl" />

          <div className="relative">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/15 backdrop-blur-md">
              <Zap size={34} className="text-yellow-300" />
            </div>

            <h2 className="mb-5 text-3xl font-black leading-relaxed md:text-4xl">
              آماده‌ای مسیر ورزشی خودت رو پیدا کنی؟
            </h2>

            <p className="mx-auto mb-9 max-w-2xl leading-8 text-white/90">
              نگاهی به کلاس‌های ورزشی بنداز و گزینه‌ای رو پیدا کن که با
              علاقه‌ها و هدف‌هات هماهنگ باشه.
            </p>

            <Link
              href="/classes"
              className="inline-flex items-center gap-3 rounded-2xl bg-yellow-300 px-8 py-4 font-black text-purple-950 shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-white"
            >
              دیدن کلاس‌های ورزشی
              <ArrowLeft size={21} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}