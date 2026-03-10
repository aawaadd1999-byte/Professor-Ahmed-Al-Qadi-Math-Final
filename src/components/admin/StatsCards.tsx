"use client";
import { Users, TrendingUp, BookOpen, CalendarDays } from "lucide-react";

const stats = [
  {
    label: "إجمالي الطلاب",
    value: "١,٢٤٨",
    sublabel: "+٤٧ هذا الأسبوع",
    icon: Users,
    color: "from-purple-primary to-purple-dark",
    glow: "shadow-glow",
    trend: "+٤٪",
    trendUp: true,
  },
  {
    label: "إجمالي الإيرادات",
    value: "١٢٤,٥٠٠ ج.م",
    sublabel: "+١٢,٠٠٠ هذا الشهر",
    icon: TrendingUp,
    color: "from-green-500 to-emerald-700",
    glow: "shadow-[0_0_30px_rgba(34,197,94,0.5)]",
    trend: "+١١٪",
    trendUp: true,
  },
  {
    label: "الكورسات النشطة",
    value: "٨",
    sublabel: "١ كورس جديد قريباً",
    icon: BookOpen,
    color: "from-blue-500 to-indigo-700",
    glow: "shadow-[0_0_30px_rgba(59,130,246,0.5)]",
    trend: "٠٪",
    trendUp: true,
  },
  {
    label: "مشتركون هذا الشهر",
    value: "٣١٦",
    sublabel: "أعلى من الشهر السابق",
    icon: CalendarDays,
    color: "from-pink-500 to-rose-700",
    glow: "shadow-glow-pink",
    trend: "+٢٣٪",
    trendUp: true,
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
      {stats.map((s) => {
        const Icon = s.icon;
        return (
          <div
            key={s.label}
            className="glass rounded-2xl p-5 card-hover border border-purple-primary/20"
          >
            {/* Icon + Trend */}
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center ${s.glow}`}>
                <Icon size={22} className="text-white" />
              </div>
              <span
                className={`text-xs font-bold px-2 py-1 rounded-full ${
                  s.trendUp
                    ? "bg-green-500/20 text-green-400"
                    : "bg-red-500/20 text-red-400"
                }`}
              >
                {s.trend}
              </span>
            </div>

            {/* Value */}
            <p className="text-3xl font-black text-white mb-1 stat-number">{s.value}</p>
            <p className="text-white font-semibold text-sm mb-1">{s.label}</p>
            <p className="text-gray-500 text-xs">{s.sublabel}</p>
          </div>
        );
      })}
    </div>
  );
}
