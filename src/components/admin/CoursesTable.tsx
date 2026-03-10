"use client";
import { useState } from "react";
import { Plus, Edit2, Trash2, Eye, EyeOff } from "lucide-react";

const initialCourses = [
  {
    id: 1,
    title: "مراجعة نهائية جبر",
    grade: "الثالث الثانوي",
    price: 299,
    students: 2140,
    status: "نشط",
    revenue: 63_460,
  },
  {
    id: 2,
    title: "تأسيس تفاضل وتكامل",
    grade: "من الصفر للاحتراف",
    price: 349,
    students: 1890,
    status: "نشط",
    revenue: 66_610,
  },
  {
    id: 3,
    title: "إحصاء ثانوي شامل",
    grade: "الثاني والثالث",
    price: 249,
    students: 987,
    status: "نشط",
    revenue: 24_276,
  },
  {
    id: 4,
    title: "جبر المتجهات والمصفوفات",
    grade: "الثالث الثانوي",
    price: 279,
    students: 754,
    status: "مسودة",
    revenue: 21_066,
  },
  {
    id: 5,
    title: "هندسة متقدمة",
    grade: "الثالث الثانوي",
    price: 319,
    students: 0,
    status: "مسودة",
    revenue: 0,
  },
];

export default function CoursesTable() {
  const [courses, setCourses] = useState(initialCourses);
  const [showAddForm, setShowAddForm] = useState(false);

  const toggleStatus = (id: number) => {
    setCourses((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, status: c.status === "نشط" ? "مسودة" : "نشط" } : c
      )
    );
  };

  const deleteCourse = (id: number) => {
    if (confirm("هل أنت متأكد من حذف هذا الكورس؟")) {
      setCourses((prev) => prev.filter((c) => c.id !== id));
    }
  };

  return (
    <div className="glass rounded-2xl overflow-hidden border border-purple-primary/20">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-purple-primary/20">
        <div>
          <h2 className="text-xl font-black text-white">إدارة الكورسات</h2>
          <p className="text-gray-400 text-sm mt-1">{courses.length} كورس في المنصة</p>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="flex items-center gap-2 px-4 py-2 bg-purple-gradient text-white font-bold rounded-xl shadow-glow hover:scale-105 transition-all text-sm"
        >
          <Plus size={16} />
          إضافة كورس
        </button>
      </div>

      {/* Add form */}
      {showAddForm && (
        <div className="p-6 border-b border-purple-primary/20 bg-navy-800/30">
          <h3 className="text-white font-bold mb-4">إضافة كورس جديد</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="اسم الكورس"
              className="bg-navy-800 border border-purple-primary/30 text-white placeholder-gray-500 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-purple-light"
            />
            <input
              type="text"
              placeholder="الصف الدراسي"
              className="bg-navy-800 border border-purple-primary/30 text-white placeholder-gray-500 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-purple-light"
            />
            <input
              type="number"
              placeholder="السعر (ج.م)"
              className="bg-navy-800 border border-purple-primary/30 text-white placeholder-gray-500 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-purple-light"
            />
          </div>
          <div className="flex gap-3 mt-4">
            <button className="px-5 py-2 bg-purple-gradient text-white font-bold rounded-xl shadow-glow text-sm hover:scale-105 transition-all">
              حفظ الكورس
            </button>
            <button
              onClick={() => setShowAddForm(false)}
              className="px-5 py-2 glass-light border border-gray-600 text-gray-300 font-bold rounded-xl text-sm hover:bg-navy-700"
            >
              إلغاء
            </button>
          </div>
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-purple-primary/10 text-gray-400 text-xs">
              <th className="text-right py-3 px-6 font-semibold">#</th>
              <th className="text-right py-3 px-4 font-semibold">الكورس</th>
              <th className="text-right py-3 px-4 font-semibold">السعر</th>
              <th className="text-right py-3 px-4 font-semibold">الطلاب</th>
              <th className="text-right py-3 px-4 font-semibold">الإيرادات</th>
              <th className="text-right py-3 px-4 font-semibold">الحالة</th>
              <th className="text-right py-3 px-4 font-semibold">إجراءات</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((c, i) => (
              <tr
                key={c.id}
                className="border-b border-navy-700/50 hover:bg-navy-700/30 transition-colors"
              >
                <td className="py-4 px-6 text-gray-500 font-mono">{i + 1}</td>
                <td className="py-4 px-4">
                  <p className="text-white font-semibold">{c.title}</p>
                  <p className="text-gray-500 text-xs">{c.grade}</p>
                </td>
                <td className="py-4 px-4 text-white font-bold">{c.price} ج.م</td>
                <td className="py-4 px-4 text-gray-300">{c.students.toLocaleString("ar")} طالب</td>
                <td className="py-4 px-4 text-green-400 font-semibold">
                  {c.revenue.toLocaleString("ar")} ج.م
                </td>
                <td className="py-4 px-4">
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full ${
                      c.status === "نشط"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {c.status}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleStatus(c.id)}
                      className="p-1.5 rounded-lg hover:bg-blue-500/20 text-gray-400 hover:text-blue-400 transition-colors"
                      title="تبديل الحالة"
                    >
                      {c.status === "نشط" ? <EyeOff size={15} /> : <Eye size={15} />}
                    </button>
                    <button className="p-1.5 rounded-lg hover:bg-purple-primary/20 text-gray-400 hover:text-purple-light transition-colors">
                      <Edit2 size={15} />
                    </button>
                    <button
                      onClick={() => deleteCourse(c.id)}
                      className="p-1.5 rounded-lg hover:bg-red-500/20 text-gray-400 hover:text-red-400 transition-colors"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
