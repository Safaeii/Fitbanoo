import Link from "next/link";
import {
  Dumbbell,
  Flower2,
  Heart,
  Sparkles,
  ArrowLeft,
} from "lucide-react";

const classes = [
  {
    id: 1,
    title: "بدنسازی بانوان",
    description: "افزایش قدرت و ساختن عادت‌های سالم با تمرینات اصولی.",
    icon: Dumbbell,
    color: "bg-pink-100 dark:bg-pink-500/15",
    iconColor: "text-pink-500 dark:text-pink-300",
    gradient: "from-pink-100 to-rose-50 dark:from-pink-950/40 dark:to-gray-800",
  },
  {
    id: 2,
    title: "پیلاتس",
    description: "تمرکز روی تعادل، انعطاف‌پذیری و کنترل بدن.",
    icon: Flower2,
    color: "bg-purple-100 dark:bg-purple-500/15",
    iconColor: "text-purple-500 dark:text-purple-300",
    gradient: "from-purple-100 to-violet-50 dark:from-purple-950/40 dark:to-gray-800",
  },
  {
    id: 3,
    title: "یوگا",
    description: "آرامش ذهن، تنفس آگاهانه و حرکت‌های هدفمند.",
    icon: Heart,
    color: "bg-orange-100 dark:bg-orange-500/15",
    iconColor: "text-orange-500 dark:text-orange-300",
    gradient: "from-orange-100 to-amber-50 dark:from-orange-950/30 dark:to-gray-800",
  },
  {
    id: 4,
    title: "فیتنس و ایروبیک",
    description: "تمرینات پرنشاط برای تحرک بیشتر و افزایش استقامت.",
    icon: Sparkles,
    color: "bg-rose-100 dark:bg-rose-500/15",
    iconColor: "text-rose-500 dark:text-rose-300",
    gradient: "from-rose-100 to-fuchsia-50 dark:from-fuchsia-950/30 dark:to-gray-800",
  },
];

export default function ClassesSection() {
  return (
    <section className="px-6 py-20 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-pink-600 dark:text-pink-300 bg-pink-100 dark:bg-pink-500/10 px-4 py-2 rounded-full text-sm">
            <Sparkles size={16} />
            کلاس‌های فیت‌بانو
          </span>

          <h2 className="text-3xl md:text-4xl font-black text-gray-800 dark:text-white mt-5">
            کلاس مورد علاقه‌ات رو پیدا کن
          </h2>

          <p className="text-gray-500 dark:text-gray-300 mt-4 leading-8">
            برای شروع یک مسیر تازه، کلاس مناسب خودت رو انتخاب کن.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {classes.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.id}
                className={`bg-gradient-to-br ${item.gradient} rounded-3xl p-6 border border-pink-100/70 dark:border-gray-800 hover:-translate-y-2 hover:shadow-xl hover:shadow-pink-100/50 dark:hover:shadow-black/20 transition duration-300`}
              >
                <div className={`${item.color} ${item.iconColor} w-14 h-14 rounded-2xl flex items-center justify-center`}>
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-bold text-gray-800 dark:text-white mt-6">
                  {item.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm leading-7 mt-3 min-h-[84px]">
                  {item.description}
                </p>

                <Link
                  href={`/classes/${item.id}`}
                  className={`inline-flex items-center gap-2 mt-5 font-semibold ${item.iconColor} hover:gap-3 transition-all`}
                >
                  مشاهده کلاس
                  <ArrowLeft size={18} />
                </Link>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}