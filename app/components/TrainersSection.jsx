import Link from "next/link";
import { Award, Star, ArrowLeft } from "lucide-react";

const trainers = [
  {
    id: 1,
    name: "سارا محمدی",
    specialty: "مربی بدنسازی",
    experience: "۵ سال سابقه مربیگری",
    rating: "۴.۹",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "نگار رضایی",
    specialty: "مربی پیلاتس",
    experience: "۴ سال سابقه مربیگری",
    rating: "۴.۸",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "مریم کریمی",
    specialty: "مربی یوگا",
    experience: "۶ سال سابقه مربیگری",
    rating: "۵.۰",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=600&q=80",
  },
];

export default function TrainersSection() {
  return (
    <section className="px-6 py-20 bg-pink-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-800 text-pink-600 dark:text-pink-300 text-sm">
            <Award size={18} />
            تیم حرفه‌ای فیت‌بانو
          </span>

          <h2 className="text-3xl md:text-4xl font-black text-gray-800 dark:text-white mt-5">
            با مربیان ما آشنا شو
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mt-4 leading-8">
            مربی مناسب خودت رو پیدا کن و با برنامه‌ای اصولی تمرین کن.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {trainers.map((trainer) => (
            <article
              key={trainer.id}
              className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden border border-pink-100 dark:border-gray-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              <div className="h-72 overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    {trainer.name}
                  </h3>

                  <span className="flex items-center gap-1 text-sm text-orange-500">
                    <Star size={17} fill="currentColor" />
                    {trainer.rating}
                  </span>
                </div>

                <p className="text-pink-600 dark:text-pink-300 font-medium mt-3">
                  {trainer.specialty}
                </p>

                <p className="text-gray-500 dark:text-gray-300 text-sm mt-2">
                  {trainer.experience}
                </p>

                <Link
                  href={`/trainers/${trainer.id}`}
                  className="inline-flex items-center gap-2 mt-6 text-purple-600 dark:text-purple-300 font-semibold hover:gap-3 transition-all"
                >
                  مشاهده پروفایل
                  <ArrowLeft size={18} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}