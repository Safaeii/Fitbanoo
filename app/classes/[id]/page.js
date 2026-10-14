import ClassRegistration from "../../components/ClassRegistration"


export default async function ClassDetailsPage({ params }) {
  const { id } = await params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/classes`,
    { cache: "no-store" }
  );

  if (!response.ok) {
    throw new Error("دریافت اطلاعات کلاس‌ها ناموفق بود");
  }

  const classes = await response.json();

  const selectedClass = classes.find(
    (item) => String(item.id) === String(id)
  );

  if (!selectedClass) {
    return (
      <main className="min-h-screen p-10 text-center">
        <h1 className="text-2xl font-bold">
          کلاس مورد نظر پیدا نشد!
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-pink-50 dark:bg-gray-950 p-6 md:p-12">

      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg">

        <span className="text-pink-600 dark:text-pink-300">
          {selectedClass.category}
        </span>

        <h1 className="text-3xl font-extrabold text-gray-800 dark:text-white mt-4 mb-6">
          {selectedClass.name}
        </h1>

        <p className="text-gray-600 dark:text-gray-300 leading-8">
          {selectedClass.description}
        </p>

        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="bg-pink-50 dark:bg-gray-800 rounded-2xl p-5">
            <p className="text-gray-500 dark:text-gray-400 mb-2">
              مدت زمان
            </p>
            <p className="font-bold text-gray-800 dark:text-white">
              {selectedClass.duration} دقیقه
            </p>
          </div>

          <div className="bg-purple-50 dark:bg-gray-800 rounded-2xl p-5">
            <p className="text-gray-500 dark:text-gray-400 mb-2">
              هزینه کلاس
            </p>
            <p className="font-bold text-pink-600 dark:text-pink-300">
              {Number(selectedClass.price).toLocaleString("fa-IR")} تومان
            </p>
          </div>
        </div>
<ClassRegistration className={selectedClass.name} />
      </div>
    </main>
  );
}