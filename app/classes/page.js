"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Dumbbell,
  Search,
  Clock,
  ArrowLeft,
  Sparkles,
} from "lucide-react";

export default function ClassesPage() {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
const [selectedCategory, setSelectedCategory] = useState("همه");
  useEffect(() => {
    async function getClasses() {
      try {
        const response = await fetch("/api/classes");

        if (!response.ok) {
          throw new Error("دریافت اطلاعات کلاس‌ها ناموفق بود");
        }

        const data = await response.json();
        setClasses(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    getClasses();
  }, []);

const categories = [
  "همه",
  ...new Set(classes.map((item) => item.category)),
];

const filteredClasses = classes.filter((item) => {
  const matchesSearch = item.name
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchesCategory =
    selectedCategory === "همه" ||
    item.category === selectedCategory;

  return matchesSearch && matchesCategory;
});

  return (
    <main className="min-h-screen bg-pink-50 dark:bg-gray-950 px-5 py-14 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* عنوان صفحه */}
        <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-pink-100 dark:bg-pink-950 text-pink-600 dark:text-pink-300 px-5 py-2 rounded-full mb-5">
            <Sparkles size={18} />
            <span className="font-medium">دنیای ورزش فیت‌بانو</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-5">
            کلاس ورزشی مورد علاقه‌ات رو پیدا کن
          </h1>

          <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-8 max-w-2xl mx-auto">
            با انتخاب کلاس مناسب، قدم اول رو برای رسیدن به سلامتی،
            انرژی و حال خوب بردار.
          </p>
        </section>

        {/* جست‌وجو */}
        <div className="max-w-xl mx-auto mb-12 relative">
          <Search
            size={22}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="نام کلاس ورزشی رو جست‌وجو کن..."
            className="w-full bg-white dark:bg-gray-900 text-gray-800 dark:text-white placeholder:text-gray-400 border border-pink-100 dark:border-gray-800 rounded-2xl py-4 pr-12 pl-4 outline-none focus:ring-2 focus:ring-pink-400 transition"
          />
          
        </div>
{/* فیلتر دسته‌بندی */}
<div className="flex flex-wrap justify-center gap-3 mb-12">
  {categories.map((category) => (
    <button
      key={category}
      type="button"
      onClick={() => setSelectedCategory(category)}
      className={`px-5 py-3 rounded-xl font-bold transition-all duration-300 ${
        selectedCategory === category
          ? "bg-pink-500 text-white shadow-lg shadow-pink-200 dark:shadow-none"
          : "bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 border border-pink-100 dark:border-gray-800 hover:bg-pink-100 dark:hover:bg-gray-800"
      }`}
    >
      {category}
    </button>
  ))}
</div>
        {/* وضعیت بارگذاری */}
        {loading ? (
          <div className="text-center py-16">
            <div className="w-12 h-12 border-4 border-pink-200 border-t-pink-500 rounded-full animate-spin mx-auto mb-5" />

            <p className="text-gray-600 dark:text-gray-300">
              در حال دریافت کلاس‌ها...
            </p>
          </div>
        ) : filteredClasses.length === 0 ? (
          <div className="text-center py-16">
            <Dumbbell
              size={48}
              className="mx-auto mb-4 text-pink-400"
            />

            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
              کلاسی پیدا نشد!
            </h2>

            <p className="text-gray-500 dark:text-gray-400">
              عبارت دیگری رو برای جست‌وجو امتحان کن.
            </p>
          </div>
        ) : (
          /* کارت‌های کلاس */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredClasses.map((item) => (
              <Link
                key={item.id}
                href={`/classes/${item.id}`}
                className="block group rounded-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500"
                aria-label={`مشاهده جزئیات کلاس ${item.name}`}
              >
                <article className="h-full bg-white dark:bg-gray-900 rounded-3xl p-6 border border-pink-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                  {/* آیکون و دسته‌بندی */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-950 dark:to-purple-950 text-pink-600 dark:text-pink-300 group-hover:scale-110 transition-transform">
                      <Dumbbell size={30} />
                    </div>

                    <span className="text-sm font-medium text-purple-600 dark:text-purple-300 bg-purple-50 dark:bg-purple-950 px-4 py-2 rounded-full">
                      {item.category}
                    </span>
                  </div>

                  {/* اطلاعات کلاس */}
                  <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                    {item.name}
                  </h2>

                  <p className="text-sm leading-7 text-gray-600 dark:text-gray-300 min-h-14">
                    {item.description}
                  </p>

                  {/* مدت‌زمان */}
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mt-5 mb-5">
                    <Clock size={18} className="text-pink-500" />
                    <span>{item.duration} دقیقه</span>
                  </div>

                  {/* قیمت */}
                  <div className="border-t border-gray-100 dark:border-gray-800 pt-5 mb-5">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      هزینه کلاس
                    </p>

                    <p className="text-xl font-extrabold text-pink-600 dark:text-pink-300">
                      {Number(item.price).toLocaleString("fa-IR")}
                      <span className="text-sm font-medium mr-2">
                        تومان
                      </span>
                    </p>
                  </div>

                  {/* راهنمای ورود به جزئیات */}
                  <div className="flex items-center justify-center gap-2 w-full bg-pink-500 group-hover:bg-pink-600 dark:bg-pink-600 dark:group-hover:bg-pink-500 text-white font-bold py-3.5 px-4 rounded-xl transition-colors duration-300">
                    مشاهده جزئیات
                    <ArrowLeft size={19} />
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}

        {/* بخش پایانی */}
        <section className="mt-16 text-center bg-gradient-to-l from-pink-100 via-purple-100 to-orange-100 dark:from-gray-900 dark:via-purple-950 dark:to-gray-900 rounded-3xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 dark:text-white mb-4">
            آماده‌ای شروع کنی؟ 💗
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-8">
            کلاس مناسب خودت رو انتخاب کن و مسیر سلامتی رو شروع کن.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 text-pink-600 dark:text-pink-300 font-bold px-6 py-3 rounded-xl hover:shadow-md transition"
          >
            بازگشت به صفحه اصلی
            <ArrowLeft size={18} />
          </Link>
        </section>
      </div>
    </main>
  );
}