
// "use client";

// import Link from "next/link";
// import {
//   Activity,
//   Apple,
//   ArrowDownLeft,
//   ArrowLeft,
//   Bell,
//   CalendarDays,
//   CheckCircle2,
//   ChevronLeft,
//   Clock3,
//   Dumbbell,
//   Flame,
//   Heart,
//   Home,
//   LogOut,
//   Menu,
//   Settings,
//   Sparkles,
//   Target,
//   TrendingUp,
//   UserRound,
//   Users,
//   Utensils,
//   X,
// } from "lucide-react";

// import {
//   Area,
//   AreaChart,
//   Bar,
//   BarChart,
//   CartesianGrid,
//   Cell,
//   Pie,
//   PieChart,
//   ResponsiveContainer,
//   Tooltip,
//   XAxis,
//   YAxis,
// } from "recharts";

// import { useState } from "react";
// import Sidebar from "../components/Sidebar";
// // اطلاعات نمونه فعالیت هفتگی
// const weeklyActivity = [
//   { day: "شنبه", minutes: 35, calories: 180 },
//   { day: "یکشنبه", minutes: 50, calories: 260 },
//   { day: "دوشنبه", minutes: 30, calories: 150 },
//   { day: "سه‌شنبه", minutes: 65, calories: 320 },
//   { day: "چهارشنبه", minutes: 45, calories: 230 },
//   { day: "پنجشنبه", minutes: 70, calories: 350 },
//   { day: "جمعه", minutes: 20, calories: 100 },
// ];

// // اطلاعات نمونه پیشرفت ماهانه
// const progressData = [
//   { month: "فروردین", weight: 78 },
//   { month: "اردیبهشت", weight: 76.5 },
//   { month: "خرداد", weight: 75 },
//   { month: "تیر", weight: 73.8 },
//   { month: "مرداد", weight: 72.5 },
//   { month: "شهریور", weight: 71 },
// ];

// // اطلاعات نمونه تغذیه
// const nutritionData = [
//   { name: "پروتئین", value: 75, color: "#ec4899" },
//   { name: "کربوهیدرات", value: 65, color: "#8b5cf6" },
//   { name: "چربی", value: 45, color: "#f59e0b" },
// ];

// // برنامه تمرینی نمونه
// const workouts = [
//   {
//     time: "۰۹:۰۰",
//     title: "تمرین پایین‌تنه",
//     description: "پا و عضلات باسن",
//     duration: "۴۵ دقیقه",
//     done: true,
//   },
//   {
//     time: "۱۷:۳۰",
//     title: "تمرین هوازی",
//     description: "پیاده‌روی و فعالیت هوازی",
//     duration: "۳۰ دقیقه",
//     done: false,
//   },
// ];

// const menuItems = [
//   { label: "داشبورد", icon: Home, href: "/dashboard", active: true },
//   { label: "کلاس‌های من", icon: CalendarDays, href: "/classes" },
//   { label: "مربی‌ها", icon: Users, href: "/trainers" },
//   { label: "پروفایل من", icon: UserRound, href: "/dashboard" },
// ];

// function StatCard({
//   title,
//   value,
//   unit,
//   description,
//   icon: Icon,
//   color,
// }) {
//   return (
//     <div className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
//       <div className="flex items-start justify-between gap-3">
//         <div>
//           <p className="text-sm text-gray-500 dark:text-gray-400">
//             {title}
//           </p>

//           <div className="mt-3 flex items-baseline gap-1">
//             <span className="text-2xl font-black text-gray-900 dark:text-white">
//               {value}
//             </span>

//             {unit && (
//               <span className="text-xs text-gray-500">{unit}</span>
//             )}
//           </div>
//         </div>

//         <div className={`rounded-2xl p-3 ${color}`}>
//           <Icon size={23} />
//         </div>
//       </div>

//       <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
//         {description}
//       </p>
//     </div>
//   );
// }

// export default function DashboardPage() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const completedWorkouts = 4;
//   const weeklyGoal = 5;
//   const goalPercentage = Math.round(
//     (completedWorkouts / weeklyGoal) * 100
//   );

//   return (
//     <main
//       dir="rtl"
//       className="min-h-screen bg-[#faf8fc] text-gray-800 dark:bg-gray-950 dark:text-gray-100"
//     >
//       {/* پس‌زمینه موبایل هنگام باز بودن منو */}
//       {sidebarOpen && (
//         <button
//           type="button"
//           aria-label="بستن منو"
//           onClick={() => setSidebarOpen(false)}
//           className="fixed inset-0 z-40 bg-black/40 lg:hidden"
//         />
//       )}

//       {/* سایدبار */}
//      <Sidebar/>

//       {/* محتوای اصلی */}
//       <div className="min-h-screen lg:mr-72">
//         {/* هدر */}
//         <header className="sticky top-0 z-30 border-b border-gray-100 bg-white/90 px-4 py-4 backdrop-blur-md sm:px-6 lg:px-8 dark:border-gray-800 dark:bg-gray-900/90">
//           <div className="flex items-center justify-between gap-3">
//             <div className="flex items-center gap-3">
//               <button
//                 type="button"
//                 onClick={() => setSidebarOpen(true)}
//                 className="rounded-xl border border-gray-200 p-2.5 lg:hidden dark:border-gray-700"
//                 aria-label="باز کردن منو"
//               >
//                 <Menu size={21} />
//               </button>

//               <div>
//                 <h2 className="text-lg font-black sm:text-xl">
//                   داشبورد من
//                 </h2>
//                 <p className="mt-1 text-xs text-gray-500">
//                   وضعیت تمرین و سلامتی تو
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-center gap-3">
//               <button
//                 type="button"
//                 aria-label="اعلان‌ها"
//                 className="relative rounded-2xl border border-gray-200 p-3 transition hover:bg-pink-50 dark:border-gray-700 dark:hover:bg-gray-800"
//               >
//                 <Bell size={20} />

//                 <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-pink-500" />
//               </button>

//               <div className="flex items-center gap-3 rounded-2xl bg-gray-50 p-2 dark:bg-gray-800">
//                 <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-pink-400 to-purple-500 text-white">
//                   <UserRound size={22} />
//                 </div>

//                 <div className="hidden sm:block">
//                   <p className="text-sm font-bold">کاربر نمونه</p>
//                   <p className="text-xs text-gray-400">عضو ویژه</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </header>

//         <div className="space-y-8 p-4 sm:p-6 lg:p-8">
//           {/* کارت خوشامدگویی */}
//           <section className="relative overflow-hidden rounded-[30px] bg-gradient-to-l from-purple-700 via-purple-600 to-pink-500 p-6 text-white shadow-xl shadow-purple-100 sm:p-8 dark:shadow-none">
//             <div className="pointer-events-none absolute -left-10 -top-16 h-56 w-56 rounded-full border-[35px] border-white/10" />

//             <div className="pointer-events-none absolute bottom-[-70px] right-[40%] h-48 w-48 rounded-full bg-white/10 blur-2xl" />

//             <div className="relative z-10 grid gap-7 md:grid-cols-[1fr_auto] md:items-center">
//               <div>
//                 <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs backdrop-blur-sm">
//                   <Sparkles size={15} />
//                   <span>مسیر سلامتی تو ادامه داره!</span>
//                 </div>

//                 <h2 className="text-2xl font-black sm:text-3xl">
//                   سلام، خوش اومدی! 💗
//                 </h2>

//                 <p className="mt-4 max-w-xl text-sm leading-7 text-white/85">
//                   آماده‌ای امروز هم برای خودت وقت بذاری؟
//                   پیشرفتت رو ببین، تمرین‌هات رو دنبال کن و
//                   قدم‌به‌قدم به هدف‌هات نزدیک‌تر شو.
//                 </p>

//                 <Link
//                   href="/classes"
//                   className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-bold text-purple-700 transition hover:bg-pink-50"
//                 >
//                   مشاهده کلاس‌ها
//                   <ArrowLeft size={17} />
//                 </Link>
//               </div>

//               <div className="hidden h-36 w-36 items-center justify-center rounded-[35px] border border-white/20 bg-white/10 backdrop-blur-md md:flex">
//                 <Dumbbell size={75} strokeWidth={1.3} />
//               </div>
//             </div>
//           </section>

//           {/* کارت‌های آماری */}
//           <section>
//             <div className="mb-5 flex items-center justify-between">
//               <div>
//                 <h2 className="text-lg font-black">خلاصه فعالیت</h2>
//                 <p className="mt-1 text-sm text-gray-500">
//                   آمار نمونه فعالیت‌های این هفته
//                 </p>
//               </div>

//               <span className="rounded-xl bg-pink-50 px-3 py-2 text-xs font-bold text-pink-600 dark:bg-gray-800 dark:text-pink-400">
//                 این هفته
//               </span>
//             </div>

//             <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
//               <StatCard
//                 title="جلسات تمرین"
//                 value="۴"
//                 unit="جلسه"
//                 description="از ۵ جلسه هدف هفتگی"
//                 icon={Dumbbell}
//                 color="bg-pink-50 text-pink-500 dark:bg-pink-500/10"
//               />

//               <StatCard
//                 title="زمان فعالیت"
//                 value="۵"
//                 unit="ساعت"
//                 description="مجموع فعالیت‌های ثبت‌شده"
//                 icon={Clock3}
//                 color="bg-purple-50 text-purple-500 dark:bg-purple-500/10"
//               />

//               <StatCard
//                 title="کالری فعالیت"
//                 value="۱٬۵۹۰"
//                 unit="کالری"
//                 description="مقدار تخمینی فعالیت هفتگی"
//                 icon={Flame}
//                 color="bg-orange-50 text-orange-500 dark:bg-orange-500/10"
//               />

//               <StatCard
//                 title="پیشرفت برنامه"
//                 value="۸۰"
//                 unit="درصد"
//                 description="میزان تکمیل هدف تمرینی"
//                 icon={TrendingUp}
//                 color="bg-emerald-50 text-emerald-500 dark:bg-emerald-500/10"
//               />
//             </div>
//           </section>

//           {/* نمودار فعالیت و هدف */}
//           <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
//             <div className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6 xl:col-span-2 dark:border-gray-800 dark:bg-gray-900">
//               <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
//                 <div>
//                   <h3 className="font-black">فعالیت هفتگی</h3>
//                   <p className="mt-2 text-xs text-gray-500">
//                     مدت فعالیت در هر روز
//                   </p>
//                 </div>

//                 <div className="flex items-center gap-2 text-xs text-pink-500">
//                   <span className="h-2.5 w-2.5 rounded-full bg-pink-500" />
//                   دقیقه فعالیت
//                 </div>
//               </div>

//               <div className="h-72 w-full">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <BarChart
//                     data={weeklyActivity}
//                     margin={{
//                       top: 10,
//                       right: 0,
//                       left: -20,
//                       bottom: 0,
//                     }}
//                   >
//                     <CartesianGrid
//                       strokeDasharray="4 4"
//                       vertical={false}
//                       stroke="#e5e7eb"
//                     />

//                     <XAxis
//                       dataKey="day"
//                       axisLine={false}
//                       tickLine={false}
//                       tick={{ fontSize: 11, fill: "#9ca3af" }}
//                       tickMargin={12}
//                     />

//                     <YAxis
//                       axisLine={false}
//                       tickLine={false}
//                       tick={{ fontSize: 11, fill: "#9ca3af" }}
//                     />

//                     <Tooltip
//                       cursor={{ fill: "#fdf2f8" }}
//                       formatter={(value) => [`${value} دقیقه`, "فعالیت"]}
//                       contentStyle={{
//                         borderRadius: "14px",
//                         border: "1px solid #f3e8ff",
//                         fontSize: "12px",
//                       }}
//                     />

//                     <Bar
//                       dataKey="minutes"
//                       fill="#ec4899"
//                       radius={[8, 8, 0, 0]}
//                       maxBarSize={38}
//                     />
//                   </BarChart>
//                 </ResponsiveContainer>
//               </div>
//             </div>

//             <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <h3 className="font-black">هدف این هفته</h3>
//                   <p className="mt-2 text-xs text-gray-500">
//                     تعداد جلسات تمرین
//                   </p>
//                 </div>

//                 <div className="rounded-xl bg-purple-50 p-3 text-purple-500 dark:bg-purple-500/10">
//                   <Target size={22} />
//                 </div>
//               </div>

//               <div className="relative mx-auto my-8 flex h-48 w-48 items-center justify-center">
//                 <svg
//                   viewBox="0 0 200 200"
//                   className="h-full w-full -rotate-90"
//                 >
//                   <circle
//                     cx="100"
//                     cy="100"
//                     r="78"
//                     fill="none"
//                     stroke="#f3e8ff"
//                     strokeWidth="15"
//                   />

//                   <circle
//                     cx="100"
//                     cy="100"
//                     r="78"
//                     fill="none"
//                     stroke="#a855f7"
//                     strokeWidth="15"
//                     strokeLinecap="round"
//                     strokeDasharray={`${2 * Math.PI * 78 * (completedWorkouts / weeklyGoal)} ${2 * Math.PI * 78}`}
//                   />
//                 </svg>

//                 <div className="absolute text-center">
//                   <p className="text-4xl font-black">
//                     {goalPercentage}%
//                   </p>
//                   <p className="mt-2 text-xs text-gray-500">
//                     تکمیل هدف
//                   </p>
//                 </div>
//               </div>

//               <div className="rounded-2xl bg-purple-50 p-4 dark:bg-purple-500/10">
//                 <div className="flex items-center gap-2 text-sm font-bold text-purple-700 dark:text-purple-300">
//                   <CheckCircle2 size={19} />
//                   عالی پیش رفتی!
//                 </div>

//                 <p className="mt-2 text-xs leading-6 text-gray-500 dark:text-gray-400">
//                   فقط یک جلسه دیگه تا رسیدن به هدف هفتگی‌ات باقی مونده.
//                 </p>
//               </div>
//             </div>
//           </section>

//           {/* نمودار پیشرفت و تغذیه */}
//           <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
//             <div className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6 xl:col-span-2 dark:border-gray-800 dark:bg-gray-900">
//               <div className="mb-6 flex items-center justify-between gap-3">
//                 <div>
//                   <h3 className="font-black">روند پیشرفت</h3>
//                   <p className="mt-2 text-xs text-gray-500">
//                     نمونه تغییرات وزن در ماه‌های گذشته
//                   </p>
//                 </div>

//                 <div className="rounded-xl bg-emerald-50 p-3 text-emerald-500 dark:bg-emerald-500/10">
//                   <Activity size={22} />
//                 </div>
//               </div>

//               <div className="h-72 w-full">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <AreaChart
//                     data={progressData}
//                     margin={{
//                       top: 10,
//                       right: 0,
//                       left: -20,
//                       bottom: 0,
//                     }}
//                   >
//                     <defs>
//                       <linearGradient
//                         id="progressGradient"
//                         x1="0"
//                         y1="0"
//                         x2="0"
//                         y2="1"
//                       >
//                         <stop
//                           offset="0%"
//                           stopColor="#a855f7"
//                           stopOpacity={0.3}
//                         />

//                         <stop
//                           offset="95%"
//                           stopColor="#a855f7"
//                           stopOpacity={0}
//                         />
//                       </linearGradient>
//                     </defs>

//                     <CartesianGrid
//                       strokeDasharray="4 4"
//                       vertical={false}
//                       stroke="#e5e7eb"
//                     />

//                     <XAxis
//                       dataKey="month"
//                       axisLine={false}
//                       tickLine={false}
//                       tick={{ fontSize: 11, fill: "#9ca3af" }}
//                       tickMargin={12}
//                     />

//                     <YAxis
//                       domain={["dataMin - 2", "dataMax + 2"]}
//                       axisLine={false}
//                       tickLine={false}
//                       tick={{ fontSize: 11, fill: "#9ca3af" }}
//                     />

//                     <Tooltip
//                       formatter={(value) => [`${value} کیلوگرم`, "وزن"]}
//                       contentStyle={{
//                         borderRadius: "14px",
//                         border: "1px solid #f3e8ff",
//                         fontSize: "12px",
//                       }}
//                     />

//                     <Area
//                       type="monotone"
//                       dataKey="weight"
//                       stroke="#a855f7"
//                       strokeWidth={3}
//                       fill="url(#progressGradient)"
//                       activeDot={{ r: 6, fill: "#a855f7" }}
//                     />
//                   </AreaChart>
//                 </ResponsiveContainer>
//               </div>

//               <p className="mt-3 text-xs leading-6 text-gray-400">
//                 این اعداد صرفاً داده‌های فرضی برای نمایش نمودار هستند.
//                 در نسخه واقعی، اطلاعات باید از داده‌های خود شاگرد گرفته شوند.
//               </p>
//             </div>

//             <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <h3 className="font-black">تغذیه روزانه</h3>
//                   <p className="mt-2 text-xs text-gray-500">
//                     نمونه میزان تأمین درشت‌مغذی‌ها
//                   </p>
//                 </div>

//                 <div className="rounded-xl bg-orange-50 p-3 text-orange-500 dark:bg-orange-500/10">
//                   <Apple size={22} />
//                 </div>
//               </div>

//               <div className="relative mt-5 h-48">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <PieChart>
//                     <Pie
//                       data={nutritionData}
//                       dataKey="value"
//                       nameKey="name"
//                       cx="50%"
//                       cy="50%"
//                       innerRadius={52}
//                       outerRadius={78}
//                       paddingAngle={5}
//                       stroke="none"
//                     >
//                       {nutritionData.map((item) => (
//                         <Cell
//                           key={item.name}
//                           fill={item.color}
//                         />
//                       ))}
//                     </Pie>

//                     <Tooltip
//                       formatter={(value) => [`${value}%`, "میزان تأمین"]}
//                       contentStyle={{
//                         borderRadius: "12px",
//                         fontSize: "12px",
//                       }}
//                     />
//                   </PieChart>
//                 </ResponsiveContainer>

//                 <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
//                   <Utensils
//                     size={22}
//                     className="text-purple-500"
//                   />

//                   <span className="mt-2 text-xs text-gray-500">
//                     تغذیه
//                   </span>
//                 </div>
//               </div>

//               <div className="mt-4 space-y-4">
//                 {nutritionData.map((item) => (
//                   <div key={item.name}>
//                     <div className="mb-2 flex items-center justify-between text-xs">
//                       <div className="flex items-center gap-2">
//                         <span
//                           className="h-2.5 w-2.5 rounded-full"
//                           style={{ backgroundColor: item.color }}
//                         />

//                         <span>{item.name}</span>
//                       </div>

//                       <span className="font-bold">{item.value}%</span>
//                     </div>

//                     <div className="h-2 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
//                       <div
//                         className="h-full rounded-full"
//                         style={{
//                           width: `${item.value}%`,
//                           backgroundColor: item.color,
//                         }}
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </section>

//           {/* تمرین امروز و مربی */}
//           <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
//             <div className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6 xl:col-span-2 dark:border-gray-800 dark:bg-gray-900">
//               <div className="mb-6 flex items-center justify-between">
//                 <div>
//                   <h3 className="font-black">برنامه امروز</h3>
//                   <p className="mt-2 text-xs text-gray-500">
//                     فعالیت‌های برنامه‌ریزی‌شده
//                   </p>
//                 </div>

//                 <CalendarDays
//                   size={22}
//                   className="text-pink-500"
//                 />
//               </div>

//               <div className="space-y-4">
//                 {workouts.map((workout) => (
//                   <div
//                     key={workout.title}
//                     className="flex flex-col gap-4 rounded-2xl border border-gray-100 p-4 sm:flex-row sm:items-center dark:border-gray-800"
//                   >
//                     <div className="flex items-center gap-3 sm:w-24">
//                       <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-pink-50 text-pink-500 dark:bg-pink-500/10">
//                         <Dumbbell size={22} />
//                       </div>

//                       <span className="text-sm font-bold">
//                         {workout.time}
//                       </span>
//                     </div>

//                     <div className="flex-1">
//                       <h4 className="text-sm font-bold">
//                         {workout.title}
//                       </h4>

//                       <p className="mt-2 text-xs text-gray-500">
//                         {workout.description}
//                       </p>

//                       <div className="mt-3 flex items-center gap-2 text-xs text-gray-400">
//                         <Clock3 size={14} />
//                         {workout.duration}
//                       </div>
//                     </div>

//                     <span
//                       className={`w-fit rounded-xl px-3 py-2 text-xs font-bold ${
//                         workout.done
//                           ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10"
//                           : "bg-orange-50 text-orange-600 dark:bg-orange-500/10"
//                       }`}
//                     >
//                       {workout.done ? "انجام شده" : "در انتظار"}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
//               <div className="mb-5 flex items-center justify-between">
//                 <h3 className="font-black">مربی من</h3>

//                 <span className="rounded-lg bg-emerald-50 px-2 py-1 text-xs text-emerald-600 dark:bg-emerald-500/10">
//                   نمونه
//                 </span>
//               </div>

//               <div className="flex flex-col items-center rounded-3xl bg-gradient-to-br from-pink-50 to-purple-50 p-6 text-center dark:from-gray-800 dark:to-gray-800">
//                 <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-pink-400 to-purple-500 text-white ring-4 ring-white dark:ring-gray-700">
//                   <UserRound size={38} />
//                 </div>

//                 <h4 className="mt-4 font-black">
//                   مربی نمونه
//                 </h4>

//                 <p className="mt-2 text-xs text-gray-500">
//                   مربی تناسب اندام
//                 </p>

//                 <div className="mt-4 flex items-center gap-2 text-xs text-purple-600 dark:text-purple-300">
//                   <Heart size={15} />
//                   همراه مسیر پیشرفت تو
//                 </div>

//                 <Link
//                   href="/trainers"
//                   className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-bold text-purple-700 shadow-sm transition hover:bg-purple-100 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
//                 >
//                   مشاهده مربی‌ها
//                   <ArrowLeft size={16} />
//                 </Link>
//               </div>

//               <div className="mt-5 flex items-start gap-3 rounded-2xl bg-gray-50 p-4 dark:bg-gray-800">
//                 <div className="rounded-xl bg-white p-2 text-purple-500 dark:bg-gray-700">
//                   <Heart size={18} />
//                 </div>

//                 <div>
//                   <p className="text-sm font-bold">
//                     یادت باشه!
//                   </p>

//                   <p className="mt-2 text-xs leading-6 text-gray-500">
//                     استراحت کافی، تغذیه متعادل و استمرار هم بخشی از مسیر سلامتی هستن.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* یادآوری پایانی */}
//           <section className="rounded-3xl border border-pink-100 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
//             <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
//               <div className="flex items-start gap-3">
//                 <div className="rounded-2xl bg-pink-50 p-3 text-pink-500 dark:bg-pink-500/10">
//                   <Heart size={23} />
//                 </div>

//                 <div>
//                   <h3 className="font-bold">
//                     مهم‌ترین هدف، حال خوب توئه 💗
//                   </h3>

//                   <p className="mt-2 text-xs leading-6 text-gray-500">
//                     برنامه تمرینی و تغذیه باید متناسب با شرایط و نیازهای خودت باشه.
//                   </p>
//                 </div>
//               </div>

//               <Link
//                 href="/"
//                 className="flex shrink-0 items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 py-3 text-sm font-bold transition hover:border-pink-300 hover:text-pink-600 dark:border-gray-700"
//               >
//                 صفحه اصلی
//                 <ArrowLeft size={16} />
//               </Link>
//             </div>
//           </section>

//           <footer className="pb-3 text-center text-xs text-gray-400">
//             فیت بانو | پنل اختصاصی شاگردان
//           </footer>
//         </div>
//       </div>
//     </main>
//   );
// }



"use client";

import Link from "next/link";
import {
  Activity,
  Apple,
  ArrowLeft,
  Bell,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Dumbbell,
  Flame,
  Heart,
  Home,
  Menu,
  Sparkles,
  Target,
  TrendingUp,
  UserRound,
  Users,
  Utensils,
  Plus,
  Trash2,
  Save,
  RotateCcw,
} from "lucide-react";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

const STORAGE_KEY = "fitbanoo-dashboard-data";

const initialData = {
  completedWorkouts: 4,
  weeklyGoal: 5,
  activityHours: 5,
  calories: 1590,

  weeklyActivity: [
    { day: "شنبه", minutes: 35, calories: 180 },
    { day: "یکشنبه", minutes: 50, calories: 260 },
    { day: "دوشنبه", minutes: 30, calories: 150 },
    { day: "سه‌شنبه", minutes: 65, calories: 320 },
    { day: "چهارشنبه", minutes: 45, calories: 230 },
    { day: "پنجشنبه", minutes: 70, calories: 350 },
    { day: "جمعه", minutes: 20, calories: 100 },
  ],

  progressData: [
    { month: "فروردین", weight: 78 },
    { month: "اردیبهشت", weight: 76.5 },
    { month: "خرداد", weight: 75 },
    { month: "تیر", weight: 73.8 },
    { month: "مرداد", weight: 72.5 },
    { month: "شهریور", weight: 71 },
  ],

  nutritionData: [
    { name: "پروتئین", value: 75, color: "#ec4899" },
    { name: "کربوهیدرات", value: 65, color: "#8b5cf6" },
    { name: "چربی", value: 45, color: "#f59e0b" },
  ],

  workouts: [
    {
      id: 1,
      time: "۰۹:۰۰",
      title: "تمرین پایین‌تنه",
      description: "پا و عضلات باسن",
      duration: 45,
      done: true,
    },
    {
      id: 2,
      time: "۱۷:۳۰",
      title: "تمرین هوازی",
      description: "پیاده‌روی و فعالیت هوازی",
      duration: 30,
      done: false,
    },
  ],
};

function StatCard({ title, value, unit, description, icon: Icon, color }) {
  return (
    <div className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>

          <div className="mt-3 flex items-baseline gap-1">
            <span className="text-2xl font-black text-gray-900 dark:text-white">
              {value}
            </span>

            {unit && <span className="text-xs text-gray-500">{unit}</span>}
          </div>
        </div>

        <div className={`rounded-2xl p-3 ${color}`}>
          <Icon size={23} />
        </div>
      </div>

      <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
}

function InputField({ label, value, onChange, type = "text", min, max, step }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-200">
        {label}
      </span>

      <input
        type={type}
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-xl border border-gray-200 bg-white px-3 py-3 text-sm outline-none transition focus:border-pink-400 focus:ring-2 focus:ring-pink-100 dark:border-gray-700 dark:bg-gray-800 dark:focus:ring-pink-500/10"
      />
    </label>
  );
}

function SectionTitle({ title, description, icon: Icon }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <div className="rounded-xl bg-pink-50 p-3 text-pink-500 dark:bg-pink-500/10">
        <Icon size={22} />
      </div>

      <div>
        <h3 className="font-black">{title}</h3>
        <p className="mt-1 text-xs text-gray-500">{description}</p>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [data, setData] = useState(initialData);
  const [loaded, setLoaded] = useState(false);
  const [savedMessage, setSavedMessage] = useState("");

  const [newWorkout, setNewWorkout] = useState({
    time: "",
    title: "",
    description: "",
    duration: "30",
    done: false,
  });

  // بارگذاری اطلاعات ذخیره‌شده
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);

      if (saved) {
        const parsed = JSON.parse(saved);

        setData({
          ...initialData,
          ...parsed,
          weeklyActivity:
            parsed.weeklyActivity ?? initialData.weeklyActivity,
          progressData: parsed.progressData ?? initialData.progressData,
          nutritionData: parsed.nutritionData ?? initialData.nutritionData,
          workouts: parsed.workouts ?? initialData.workouts,
        });
      }
    } catch (error) {
      console.error("خطا در خواندن اطلاعات داشبورد:", error);
    }

    setLoaded(true);
  }, []);

  // ذخیره خودکار پس از بارگذاری اولیه
  useEffect(() => {
    if (!loaded) return;

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
      console.error("خطا در ذخیره اطلاعات داشبورد:", error);
      setSavedMessage("ذخیره اطلاعات ناموفق بود.");
      return;
    }

    setSavedMessage("اطلاعات ذخیره شد.");

    const timer = setTimeout(() => {
      setSavedMessage("");
    }, 2500);

    return () => clearTimeout(timer);
  }, [data, loaded]);

  function updateField(field, value) {
    setData((previous) => ({
      ...previous,
      [field]: value,
    }));
  }

  function updateWeeklyActivity(index, field, value) {
    setData((previous) => ({
      ...previous,
      weeklyActivity: previous.weeklyActivity.map((item, itemIndex) =>
        itemIndex === index
          ? { ...item, [field]: value }
          : item
      ),
    }));
  }

  function updateProgress(index, field, value) {
    setData((previous) => ({
      ...previous,
      progressData: previous.progressData.map((item, itemIndex) =>
        itemIndex === index
          ? { ...item, [field]: value }
          : item
      ),
    }));
  }

  function updateNutrition(index, value) {
    setData((previous) => ({
      ...previous,
      nutritionData: previous.nutritionData.map((item, itemIndex) =>
        itemIndex === index
          ? {
              ...item,
              value,
            }
          : item
      ),
    }));
  }

  function updateWorkout(index, field, value) {
    setData((previous) => ({
      ...previous,
      workouts: previous.workouts.map((item, itemIndex) =>
        itemIndex === index
          ? { ...item, [field]: value }
          : item
      ),
    }));
  }

  function addWorkout(event) {
    event.preventDefault();

    if (!newWorkout.title.trim()) return;

    const workout = {
      ...newWorkout,
      id: Date.now(),
      duration: Math.max(0, Number(newWorkout.duration) || 0),
    };

    setData((previous) => ({
      ...previous,
      workouts: [...previous.workouts, workout],
    }));

    setNewWorkout({
      time: "",
      title: "",
      description: "",
      duration: "30",
      done: false,
    });
  }

  function deleteWorkout(id) {
    setData((previous) => ({
      ...previous,
      workouts: previous.workouts.filter((item) => item.id !== id),
    }));
  }

  function resetData() {
    const confirmed = window.confirm(
      "تمام اطلاعات داشبورد به مقادیر اولیه برگردد؟"
    );

    if (!confirmed) return;

    setData({
      ...initialData,
      weeklyActivity: initialData.weeklyActivity.map((item) => ({ ...item })),
      progressData: initialData.progressData.map((item) => ({ ...item })),
      nutritionData: initialData.nutritionData.map((item) => ({ ...item })),
      workouts: initialData.workouts.map((item) => ({ ...item })),
    });
  }

  const completedWorkouts = Math.max(
    0,
    Number(data.completedWorkouts) || 0
  );

  const weeklyGoal = Math.max(0, Number(data.weeklyGoal) || 0);

  const goalPercentage =
    weeklyGoal > 0
      ? Math.min(100, Math.round((completedWorkouts / weeklyGoal) * 100))
      : 0;

  const totalMinutes = data.weeklyActivity.reduce(
    (total, item) => total + (Number(item.minutes) || 0),
    0
  );

  const totalCalories = data.weeklyActivity.reduce(
    (total, item) => total + (Number(item.calories) || 0),
    0
  );

  const activityHours = Number(data.activityHours) || 0;
  const calories = Number(data.calories) || 0;

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#faf8fc] text-gray-800 dark:bg-gray-950 dark:text-gray-100"
    >
      {sidebarOpen && (
        <button
          type="button"
          aria-label="بستن منو"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      <Sidebar />

      <div className="min-h-screen lg:mr-72">
        <header className="sticky top-0 z-30 border-b border-gray-100 bg-white/90 px-4 py-4 backdrop-blur-md sm:px-6 lg:px-8 dark:border-gray-800 dark:bg-gray-900/90">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setSidebarOpen(true)}
                className="rounded-xl border border-gray-200 p-2.5 lg:hidden dark:border-gray-700"
                aria-label="باز کردن منو"
              >
                <Menu size={21} />
              </button>

              <div>
                <h2 className="text-lg font-black sm:text-xl">داشبورد من</h2>
                <p className="mt-1 text-xs text-gray-500">
                  وضعیت تمرین و سلامتی تو
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="اعلان‌ها"
                className="relative rounded-2xl border border-gray-200 p-3 transition hover:bg-pink-50 dark:border-gray-700 dark:hover:bg-gray-800"
              >
                <Bell size={20} />
                <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-pink-500" />
              </button>

              <div className="flex items-center gap-3 rounded-2xl bg-gray-50 p-2 dark:bg-gray-800">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-pink-400 to-purple-500 text-white">
                  <UserRound size={22} />
                </div>

                <div className="hidden sm:block">
                  <p className="text-sm font-bold">کاربر نمونه</p>
                  <p className="text-xs text-gray-400">عضو ویژه</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="space-y-8 p-4 sm:p-6 lg:p-8">
          {/* خوشامدگویی */}
          <section className="relative overflow-hidden rounded-[30px] bg-gradient-to-l from-purple-700 via-purple-600 to-pink-500 p-6 text-white shadow-xl shadow-purple-100 sm:p-8 dark:shadow-none">
            <div className="pointer-events-none absolute -left-10 -top-16 h-56 w-56 rounded-full border-[35px] border-white/10" />

            <div className="relative z-10 grid gap-7 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs">
                  <Sparkles size={15} />
                  <span>مسیر سلامتی تو ادامه داره!</span>
                </div>

                <h2 className="text-2xl font-black sm:text-3xl">
                  سلام، خوش اومدی! 💗
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-white/85">
                  اطلاعات تمرین و پیشرفتت رو از بخش مدیریت وارد کن و تغییرات
                  رو همین‌جا ببین.
                </p>

                <a
                  href="#manage-data"
                  className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-bold text-purple-700 transition hover:bg-pink-50"
                >
                  ثبت اطلاعات
                  <ArrowLeft size={17} />
                </a>
              </div>

              <div className="hidden h-36 w-36 items-center justify-center rounded-[35px] border border-white/20 bg-white/10 md:flex">
                <Dumbbell size={75} strokeWidth={1.3} />
              </div>
            </div>
          </section>

          {/* آمار */}
          <section>
            <div className="mb-5">
              <h2 className="text-lg font-black">خلاصه فعالیت</h2>
              <p className="mt-1 text-sm text-gray-500">
                آمار واردشده توسط تو
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <StatCard
                title="جلسات تمرین"
                value={completedWorkouts}
                unit="جلسه"
                description={`از ${weeklyGoal} جلسه هدف هفتگی`}
                icon={Dumbbell}
                color="bg-pink-50 text-pink-500 dark:bg-pink-500/10"
              />

              <StatCard
                title="زمان فعالیت"
                value={activityHours}
                unit="ساعت"
                description="مجموع فعالیت ثبت‌شده"
                icon={Clock3}
                color="bg-purple-50 text-purple-500 dark:bg-purple-500/10"
              />

              <StatCard
                title="کالری فعالیت"
                value={calories.toLocaleString("fa-IR")}
                unit="کالری"
                description="مقدار ثبت‌شده توسط تو"
                icon={Flame}
                color="bg-orange-50 text-orange-500 dark:bg-orange-500/10"
              />

              <StatCard
                title="پیشرفت برنامه"
                value={goalPercentage}
                unit="درصد"
                description="بر اساس جلسات انجام‌شده و هدف هفتگی"
                icon={TrendingUp}
                color="bg-emerald-50 text-emerald-500 dark:bg-emerald-500/10"
              />
            </div>

            <p className="mt-3 text-xs text-gray-500">
              مجموع زمان فعالیت روزانه: {totalMinutes} دقیقه | مجموع کالری
              ثبت‌شده روزانه: {totalCalories.toLocaleString("fa-IR")}
            </p>
          </section>

          {/* نمودار فعالیت و هدف */}
          <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
            <div className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6 xl:col-span-2 dark:border-gray-800 dark:bg-gray-900">
              <div className="mb-6">
                <h3 className="font-black">فعالیت هفتگی</h3>
                <p className="mt-2 text-xs text-gray-500">
                  مدت فعالیت در هر روز
                </p>
              </div>

              <div className="h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data.weeklyActivity}>
                    <CartesianGrid
                      strokeDasharray="4 4"
                      vertical={false}
                      stroke="#e5e7eb"
                    />
                    <XAxis
                      dataKey="day"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 11, fill: "#9ca3af" }}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 11, fill: "#9ca3af" }}
                    />
                    <Tooltip
                      formatter={(value) => [`${value} دقیقه`, "فعالیت"]}
                      contentStyle={{
                        borderRadius: "14px",
                        border: "1px solid #f3e8ff",
                        fontSize: "12px",
                      }}
                    />
                    <Bar
                      dataKey="minutes"
                      name="فعالیت"
                      fill="#ec4899"
                      radius={[8, 8, 0, 0]}
                      maxBarSize={38}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <h3 className="font-black">هدف این هفته</h3>
              <p className="mt-2 text-xs text-gray-500">تعداد جلسات تمرین</p>

              <div className="relative mx-auto my-8 flex h-48 w-48 items-center justify-center">
                <svg viewBox="0 0 200 200" className="h-full w-full -rotate-90">
                  <circle
                    cx="100"
                    cy="100"
                    r="78"
                    fill="none"
                    stroke="#f3e8ff"
                    strokeWidth="15"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="78"
                    fill="none"
                    stroke="#a855f7"
                    strokeWidth="15"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 78 * (goalPercentage / 100)} ${2 * Math.PI * 78}`}
                  />
                </svg>

                <div className="absolute text-center">
                  <p className="text-4xl font-black">{goalPercentage}%</p>
                  <p className="mt-2 text-xs text-gray-500">تکمیل هدف</p>
                </div>
              </div>

              <div className="rounded-2xl bg-purple-50 p-4 dark:bg-purple-500/10">
                <div className="flex items-center gap-2 text-sm font-bold text-purple-700 dark:text-purple-300">
                  <CheckCircle2 size={19} />
                  {goalPercentage >= 100
                    ? "به هدف هفتگی رسیدی!"
                    : "ادامه بده، داری پیشرفت می‌کنی!"}
                </div>

                <p className="mt-2 text-xs leading-6 text-gray-500 dark:text-gray-400">
                  {Math.max(0, weeklyGoal - completedWorkouts) === 0
                    ? "هدف هفتگی‌ات تکمیل شده."
                    : `${Math.max(0, weeklyGoal - completedWorkouts)} جلسه تا رسیدن به هدف باقی مانده.`}
                </p>
              </div>
            </div>
          </section>

          {/* نمودار پیشرفت و تغذیه */}
          <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
            <div className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6 xl:col-span-2 dark:border-gray-800 dark:bg-gray-900">
              <div className="mb-6">
                <h3 className="font-black">روند پیشرفت</h3>
                <p className="mt-2 text-xs text-gray-500">
                  تغییرات وزن ثبت‌شده در ماه‌های گذشته
                </p>
              </div>

              <div className="h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data.progressData}>
                    <defs>
                      <linearGradient
                        id="progressGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#a855f7"
                          stopOpacity={0.3}
                        />
                        <stop
                          offset="95%"
                          stopColor="#a855f7"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>

                    <CartesianGrid
                      strokeDasharray="4 4"
                      vertical={false}
                      stroke="#e5e7eb"
                    />
                    <XAxis
                      dataKey="month"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 11, fill: "#9ca3af" }}
                    />
                    <YAxis
                      domain={["auto", "auto"]}
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 11, fill: "#9ca3af" }}
                    />
                    <Tooltip
                      formatter={(value) => [`${value} کیلوگرم`, "وزن"]}
                      contentStyle={{
                        borderRadius: "14px",
                        border: "1px solid #f3e8ff",
                        fontSize: "12px",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="weight"
                      name="وزن"
                      stroke="#a855f7"
                      strokeWidth={3}
                      fill="url(#progressGradient)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <h3 className="font-black">تغذیه روزانه</h3>
              <p className="mt-2 text-xs text-gray-500">
                درصد تأمین درشت‌مغذی‌ها
              </p>

              <div className="relative mt-5 h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={data.nutritionData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      innerRadius={52}
                      outerRadius={78}
                      paddingAngle={5}
                      stroke="none"
                    >
                      {data.nutritionData.map((item) => (
                        <Cell key={item.name} fill={item.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value) => [`${value}%`, "میزان تأمین"]}
                    />
                  </PieChart>
                </ResponsiveContainer>

                <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
                  <Utensils size={22} className="text-purple-500" />
                  <span className="mt-2 text-xs text-gray-500">تغذیه</span>
                </div>
              </div>

              <div className="mt-4 space-y-4">
                {data.nutritionData.map((item, index) => (
                  <div key={item.name}>
                    <div className="mb-2 flex items-center justify-between text-xs">
                      <span>{item.name}</span>
                      <span className="font-bold">{item.value}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${Math.min(100, Math.max(0, Number(item.value) || 0))}%`,
                          backgroundColor: item.color,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* تمرین‌های امروز */}
          <section className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6 dark:border-gray-800 dark:bg-gray-900">
            <SectionTitle
              title="برنامه امروز"
              description="تمرین‌ها را اضافه، ویرایش یا حذف کن."
              icon={CalendarDays}
            />

            <div className="space-y-4">
              {data.workouts.map((workout, index) => (
                <div
                  key={workout.id}
                  className="rounded-2xl border border-gray-100 p-4 dark:border-gray-800"
                >
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
                    <InputField
                      label="ساعت"
                      value={workout.time}
                      onChange={(value) => updateWorkout(index, "time", value)}
                    />

                    <InputField
                      label="عنوان تمرین"
                      value={workout.title}
                      onChange={(value) => updateWorkout(index, "title", value)}
                    />

                    <InputField
                      label="توضیحات"
                      value={workout.description}
                      onChange={(value) =>
                        updateWorkout(index, "description", value)
                      }
                    />

                    <InputField
                      label="مدت (دقیقه)"
                      type="number"
                      min="0"
                      value={workout.duration}
                      onChange={(value) =>
                        updateWorkout(
                          index,
                          "duration",
                          Math.max(0, Number(value) || 0)
                        )
                      }
                    />

                    <label className="flex items-center gap-3 text-sm font-bold">
                      <input
                        type="checkbox"
                        checked={workout.done}
                        onChange={(event) =>
                          updateWorkout(index, "done", event.target.checked)
                        }
                        className="h-5 w-5 accent-pink-500"
                      />
                      انجام شده
                    </label>
                  </div>

                  <button
                    type="button"
                    onClick={() => deleteWorkout(workout.id)}
                    className="mt-4 flex items-center gap-2 rounded-xl bg-red-50 px-4 py-2 text-xs font-bold text-red-600 transition hover:bg-red-100 dark:bg-red-500/10"
                  >
                    <Trash2 size={15} />
                    حذف تمرین
                  </button>
                </div>
              ))}
            </div>

            <form
              onSubmit={addWorkout}
              className="mt-6 rounded-2xl bg-gray-50 p-4 dark:bg-gray-800"
            >
              <h4 className="mb-4 font-bold">افزودن تمرین جدید</h4>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <InputField
                  label="ساعت"
                  value={newWorkout.time}
                  onChange={(value) =>
                    setNewWorkout((previous) => ({ ...previous, time: value }))
                  }
                />

                <InputField
                  label="عنوان تمرین"
                  value={newWorkout.title}
                  onChange={(value) =>
                    setNewWorkout((previous) => ({ ...previous, title: value }))
                  }
                />

                <InputField
                  label="توضیحات"
                  value={newWorkout.description}
                  onChange={(value) =>
                    setNewWorkout((previous) => ({
                      ...previous,
                      description: value,
                    }))
                  }
                />

                <InputField
                  label="مدت (دقیقه)"
                  type="number"
                  min="0"
                  value={newWorkout.duration}
                  onChange={(value) =>
                    setNewWorkout((previous) => ({
                      ...previous,
                      duration: value,
                    }))
                  }
                />
              </div>

              <button
                type="submit"
                className="mt-4 flex items-center gap-2 rounded-xl bg-pink-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-pink-600"
              >
                <Plus size={18} />
                افزودن تمرین
              </button>
            </form>
          </section>

          {/* فرم ورود اطلاعات */}
          <section
            id="manage-data"
            className="scroll-mt-28 rounded-3xl border border-pink-100 bg-white p-5 shadow-sm sm:p-6 dark:border-gray-800 dark:bg-gray-900"
          >
            <SectionTitle
              title="مدیریت اطلاعات داشبورد"
              description="عددها را تغییر بده؛ نمودارها و کارت‌ها خودکار به‌روز می‌شوند."
              icon={Activity}
            />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <InputField
                label="جلسات انجام‌شده"
                type="number"
                min="0"
                value={data.completedWorkouts}
                onChange={(value) =>
                  updateField("completedWorkouts", Math.max(0, Number(value) || 0))
                }
              />

              <InputField
                label="هدف جلسات هفتگی"
                type="number"
                min="0"
                value={data.weeklyGoal}
                onChange={(value) =>
                  updateField("weeklyGoal", Math.max(0, Number(value) || 0))
                }
              />

              <InputField
                label="ساعت فعالیت"
                type="number"
                min="0"
                step="0.5"
                value={data.activityHours}
                onChange={(value) =>
                  updateField("activityHours", Math.max(0, Number(value) || 0))
                }
              />

              <InputField
                label="کالری فعالیت"
                type="number"
                min="0"
                value={data.calories}
                onChange={(value) =>
                  updateField("calories", Math.max(0, Number(value) || 0))
                }
              />
            </div>

            <div className="my-8 border-t border-gray-100 dark:border-gray-800" />

            <SectionTitle
              title="اطلاعات فعالیت هفتگی"
              description="دقایق فعالیت و کالری هر روز را وارد کن."
              icon={CalendarDays}
            />

            <div className="space-y-4">
              {data.weeklyActivity.map((item, index) => (
                <div
                  key={item.day}
                  className="grid grid-cols-1 items-end gap-3 rounded-2xl border border-gray-100 p-4 sm:grid-cols-3 dark:border-gray-800"
                >
                  <div className="pb-3 font-bold">{item.day}</div>

                  <InputField
                    label="دقیقه فعالیت"
                    type="number"
                    min="0"
                    value={item.minutes}
                    onChange={(value) =>
                      updateWeeklyActivity(
                        index,
                        "minutes",
                        Math.max(0, Number(value) || 0)
                      )
                    }
                  />

                  <InputField
                    label="کالری"
                    type="number"
                    min="0"
                    value={item.calories}
                    onChange={(value) =>
                      updateWeeklyActivity(
                        index,
                        "calories",
                        Math.max(0, Number(value) || 0)
                      )
                    }
                  />
                </div>
              ))}
            </div>

            <div className="my-8 border-t border-gray-100 dark:border-gray-800" />

            <SectionTitle
              title="ثبت پیشرفت ماهانه"
              description="نام ماه و وزن ثبت‌شده را وارد کن."
              icon={TrendingUp}
            />

            <div className="space-y-4">
              {data.progressData.map((item, index) => (
                <div
                  key={`${index}-${item.month}`}
                  className="grid grid-cols-1 gap-3 rounded-2xl border border-gray-100 p-4 sm:grid-cols-2 dark:border-gray-800"
                >
                  <InputField
                    label="ماه"
                    value={item.month}
                    onChange={(value) =>
                      updateProgress(index, "month", value)
                    }
                  />

                  <InputField
                    label="وزن (کیلوگرم)"
                    type="number"
                    min="0"
                    step="0.1"
                    value={item.weight}
                    onChange={(value) =>
                      updateProgress(
                        index,
                        "weight",
                        Math.max(0, Number(value) || 0)
                      )
                    }
                  />
                </div>
              ))}
            </div>

            <div className="my-8 border-t border-gray-100 dark:border-gray-800" />

            <SectionTitle
              title="اطلاعات تغذیه"
              description="درصد تأمین هر گروه غذایی را وارد کن."
              icon={Apple}
            />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {data.nutritionData.map((item, index) => (
                <InputField
                  key={item.name}
                  label={`${item.name} (درصد)`}
                  type="number"
                  min="0"
                  max="100"
                  value={item.value}
                  onChange={(value) =>
                    updateNutrition(
                      index,
                      Math.min(100, Math.max(0, Number(value) || 0))
                    )
                  }
                />
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2 text-sm text-emerald-600">
                <Save size={18} />
                {savedMessage || "ذخیره‌سازی خودکار فعال است."}
              </div>

              <button
                type="button"
                onClick={resetData}
                className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 py-3 text-sm font-bold transition hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800"
              >
                <RotateCcw size={17} />
                بازگردانی اطلاعات اولیه
              </button>
            </div>
          </section>

          {/* مربی */}
          <section className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="font-black">مربی من</h3>
              <span className="rounded-lg bg-emerald-50 px-2 py-1 text-xs text-emerald-600 dark:bg-emerald-500/10">
                نمونه
              </span>
            </div>

            <div className="flex flex-col items-center rounded-3xl bg-gradient-to-br from-pink-50 to-purple-50 p-6 text-center dark:from-gray-800 dark:to-gray-800">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-pink-400 to-purple-500 text-white">
                <UserRound size={38} />
              </div>

              <h4 className="mt-4 font-black">مربی نمونه</h4>
              <p className="mt-2 text-xs text-gray-500">مربی تناسب اندام</p>

              <div className="mt-4 flex items-center gap-2 text-xs text-purple-600 dark:text-purple-300">
                <Heart size={15} />
                همراه مسیر پیشرفت تو
              </div>

              <Link
                href="/trainers"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-bold text-purple-700 shadow-sm transition hover:bg-purple-100 dark:bg-gray-700 dark:text-white"
              >
                مشاهده مربی‌ها
                <ArrowLeft size={16} />
              </Link>
            </div>

            <div className="mt-5 flex items-start gap-3 rounded-2xl bg-gray-50 p-4 dark:bg-gray-800">
              <div className="rounded-xl bg-white p-2 text-purple-500 dark:bg-gray-700">
                <Heart size={18} />
              </div>

              <div>
                <p className="text-sm font-bold">یادت باشه!</p>
                <p className="mt-2 text-xs leading-6 text-gray-500">
                  استراحت کافی، تغذیه متعادل و استمرار هم بخشی از مسیر سلامتی
                  هستن.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-pink-100 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <div className="rounded-2xl bg-pink-50 p-3 text-pink-500 dark:bg-pink-500/10">
                  <Heart size={23} />
                </div>

                <div>
                  <h3 className="font-bold">
                    مهم‌ترین هدف، حال خوب توئه 💗
                  </h3>
                  <p className="mt-2 text-xs leading-6 text-gray-500">
                    اطلاعات داشبورد را متناسب با وضعیت واقعی خودت وارد کن.
                  </p>
                </div>
              </div>

              <Link
                href="/"
                className="flex shrink-0 items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 py-3 text-sm font-bold transition hover:border-pink-300 hover:text-pink-600 dark:border-gray-700"
              >
                صفحه اصلی
                <ArrowLeft size={16} />
              </Link>
            </div>
          </section>

          <footer className="pb-3 text-center text-xs text-gray-400">
            فیت بانو | پنل اختصاصی شاگردان
          </footer>
        </div>
      </div>
    </main>
  );
}
