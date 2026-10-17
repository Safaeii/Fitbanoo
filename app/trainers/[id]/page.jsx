

import {
  Dumbbell,
  Target,
  ClipboardList,
  Activity,
  UserRound,
  Clock,
  Award,
  CalendarDays,
  Phone,
  CheckCircle2,
  ArrowLeft,
  GraduationCap,
  HeartPulse,
  MessageCircle,
X,
} from "lucide-react";
import ContactModal from "../../components/ContactModal";
export default async function TrainerDetails({ params }) {
  const { id } = await params;

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-pink-50 p-6 dark:bg-gray-950 md:p-12"
    >
      <div className="mx-auto max-w-4xl rounded-3xl bg-white p-6 shadow-lg dark:bg-gray-900 md:p-10">

        {/* معرفی مربی */}
        <section className="flex flex-col items-center gap-6 border-b border-gray-100 pb-8 dark:border-gray-800 sm:flex-row sm:items-start">

          <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-3xl bg-pink-100 text-pink-600 dark:bg-gray-800 dark:text-pink-300">
            <Dumbbell size={48} strokeWidth={1.6} />
          </div>

          <div className="text-center sm:text-right">
            <span className="text-sm font-semibold text-pink-600 dark:text-pink-300">
              پروفایل مربی
            </span>

            <h1 className="mb-3 mt-2 text-3xl font-extrabold text-gray-800 dark:text-white">
              مربی شماره {id}
            </h1>

            <p className="max-w-2xl leading-8 text-gray-600 dark:text-gray-300">
              مربی تخصصی تناسب اندام و تمرینات ورزشی با تمرکز بر بهبود
              آمادگی جسمانی، افزایش قدرت و طراحی برنامه تمرینی متناسب
              با شرایط و اهداف هر ورزشکار.
            </p>

            <div className="mt-4 flex flex-wrap justify-center gap-2 sm:justify-start">
              <span className="rounded-full bg-pink-100 px-4 py-2 text-sm text-pink-700 dark:bg-pink-950 dark:text-pink-300">
                بدنسازی
              </span>

              <span className="rounded-full bg-purple-100 px-4 py-2 text-sm text-purple-700 dark:bg-purple-950 dark:text-purple-300">
                تناسب اندام
              </span>

              <span className="rounded-full bg-green-100 px-4 py-2 text-sm text-green-700 dark:bg-green-950 dark:text-green-300">
                برنامه تمرینی
              </span>
            </div>
          </div>
        </section>

        {/* اطلاعات مربی */}
        <section className="mt-8">
          <h2 className="mb-5 text-xl font-bold text-gray-800 dark:text-white">
            اطلاعات مربی
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

            <div className="rounded-2xl bg-pink-50 p-5 dark:bg-gray-800">
              <div className="mb-3 flex items-center gap-2 text-pink-600 dark:text-pink-300">
                <Clock size={20} />

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  سابقه فعالیت
                </p>
              </div>

              <p className="font-bold text-gray-800 dark:text-white">
                بیش از ۵ سال
              </p>
            </div>

            <div className="rounded-2xl bg-purple-50 p-5 dark:bg-gray-800">
              <div className="mb-3 flex items-center gap-2 text-purple-600 dark:text-purple-300">
                <Award size={20} />

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  تخصص اصلی
                </p>
              </div>

              <p className="font-bold text-gray-800 dark:text-white">
                بدنسازی و تناسب اندام
              </p>
            </div>

            <div className="rounded-2xl bg-pink-50 p-5 dark:bg-gray-800">
              <div className="mb-3 flex items-center gap-2 text-pink-600 dark:text-pink-300">
                <Activity size={20} />

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  نوع تمرین
                </p>
              </div>

              <p className="font-bold text-gray-800 dark:text-white">
                حضوری و برنامه تمرینی
              </p>
            </div>

            <div className="rounded-2xl bg-purple-50 p-5 dark:bg-gray-800">
              <div className="mb-3 flex items-center gap-2 text-purple-600 dark:text-purple-300">
                <UserRound size={20} />

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  شماره پروفایل
                </p>
              </div>

              <p className="font-bold text-gray-800 dark:text-white">
                {id}
              </p>
            </div>

          </div>
        </section>

        {/* درباره مربی */}
        <section className="mt-10">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-100 text-pink-600 dark:bg-gray-800 dark:text-pink-300">
              <UserRound size={22} />
            </div>

            <h2 className="text-xl font-bold text-gray-800 dark:text-white">
              درباره مربی
            </h2>
          </div>

          <p className="leading-9 text-gray-600 dark:text-gray-300">
            هدف از برنامه‌ریزی تمرین، کمک به ورزشکار برای رسیدن به اهداف
            ورزشی خود با رعایت اصول صحیح تمرین و توجه به سطح آمادگی جسمانی
            است. برنامه‌ها باید متناسب با شرایط، تجربه و اهداف هر فرد تنظیم
            شوند تا مسیر پیشرفت ورزشی اصولی‌تر و منظم‌تر باشد.
          </p>
        </section>

        {/* مدارک و تخصص */}
        <section className="mt-10">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-600 dark:bg-gray-800 dark:text-purple-300">
              <GraduationCap size={22} />
            </div>

            <h2 className="text-xl font-bold text-gray-800 dark:text-white">
              تخصص و مهارت‌ها
            </h2>
          </div>

          <div className="space-y-4">

            <div className="flex items-center gap-3 rounded-2xl border border-gray-100 p-4 dark:border-gray-800">
              <CheckCircle2
                size={21}
                className="shrink-0 text-green-500"
              />

              <span className="text-gray-700 dark:text-gray-300">
                طراحی برنامه تمرینی متناسب با سطح ورزشکار
              </span>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-gray-100 p-4 dark:border-gray-800">
              <CheckCircle2
                size={21}
                className="shrink-0 text-green-500"
              />

              <span className="text-gray-700 dark:text-gray-300">
                آموزش اصول صحیح اجرای حرکات ورزشی
              </span>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-gray-100 p-4 dark:border-gray-800">
              <CheckCircle2
                size={21}
                className="shrink-0 text-green-500"
              />

              <span className="text-gray-700 dark:text-gray-300">
                برنامه‌ریزی برای بهبود قدرت و استقامت عضلانی
              </span>
            </div>

          </div>
        </section>

        {/* خدمات مربی */}
        <section className="mt-10">
          <h2 className="mb-5 text-xl font-bold text-gray-800 dark:text-white">
            خدمات مربی
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

            {/* برنامه بدنسازی */}
            <div className="rounded-2xl border border-pink-100 p-5 transition hover:-translate-y-1 hover:shadow-md dark:border-gray-800">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-pink-100 text-pink-600 dark:bg-gray-800 dark:text-pink-300">
                <Dumbbell size={25} />
              </div>

              <h3 className="mb-2 font-bold text-gray-800 dark:text-white">
                برنامه بدنسازی
              </h3>

              <p className="text-sm leading-7 text-gray-600 dark:text-gray-300">
                طراحی برنامه تمرینی متناسب با سطح و هدف ورزشکار.
              </p>
            </div>

            {/* تمرینات هدفمند */}
            <div className="rounded-2xl border border-purple-100 p-5 transition hover:-translate-y-1 hover:shadow-md dark:border-gray-800">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-600 dark:bg-gray-800 dark:text-purple-300">
                <Target size={25} />
              </div>

              <h3 className="mb-2 font-bold text-gray-800 dark:text-white">
                تمرینات هدفمند
              </h3>

              <p className="text-sm leading-7 text-gray-600 dark:text-gray-300">
                تنظیم تمرینات متناسب با اهداف و شرایط هر فرد.
              </p>
            </div>

            {/* بررسی روند پیشرفت */}
            <div className="rounded-2xl border border-pink-100 p-5 transition hover:-translate-y-1 hover:shadow-md dark:border-gray-800">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-pink-100 text-pink-600 dark:bg-gray-800 dark:text-pink-300">
                <ClipboardList size={25} />
              </div>

              <h3 className="mb-2 font-bold text-gray-800 dark:text-white">
                بررسی روند پیشرفت
              </h3>

              <p className="text-sm leading-7 text-gray-600 dark:text-gray-300">
                ارزیابی دوره‌ای تمرینات و اصلاح برنامه در صورت نیاز.
              </p>
            </div>

            {/* آمادگی جسمانی */}
            <div className="rounded-2xl border border-purple-100 p-5 transition hover:-translate-y-1 hover:shadow-md dark:border-gray-800">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-600 dark:bg-gray-800 dark:text-purple-300">
                <HeartPulse size={25} />
              </div>

              <h3 className="mb-2 font-bold text-gray-800 dark:text-white">
                بهبود آمادگی جسمانی
              </h3>

              <p className="text-sm leading-7 text-gray-600 dark:text-gray-300">
                تمرکز بر افزایش استقامت، قدرت و کیفیت اجرای حرکات.
              </p>
            </div>

          </div>
        </section>

        {/* برنامه زمانی */}
        <section className="mt-10 rounded-2xl bg-pink-50 p-6 dark:bg-gray-800">
          <div className="mb-3 flex items-center gap-3">
            <CalendarDays
              size={23}
              className="text-pink-600 dark:text-pink-300"
            />

            <h2 className="text-lg font-bold text-gray-800 dark:text-white">
              برنامه تمرینی
            </h2>
          </div>

          <p className="leading-8 text-gray-600 dark:text-gray-300">
            برای اطلاع از روزها و ساعت‌های حضور مربی، شرایط کلاس‌ها و
            برنامه تمرینی، با مجموعه ورزشی هماهنگ کنید.
          </p>
        </section>

        {/* ارتباط با مجموعه */}
        <section className="mt-10 border-t border-gray-100 pt-8 dark:border-gray-800">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pink-100 text-pink-600 dark:bg-gray-800 dark:text-pink-300">
              <Phone size={22} />
            </div>

            <div>
              <h2 className="font-bold text-gray-800 dark:text-white">
                ارتباط با مجموعه
              </h2>

              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                برای اطلاع از شرایط ثبت‌نام و دریافت برنامه تمرینی
              </p>
            </div>
          </div>

         <ContactModal />
        </section>

      </div>
    </main>
  );
}