"use client";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient pt-20 pb-16">
      {/* Background blobs — smaller on mobile */}
      <div className="absolute top-20 right-0 w-64 h-64 md:w-[600px] md:h-[600px] blob bg-purple-primary" />
      <div className="absolute bottom-0 left-4 w-48 h-48 md:w-[400px] md:h-[400px] blob bg-pink-accent" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-[700px] md:h-[700px] blob bg-navy-700" style={{ animationDelay: "4s" }} />

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

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* 
          Mobile:  flex-col  → text first, image below
          Desktop: grid 2-col → side by side
        */}
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* ── Teacher Image ─────────────────────────────────── */}
          <div className="relative flex justify-center w-full">
            {/* Glow rings — hide on very small screens */}
            <div className="absolute inset-0 flex items-center justify-center hidden sm:flex">
              <div className="w-56 h-56 md:w-80 md:h-80 rounded-full bg-purple-primary/20 animate-spin-slow border border-purple-primary/30" />
            </div>
            <div className="absolute inset-6 flex items-center justify-center hidden sm:flex">
              <div className="w-44 h-44 md:w-64 md:h-64 rounded-full bg-pink-accent/10 animate-spin-slow border border-pink-accent/20" style={{ animationDirection: "reverse" }} />
            </div>

            {/* Teacher image — smaller on mobile */}
            <div className="relative z-10 w-52 h-52 sm:w-64 sm:h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-purple-primary shadow-glow flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=600&q=80"
                alt="أستاذ أحمد القاضي"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Floating badges — positioned safely relative to image, hidden on xs */}
            <div className="absolute top-0 right-4 sm:right-0 glass border-glow rounded-2xl px-3 py-1.5 text-center animate-float z-20 hidden sm:block">
              <p className="text-xl font-black text-white">٩٨٪</p>
              <p className="text-xs text-purple-light">معدل النجاح</p>
            </div>
            <div className="absolute bottom-0 left-4 sm:left-0 glass border-glow rounded-2xl px-3 py-1.5 text-center z-20 hidden sm:block" style={{ animation: "float 7s ease-in-out infinite" }}>
              <p className="text-xl font-black text-white">+١٠K</p>
              <p className="text-xs text-pink-accent">طالب ناجح</p>
            </div>
          </div>

          {/* ── Text Content ──────────────────────────────────── */}
          <div className="text-right animate-fade-in-up w-full">
            <div className="inline-block mb-3 md:mb-4">
              <span className="bg-purple-primary/20 border border-purple-primary/40 text-purple-light text-xs font-bold px-3 py-1.5 rounded-full">
                ✨ المنصة الأولى في الرياضيات
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-tight mb-3 md:mb-4">
              <span className="block">آلاف الطلاب</span>
              <span className="block gradient-text">مُقفِّلين</span>
              <span className="block text-white">المادة 🔐</span>
            </h1>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
              أستاذ أحمد القاضي — أحد أبرز معلمي الرياضيات للمرحلة الثانوية.
              منهج معتمد على التبسيط، التحليل، والتدريب العملي لضمان أعلى الدرجات لكل طالب.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 justify-end mb-8 md:mb-10">
              <a
                href="#courses"
                className="px-6 sm:px-8 py-3 bg-purple-gradient text-white font-bold rounded-full shadow-glow hover:shadow-glow-pink transition-all hover:scale-105 text-base md:text-lg"
              >
                🚀 ابدأ الآن
              </a>
              <a
                href="#why-us"
                className="px-6 sm:px-8 py-3 glass border border-purple-primary/50 text-white font-bold rounded-full hover:bg-purple-primary/20 transition-all text-base md:text-lg"
              >
                تعرّف أكثر
              </a>
            </div>

            {/* Stats row */}
            <div className="flex gap-6 md:gap-8 justify-end">
              {[
                { num: "+١٠٠٠٠", label: "طالب" },
                { num: "+٩٨٪", label: "نجاح" },
                { num: "+٥٠", label: "دورة" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-2xl md:text-3xl font-black gradient-text stat-number">{s.num}</p>
                  <p className="text-gray-400 text-xs md:text-sm">{s.label}</p>
                </div>
              ))}
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
