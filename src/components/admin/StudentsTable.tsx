"use client";

import { Users, Search, Filter } from "lucide-react";

const students = [
  { id: 1, name: "محمد أحمد السيد", phone: "01012345678", grade: "الثالث الثانوي", course: "مراجعة نهائية جبر", joinDate: "٢٠٢٥/٠١/١٠", balance: 150, status: "نشط" },
  { id: 2, name: "سارة علي محمود", phone: "01123456789", grade: "الثاني الثانوي", course: "إحصاء ثانوي شامل", joinDate: "٢٠٢٥/٠١/١٥", balance: 0, status: "نشط" },
  { id: 3, name: "عمر حسن إبراهيم", phone: "01234567890", grade: "الثالث الثانوي", course: "تأسيس تفاضل وتكامل", joinDate: "٢٠٢٥/٠٢/٠٣", balance: 300, status: "نشط" },
  { id: 4, name: "فاطمة محمود خليل", phone: "01095678901", grade: "الثالث الثانوي", course: "مراجعة نهائية جبر", joinDate: "٢٠٢٥/٠٢/١٨", balance: 50, status: "نشط" },
  { id: 5, name: "أحمد كريم النجار", phone: "01156789012", grade: "الثاني الثانوي", course: "جبر المتجهات", joinDate: "٢٠٢٥/٠٣/٠١", balance: 0, status: "موقوف" },
];

export default function StudentsTable() {
  return (
    <div className="glass rounded-2xl overflow-hidden border border-purple-primary/20">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 border-b border-purple-primary/20 gap-4">
        <div>
          <h2 className="text-xl font-black text-white flex items-center gap-2">
            <Users size={20} className="text-purple-light" />
            الطلاب المسجلون
          </h2>
          <p className="text-gray-400 text-sm mt-1">١,٢٤٨ طالب مسجل</p>
        </div>
        {/* Search */}
        <div className="relative">
          <Search size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="بحث باسم الطالب أو رقم الهاتف..."
            className="bg-navy-800 border border-purple-primary/30 text-white placeholder-gray-500 rounded-xl pr-9 pl-4 py-2 text-sm focus:outline-none focus:border-purple-light w-64"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-purple-primary/10 text-gray-400 text-xs">
              <th className="text-right py-3 px-6 font-semibold">#</th>
              <th className="text-right py-3 px-4 font-semibold">الطالب</th>
              <th className="text-right py-3 px-4 font-semibold">رقم الهاتف</th>
              <th className="text-right py-3 px-4 font-semibold">الكورس</th>
              <th className="text-right py-3 px-4 font-semibold">تاريخ الانضمام</th>
              <th className="text-right py-3 px-4 font-semibold">الرصيد</th>
              <th className="text-right py-3 px-4 font-semibold">الحالة</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s, i) => (
              <tr key={s.id} className="border-b border-navy-700/50 hover:bg-navy-700/30 transition-colors">
                <td className="py-4 px-6 text-gray-500">{i + 1}</td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full overflow-hidden border border-purple-primary/40 flex-shrink-0">
                      <img
                        src={`https://api.dicebear.com/8.x/avataaars/svg?seed=${s.name}&backgroundColor=b6e3f4`}
                        alt={s.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-white font-semibold">{s.name}</p>
                      <p className="text-gray-500 text-xs">{s.grade}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4 text-gray-400 font-mono text-xs">{s.phone}</td>
                <td className="py-4 px-4 text-gray-300 text-xs">{s.course}</td>
                <td className="py-4 px-4 text-gray-400 text-xs">{s.joinDate}</td>
                <td className="py-4 px-4">
                  <span className={`font-bold text-sm ${s.balance > 0 ? "text-green-400" : "text-gray-500"}`}>
                    {s.balance} ج.م
                  </span>
                </td>
                <td className="py-4 px-4">
                  <span
                    className={`text-xs font-bold px-2 py-1 rounded-full ${
                      s.status === "نشط"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {s.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="p-4 border-t border-purple-primary/20 flex items-center justify-between">
        <p className="text-gray-500 text-xs">عرض ٥ من ١,٢٤٨ طالب</p>
        <div className="flex gap-2">
          {[1, 2, 3, "...", 50].map((p, i) => (
            <button
              key={i}
              className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
                p === 1
                  ? "bg-purple-gradient text-white shadow-glow"
                  : "glass-light text-gray-400 hover:text-white"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
