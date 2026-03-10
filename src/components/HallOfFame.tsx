"use client";

const students = [
  {
    id: 1,
    name: "يوسف سامي علي",
    rank: "الأول",
    rankNum: 1,
    score: 319,
    year: "٢٠٢٥",
    specialty: "الشعبة العلمية - علوم",
    avatar: "https://api.dicebear.com/8.x/avataaars/svg?seed=Youssef&backgroundColor=b6e3f4",
    borderColor: "border-gold shadow-[0_0_30px_rgba(245,158,11,0.6)]",
    badge: "🥇",
  },
  {
    id: 2,
    name: "سما محمد فايز مراد",
    rank: "الرابع",
    rankNum: 4,
    score: 317,
    year: "٢٠٢٥",
    specialty: "الشعبة العلمية - علوم",
    avatar: "https://api.dicebear.com/8.x/avataaars/svg?seed=Sama&backgroundColor=ffdfbf",
    borderColor: "border-gray-400 shadow-[0_0_20px_rgba(156,163,175,0.4)]",
    badge: "🥈",
  },
  {
    id: 3,
    name: "نوران نبيل الحسيني",
    rank: "السادس",
    rankNum: 6,
    score: 316,
    year: "٢٠٢٥",
    specialty: "الشعبة العلمية - علوم",
    avatar: "https://api.dicebear.com/8.x/avataaars/svg?seed=Noran&backgroundColor=d1d4f9",
    borderColor: "border-orange-400 shadow-[0_0_20px_rgba(251,146,60,0.4)]",
    badge: "🥉",
  },
  {
    id: 4,
    name: "كريم أحمد الشافعي",
    rank: "الثامن",
    rankNum: 8,
    score: 315,
    year: "٢٠٢٥",
    specialty: "الشعبة العلمية - رياضيات",
    avatar: "https://api.dicebear.com/8.x/avataaars/svg?seed=Karim&backgroundColor=c0aede",
    borderColor: "border-purple-primary shadow-[0_0_20px_rgba(108,43,217,0.4)]",
    badge: "⭐",
  },
  {
    id: 5,
    name: "مريم وليد مكاوي",
    rank: "العاشر",
    rankNum: 10,
    score: 314,
    year: "٢٠٢٥",
    specialty: "الشعبة العلمية - رياضيات",
    avatar: "https://api.dicebear.com/8.x/avataaars/svg?seed=Mariam&backgroundColor=ffd5dc",
    borderColor: "border-purple-primary shadow-[0_0_20px_rgba(108,43,217,0.4)]",
    badge: "⭐",
  },
  {
    id: 6,
    name: "عمر حسام الدين",
    rank: "الثاني عشر",
    rankNum: 12,
    score: 313,
    year: "٢٠٢٥",
    specialty: "الشعبة العلمية - علوم",
    avatar: "https://api.dicebear.com/8.x/avataaars/svg?seed=Omar&backgroundColor=b6e3f4",
    borderColor: "border-purple-primary shadow-[0_0_20px_rgba(108,43,217,0.4)]",
    badge: "⭐",
  },
];

export default function HallOfFame() {
  return (
    <section id="hall-of-fame" className="relative py-16 md:py-24 bg-navy-900 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 blob bg-gold opacity-5" />
      <div className="absolute bottom-0 left-0 w-80 h-80 blob bg-purple-primary opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-4xl">💡</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-2 mb-4">
            أوائل{" "}
            <span className="gradient-text-gold">الجمهورية</span>{" "}
            <span className="text-3xl">💡</span>
          </h2>
          <p className="text-gray-400 text-lg">أبطالنا الذين سطّروا اسمهم بالذهب 🏆</p>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto mt-5 rounded-full" />
        </div>

        {/* Top 3 podium */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-6">
          {students.slice(0, 3).map((s) => (
            <div
              key={s.id}
              className={`relative glass rounded-3xl p-6 card-hover text-center border-2 ${s.borderColor}`}
            >
              {/* Rank badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-purple-gradient flex items-center justify-center text-white font-black text-sm shadow-glow">
                {s.rankNum}
              </div>

              {/* Big badge */}
              <p className="text-4xl mb-3 mt-2">{s.badge}</p>

              {/* Avatar */}
              <div className={`w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 ${s.borderColor}`}>
                <img
                  src={s.avatar}
                  alt={s.name}
                  className="w-full h-full object-cover bg-navy-800"
                />
              </div>

              <h3 className="text-lg font-black text-white mb-1">{s.name}</h3>
              <p className="text-gray-400 text-sm mb-3">{s.specialty}</p>

              {/* Score */}
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-3xl font-black gradient-text-gold stat-number">{s.score}</span>
                <span className="text-gray-400 text-sm">درجة</span>
              </div>

              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>المركز {s.rank} على الجمهورية</span>
                <span className="bg-purple-primary/20 text-purple-light px-2 py-1 rounded-full">
                  دفعة {s.year}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Rest of students */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {students.slice(3).map((s) => (
            <div
              key={s.id}
              className="glass rounded-2xl p-5 card-hover flex items-center gap-4 border border-purple-primary/20"
            >
              {/* Rank */}
              <div className="w-10 h-10 rounded-full bg-purple-gradient flex items-center justify-center text-white font-black text-sm flex-shrink-0 shadow-glow">
                {s.rankNum}
              </div>

              {/* Avatar */}
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-purple-primary flex-shrink-0">
                <img
                  src={s.avatar}
                  alt={s.name}
                  className="w-full h-full object-cover bg-navy-800"
                />
              </div>

              {/* Info */}
              <div className="flex-1 text-right">
                <h3 className="font-bold text-white text-sm">{s.name}</h3>
                <p className="text-gray-400 text-xs">{s.specialty}</p>
                <p className="text-xs text-gray-500">المركز {s.rank} على الجمهورية</p>
              </div>

              {/* Score */}
              <div className="text-center flex-shrink-0">
                <p className="text-2xl font-black gradient-text-gold">{s.score}</p>
                <p className="text-gray-500 text-xs">درجة</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
