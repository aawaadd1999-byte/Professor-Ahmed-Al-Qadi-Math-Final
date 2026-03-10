"use client";

const features = [
  {
    icon: "🎓",
    title: "دعم مستمر",
    desc: "رد على أسئلة الطلاب من فريق أكاديمي",
  },
  {
    icon: "🧩",
    title: "اختبارات تفاعلية",
    desc: "أسئلة تدريبية بعد كل جزء",
  },
  {
    icon: "👥",
    title: "متابعة تقدم الطالب",
    desc: "قياس الأداء والنتائج أونلاين",
  },
  {
    icon: "📚",
    title: "محتوى منظم",
    desc: "شرح → أسئلة → تدريب عملي",
  },
  {
    icon: "🎥",
    title: "فيديوهات عالية الجودة",
    desc: "وضوح صوت وصورة وانتاج مصوراً",
  },
  {
    icon: "🔍",
    title: "نظام بحث بالأسئلة",
    desc: "قدّر تصل للسؤال وردّه في ثانية",
  },
];

export default function WhyUsSection() {
  return (
    <section id="why-us" className="relative py-16 md:py-24 bg-navy-900 overflow-hidden">
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(108,43,217,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(108,43,217,0.5) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <span className="text-3xl">💡</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-2 mb-4">
            ليه تختار{" "}
            <span className="gradient-text">أستاذ أحمد؟</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            منصة متكاملة تجمع كل ما يحتاجه الطالب في مكان واحد
          </p>
          <div className="w-24 h-1 bg-purple-gradient mx-auto mt-6 rounded-full" />
        </div>

        {/* Teacher avatar in center (desktop) */}
        <div className="relative">
          {/* Features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="glass border-glow rounded-2xl p-6 card-hover text-center group cursor-default"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-purple-primary/20 flex items-center justify-center text-3xl group-hover:bg-purple-primary/40 transition-colors">
                  {f.icon}
                </div>

                {/* Decorative top border */}
                <div className="w-12 h-1 bg-purple-gradient mx-auto mb-4 rounded-full" />

                <h3 className="text-xl font-bold text-white mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10 md:mt-16">
          <a
            href="#courses"
            className="inline-block px-10 py-4 bg-purple-gradient text-white font-bold rounded-full text-lg shadow-glow hover:shadow-glow-pink transition-all hover:scale-105"
          >
            🎯 شوف الباقات دلوقتي
          </a>
        </div>
      </div>
    </section>
  );
}
