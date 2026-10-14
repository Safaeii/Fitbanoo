import { NextResponse } from "next/server";


const classes = [
  {
    id: 1,
    name: "بدنسازی بانوان",
    category: "قدرتی",
    description: "تمرینات قدرتی متناسب با اهداف ورزشی شما",
    duration: 60,
    price: 800000,
  },
  {
    id: 2,
    name: "پیلاتس",
    category: "انعطاف‌پذیری",
    description: "تمریناتی برای بهبود انعطاف‌پذیری و تعادل بدن",
    duration: 45,
    price: 600000,
  },
  {
    id: 3,
    name: "یوگا",
    category: "انعطاف‌پذیری",
    description: "تمریناتی برای افزایش آرامش و تمرکز",
    duration: 50,
    price: 500000,
  },
  {
    id: 4,
    name: "فیتنس و ایروبیک",
    category: "هوازی",
    description: "تمرینات پرتحرک برای افزایش استقامت بدنی",
    duration: 45,
    price: 550000,
  },
  {
    id: 5,
    name: "کراس‌فیت",
    category: "قدرتی",
    description: "تمرینات ترکیبی قدرتی و استقامتی برای بهبود آمادگی جسمانی",
    duration: 60,
    price: 900000,
  },
  {
    id: 6,
    name: "زومبا",
    category: "هوازی",
    description: "تمرینات شاد و پرتحرک با حرکات موزون و موسیقی",
    duration: 45,
    price: 500000,
  },
  {
    id: 7,
    name: "تی‌آر‌ایکس (TRX)",
    category: "قدرتی",
    description: "تمرینات مقاومتی با استفاده از بندهای مخصوص برای تقویت عضلات",
    duration: 50,
    price: 700000,
  },
  {
    id: 8,
    name: "اسپینینگ",
    category: "هوازی",
    description: "تمرینات دوچرخه ثابت برای افزایش استقامت قلبی و عروقی",
    duration: 45,
    price: 650000,
  },
  {
    id: 9,
    name: "تمرینات شکم و پهلو",
    category: "قدرتی",
    description: "تمرینات متنوع برای تقویت عضلات مرکزی بدن",
    duration: 30,
    price: 400000,
  },
  {
    id: 10,
    name: "حرکات اصلاحی",
    category: "اصلاحی",
    description: "تمرینات هدفمند برای بهبود الگوهای حرکتی و وضعیت بدن",
    duration: 45,
    price: 600000,
  },
];


export async function GET() {
  return NextResponse.json(classes);
}