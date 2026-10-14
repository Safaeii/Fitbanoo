import Link from "next/link";
import {
  ArrowLeft,
  Heart,
  Sparkles,
  Users,
  Star,
} from "lucide-react";
import ClassesSection from "./components/ClassesSection.jsx"
import TrainersSection from "./components/TrainersSection.jsx"
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950 transition-colors duration-300">

      <section className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text */}
          <div className="text-center lg:text-right">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-pink-100 dark:bg-pink-500/10 text-pink-600 dark:text-pink-300 px-4 py-2 rounded-full text-sm mb-6">
              <Sparkles size={18} />
              <span>شروع یک زندگی پرانرژی</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-relaxed text-gray-800 dark:text-white">
              قوی‌تر شو،
              <br />
              <span className="text-pink-500 dark:text-pink-400">
                درخشان‌تر زندگی کن!
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-9 mt-6 max-w-xl mx-auto lg:mx-0">
              در فیت‌بانو، کنار هم برای سلامتی، قدرت و حس بهتر تلاش می‌کنیم.
              با مربیان حرفه‌ای و کلاس‌های متنوع، مسیر تناسب اندام خودت رو
              با انگیزه شروع کن.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">

              <Link
                href="/register"
                className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 dark:bg-pink-600 dark:hover:bg-pink-500 text-white px-7 py-4 rounded-2xl shadow-lg shadow-pink-200/50 dark:shadow-pink-950/30 transition"
              >
                شروع عضویت
                <ArrowLeft size={20} />
              </Link>

              <Link
                href="/classes"
                className="flex items-center gap-2 bg-white dark:bg-gray-800 hover:bg-purple-50 dark:hover:bg-gray-700 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800 px-7 py-4 rounded-2xl transition"
              >
                مشاهده کلاس‌ها
              </Link>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-12">

              <div className="bg-white dark:bg-gray-800/90 rounded-2xl p-3 sm:p-4 shadow-sm dark:shadow-black/20 text-center border border-pink-100 dark:border-gray-700 transition-colors">
                <Users className="text-pink-500 dark:text-pink-400 mx-auto mb-2" size={25} />
                <p className="text-xl sm:text-2xl font-black text-gray-800 dark:text-white">
                  ۵۰۰+
                </p>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-300 mt-1">
                  عضو فعال
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800/90 rounded-2xl p-3 sm:p-4 shadow-sm dark:shadow-black/20 text-center border border-orange-100 dark:border-gray-700 transition-colors">
                <Star className="text-orange-400 mx-auto mb-2" size={25} />
                <p className="text-xl sm:text-2xl font-black text-gray-800 dark:text-white">
                  ۱۵+
                </p>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-300 mt-1">
                  مربی حرفه‌ای
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800/90 rounded-2xl p-3 sm:p-4 shadow-sm dark:shadow-black/20 text-center border border-purple-100 dark:border-gray-700 transition-colors">
                <Heart className="text-purple-500 dark:text-purple-400 mx-auto mb-2" size={25} />
                <p className="text-xl sm:text-2xl font-black text-gray-800 dark:text-white">
                  ۱۰+
                </p>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-300 mt-1">
                  نوع کلاس
                </p>
              </div>

            </div>
          </div>

          {/* Image */}
          <div className="relative">

            <div className="absolute -top-6 -right-6 w-32 h-32 bg-pink-300 dark:bg-pink-600 rounded-full blur-3xl opacity-40" />

            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-300 dark:bg-purple-600 rounded-full blur-3xl opacity-40" />

            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-pink-200/50 dark:shadow-black/40 border-4 border-white dark:border-gray-800">

              <img
                src="https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&w=1000&q=85"
                alt="تمرین ورزشی در باشگاه"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />

              {/* Image Overlay */}
              <div className="absolute bottom-5 right-5 left-5 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-2xl p-4 flex items-center gap-4">

                <div className="bg-pink-100 dark:bg-pink-500/20 p-3 rounded-xl">
                  <Heart className="text-pink-500 dark:text-pink-300" size={25} />
                </div>

                <div>
                  <p className="font-bold text-gray-800 dark:text-white">
                    هر روز، یک قدم قوی‌تر
                  </p>

                  <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">
                    مسیر سلامتی از همین امروز شروع می‌شه.
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
        <ClassesSection/>
        <TrainersSection/>
      </section>
    </main>
  );
}