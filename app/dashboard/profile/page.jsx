

"use client";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Camera,
  CalendarDays,
  Mail,
  Phone,
  MapPin,
  UserRound,
  Pencil,
  Save,
  X,
  Dumbbell,
  Heart,
  Clock3,
  Target,
} from "lucide-react";

const cities = [
  "تهران",
  "کرج",
  "فردیس",
  "شهریار",
  "اندیشه",
  "قدس",
  "اصفهان",
  "شیراز",
  "مشهد",
  "تبریز",
  "رشت",
  "اهواز",
  "قم",
  "یزد",
  "کرمان",
];

const goals = [
  "کاهش وزن",
   "افزایش وزن",
  "افزایش قدرت",
  "افزایش آمادگی جسمانی",
  "افزایش استقامت",
  "افزایش انعطاف‌پذیری",
  "حفظ سلامتی",
 
];

const levels = ["مبتدی", "متوسط", "پیشرفته"];

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: " ",
    email: "",
    phone: "",
    age: "",
    city: "",
    goal: "  ",
    level: "",
  });

  function calculateAge(birthDate) {
  if (!birthDate) return "";

  const birth = birthDate.toDate();
  const today = new Date();

  let age = today.getFullYear() - birth.getFullYear();

  const monthDifference = today.getMonth() - birth.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birth.getDate())
  ) {
    age--;
  }

  return age >= 0 ? String(age) : "";
}
  const [form, setForm] = useState(profile);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSave(event) {
    event.preventDefault();
    setProfile(form);
    setIsEditing(false);
  }

  function handleCancel() {
    setForm(profile);
    setIsEditing(false);
  }

  const details = [
    {
      title: "سن",
      value: profile.age ? `${profile.age} سال` : "ثبت نشده",
      icon: CalendarDays,
    },
    {
      title: "شهر",
      value: profile.city || "ثبت نشده",
      icon: MapPin,
    },
    {
      title: "هدف ورزشی",
      value: profile.goal || "ثبت نشده",
      icon: Target,
    },
    {
      title: "سطح تمرین",
      value: profile.level || "ثبت نشده",
      icon: Dumbbell,
    },
  ];

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#faf8fc] px-4 py-6 text-gray-800 sm:px-8 sm:py-10 dark:bg-gray-950 dark:text-white"
    >
      <div className="mx-auto max-w-5xl">
        {/* سربرگ */}
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-black sm:text-3xl">
              پروفایل من
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              اطلاعات حساب کاربری و مشخصات ورزشی
            </p>
          </div>

          <Link
            href="/dashboard"
            className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-bold transition hover:border-pink-300 hover:text-pink-600 dark:border-gray-700 dark:bg-gray-900"
          >
            <ArrowRight size={18} />
            <span className="hidden sm:inline">
              بازگشت به داشبورد
            </span>
            <span className="sm:hidden">بازگشت</span>
          </Link>
        </div>

        {/* کارت اطلاعات اصلی */}
        <section className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <div className="h-36 bg-gradient-to-l from-purple-700 via-purple-600 to-pink-500 sm:h-48" />

          <div className="px-5 pb-7 sm:px-8">
            <div className="-mt-14 flex flex-col gap-5 sm:-mt-16 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
                <div className="relative flex h-28 w-28 items-center justify-center rounded-3xl border-4 border-white bg-gradient-to-br from-pink-400 to-purple-500 text-white shadow-md sm:h-32 sm:w-32 dark:border-gray-900">
                  <UserRound size={58} />

                  <button
                    type="button"
                    aria-label="تغییر تصویر پروفایل"
                    title="تصویر پروفایل"
                    className="absolute -bottom-2 -left-2 rounded-xl border-2 border-white bg-white p-2 text-pink-600 shadow-sm dark:border-gray-900 dark:bg-gray-800"
                  >
                    <Camera size={18} />
                  </button>
                </div>

                <div className="sm:pb-2">
                  <h2 className="text-xl font-black">
                    {profile.name || "نام کاربر"}
                  </h2>

                  <p className="mt-2 text-sm text-gray-500">
                    عضو فیت بانو
                  </p>

                  <span className="mt-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    حساب کاربری فعال
                  </span>
                </div>
              </div>

              {!isEditing && (
                <button
                  type="button"
                  onClick={() => {
                    setForm(profile);
                    setIsEditing(true);
                  }}
                  className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-pink-500 to-purple-600 px-5 py-3 text-sm font-bold text-white transition hover:opacity-90"
                >
                  <Pencil size={17} />
                  ویرایش پروفایل
                </button>
              )}
            </div>
          </div>
        </section>

        {/* اطلاعات شخصی */}
        <section className="mt-7 rounded-3xl border border-gray-100 bg-white p-5 shadow-sm sm:p-8 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-7">
            <h2 className="text-lg font-black">
              اطلاعات شخصی
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              مشخصات حساب کاربری خودت رو مشاهده و ویرایش کن.
            </p>
          </div>

          {isEditing ? (
            <form onSubmit={handleSave}>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <FormField
                  label="نام و نام خانوادگی"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  icon={UserRound}
                  required
                />

                <FormField
                  label="ایمیل"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  icon={Mail}
                  required
                />

                <FormField
                  label="شماره تماس"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  icon={Phone}
                  required
                />

        <div className="block">
  <label className="mb-2 block text-sm font-bold">
    تاریخ تولد
  </label>

  <div className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 transition focus-within:border-pink-400 dark:border-gray-700">
    <CalendarDays
      size={18}
      className="shrink-0 text-gray-400"
    />

    <DatePicker
      value={form.birthDate || ""}
      onChange={(date) => {
        setForm((prev) => ({
          ...prev,
          birthDate: date ? date.format("YYYY/MM/DD") : "",
          age: date ? String(calculateAge(date)) : "",
        }));
      }}
      calendar={persian}
      locale={persian_fa}
      calendarPosition="bottom-right"
      format="YYYY/MM/DD"
      placeholder="انتخاب تاریخ تولد"
      maxDate={new Date()}
      inputClass="w-full bg-transparent py-3.5 text-sm outline-none"
      containerClassName="flex-1"
    />
  </div>

  {form.age && (
    <p className="mt-2 text-sm text-gray-500">
      سن شما: {form.age} سال
    </p>
  )}
</div>

                <FormField
                  label="شهر"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  icon={MapPin}
                  options={cities}
                  required
                />

                <FormField
                  label="هدف ورزشی"
                  name="goal"
                  value={form.goal}
                  onChange={handleChange}
                  icon={Target}
                  options={goals}
                  required
                />

                <FormField
                  label="سطح تمرین"
                  name="level"
                  value={form.level}
                  onChange={handleChange}
                  icon={Dumbbell}
                  options={levels}
                  required
                />
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <button
                  type="submit"
                  className="flex items-center gap-2 rounded-xl bg-gradient-to-l from-pink-500 to-purple-600 px-5 py-3 text-sm font-bold text-white transition hover:opacity-90"
                >
                  <Save size={17} />
                  ذخیره تغییرات
                </button>

                <button
                  type="button"
                  onClick={handleCancel}
                  className="flex items-center gap-2 rounded-xl border border-gray-200 px-5 py-3 text-sm font-bold transition hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800"
                >
                  <X size={17} />
                  انصراف
                </button>
              </div>
            </form>
          ) : (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <InfoItem
                icon={UserRound}
                label="نام و نام خانوادگی"
                value={profile.name}
              />

              <InfoItem
                icon={Mail}
                label="ایمیل"
                value={profile.email}
              />

              <InfoItem
                icon={Phone}
                label="شماره تماس"
                value={profile.phone}
              />

              {details.map((item) => (
                <InfoItem
                  key={item.title}
                  icon={item.icon}
                  label={item.title}
                  value={item.value}
                />
              ))}
            </div>
          )}
        </section>

        {/* خلاصه فعالیت */}
        <section className="mt-7">
          <h2 className="mb-5 text-lg font-black">
            خلاصه فعالیت ورزشی
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <MiniCard
              icon={Dumbbell}
              title="جلسات تمرین"
              value="۱۲ جلسه"
              description="در این ماه"
              color="bg-pink-50 text-pink-500 dark:bg-pink-500/10"
            />

            <MiniCard
              icon={Clock3}
              title="زمان فعالیت"
              value="۱۸ ساعت"
              description="مجموع فعالیت ثبت‌شده"
              color="bg-purple-50 text-purple-500 dark:bg-purple-500/10"
            />

            <MiniCard
              icon={Heart}
              title="هدف ورزشی"
              value={profile.goal || "ثبت نشده"}
              description="هدف فعلی کاربر"
              color="bg-rose-50 text-rose-500 dark:bg-rose-500/10"
            />
          </div>
        </section>

        <p className="mt-8 text-center text-xs leading-6 text-gray-400">
          این صفحه نمونه‌کار است؛ تغییرات فعلاً در حافظه صفحه نگهداری
          می‌شوند و با بارگذاری مجدد صفحه به اطلاعات اولیه برمی‌گردند.
        </p>
      </div>
    </main>
  );
}

function FormField({
  label,
  name,
  value,
  onChange,
  icon: Icon,
  type = "text",
  options,
  required = false,
  min,
  max,
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold">
        {label}
      </span>

      <div className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 transition focus-within:border-pink-400 dark:border-gray-700">
        <Icon size={18} className="shrink-0 text-gray-400" />

        {options ? (
          <select
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            className="min-w-0 flex-1 bg-transparent py-3.5 text-sm outline-none dark:bg-gray-900"
          >
            <option value="">انتخاب کنید</option>

            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        ) : (
          <input
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            required={required}
            min={min}
            max={max}
            className="min-w-0 flex-1 bg-transparent py-3.5 text-sm outline-none"
          />
        )}
      </div>
    </label>
  );
}

function InfoItem({ icon: Icon, label, value }) {
  return (
    <div className="flex min-w-0 items-center gap-4 rounded-2xl border border-gray-100 p-4 dark:border-gray-800">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-pink-50 text-pink-500 dark:bg-pink-500/10">
        <Icon size={21} />
      </div>

      <div className="min-w-0">
        <p className="text-xs text-gray-500">{label}</p>

        <p className="mt-2 break-words text-sm font-bold">
          {value || "ثبت نشده"}
        </p>
      </div>
    </div>
  );
}

function MiniCard({ icon: Icon, title, value, description, color }) {
  return (
    <div className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <div className="flex items-center gap-3">
        <div className={`rounded-2xl p-3 ${color}`}>
          <Icon size={22} />
        </div>

        <p className="text-sm text-gray-500">{title}</p>
      </div>

      <p className="mt-5 text-xl font-black">{value}</p>

      <p className="mt-2 text-xs text-gray-400">
        {description}
      </p>
    </div>
  );
}
