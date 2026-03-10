"use client";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient pt-20">
      {/* Background blobs */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] blob bg-purple-primary" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] blob bg-pink-accent" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] blob bg-navy-700" style={{ animationDelay: "4s" }} />

      {/* Stars/particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/20"
            style={{
              width: Math.random() * 3 + 1 + "px",
              height: Math.random() * 3 + 1 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              animationDelay: Math.random() * 5 + "s",
              animation: `pulse ${Math.random() * 3 + 2}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content (right side in RTL) */}
          <div className="text-right animate-fade-in-up">
            <div className="inline-block mb-4">
              <span className="bg-purple-primary/20 border border-purple-primary/40 text-purple-light text-xs font-bold px-4 py-2 rounded-full">
                ✨ المنصة الأولى في الرياضيات
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-4">
              <span className="block">آلاف الطلاب</span>
              <span className="block gradient-text">مُقفِّلين</span>
              <span className="block text-white">المادة 🔐</span>
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg mr-auto">
              أستاذ أحمد القاضي — أحد أبرز معلمي الرياضيات للمرحلة الثانوية.
              منهج معتمد على التبسيط، التحليل، والتدريب العملي لضمان أعلى الدرجات لكل طالب.
            </p>

            <div className="flex flex-wrap gap-4 justify-end mb-10">
              <a
                href="#courses"
                className="px-8 py-3 bg-purple-gradient text-white font-bold rounded-full shadow-glow hover:shadow-glow-pink transition-all hover:scale-105 text-lg"
              >
                🚀 ابدأ الآن
              </a>
              <a
                href="#why-us"
                className="px-8 py-3 glass border border-purple-primary/50 text-white font-bold rounded-full hover:bg-purple-primary/20 transition-all text-lg"
              >
                تعرّف أكثر
              </a>
            </div>

            {/* Stats row */}
            <div className="flex gap-8 justify-end">
              {[
                { num: "+١٠٠٠٠", label: "طالب" },
                { num: "+٩٨٪", label: "نجاح" },
                { num: "+٥٠", label: "دورة" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-3xl font-black gradient-text stat-number">{s.num}</p>
                  <p className="text-gray-400 text-sm">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Teacher Image (left side in RTL = appears on left visually) */}
          <div className="relative flex justify-center animate-slide-in-right">
            {/* Glow ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 rounded-full bg-purple-primary/20 animate-spin-slow border border-purple-primary/30" />
            </div>
            <div className="absolute inset-8 flex items-center justify-center">
              <div className="w-64 h-64 rounded-full bg-pink-accent/10 animate-spin-slow border border-pink-accent/20" style={{ animationDirection: "reverse" }} />
            </div>

            {/* Teacher image */}
            <div className="relative z-10 w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-purple-primary shadow-glow">
              <img
                src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=600&q=80"
                alt="أستاذ أحمد القاضي"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Floating badges */}
            <div className="absolute top-4 right-4 glass border-glow rounded-2xl px-4 py-2 text-center animate-float">
              <p className="text-2xl font-black text-white">٩٨٪</p>
              <p className="text-xs text-purple-light">معدل النجاح</p>
            </div>
            <div className="absolute bottom-8 left-4 glass border-glow rounded-2xl px-4 py-2 text-center" style={{ animation: "float 7s ease-in-out infinite" }}>
              <p className="text-2xl font-black text-white">+١٠K</p>
              <p className="text-xs text-pink-accent">طالب ناجح</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" className="w-full" fill="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#080c2a" />
        </svg>
      </div>
    </section>
  );
}
