
import Link from "next/link";
import {
  Dumbbell,
  Camera,
  Send,
  Phone,
  MapPin,
  Heart,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <div className="bg-pink-500 p-3 rounded-2xl">
                <Dumbbell size={25} />
              </div>
              <span className="text-2xl font-black">فیت‌بانو</span>
            </Link>

            <p className="text-gray-400 leading-8 mt-5 text-sm">
              فضایی برای قوی‌تر شدن، تجربه حس خوب و ساختن سبک زندگی سالم.
              در فیت‌بانو، قدم‌به‌قدم همراهت هستیم.
            </p>

            <div className="flex items-center gap-4 mt-5">
              <a
                href="#instagram"
                aria-label="اینستاگرام"
                className="bg-gray-800 hover:bg-pink-500 p-3 rounded-xl transition"
              >
       <Camera size={20} />
              </a>

              <a
                href="#telegram"
                aria-label="تلگرام"
                className="bg-gray-800 hover:bg-pink-500 p-3 rounded-xl transition"
              >
                <Send size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-5">دسترسی سریع</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                <Link href="/" className="hover:text-pink-400 transition">
                  صفحه اصلی
                </Link>
              </li>
              <li>
                <Link href="/classes" className="hover:text-pink-400 transition">
                  کلاس‌های ورزشی
                </Link>
              </li>
              <li>
                <Link href="/trainers" className="hover:text-pink-400 transition">
                  مربیان
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-pink-400 transition">
                  درباره ما
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-5">خدمات ما</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>برنامه تمرینی</li>
              <li>بدنسازی بانوان</li>
              <li>پیلاتس و یوگا</li>
              <li>مشاوره ورزشی</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-5">ارتباط با ما</h3>

            <div className="space-y-5 text-gray-400 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="text-pink-400 shrink-0" size={20} />
                <p className="leading-7">
                  آدرس باشگاه پس از تکمیل اطلاعات اضافه می‌شود.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-pink-400 shrink-0" size={20} />
                <span>شماره تماس به‌زودی اضافه می‌شود.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© تمامی حقوق برای فیت‌بانو محفوظ است.</p>

          <p className="flex items-center gap-2">
            ساخته‌شده با
            <Heart size={16} className="text-pink-500" fill="currentColor" />
            برای بانوان
          </p>
        </div>
      </div>
    </footer>
  );
}