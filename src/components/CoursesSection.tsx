"use client";
import { useState } from "react";
import AuthModal from "./AuthModal";

const courses = [
  {
    id: 1,
    title: "مراجعة نهائية جبر",
    subtitle: "الصف الثالث الثانوي",
    description: "تغطية شاملة لكل مواضيع الجبر مع حل امتحانات السنوات السابقة",
    price: "٢٩٩",
    oldPrice: "٤٩٩",
    badge: "الأكثر مبيعاً",
    badgeColor: "bg-gold text-navy-900",
    icon: "📐",
    gradient: "from-purple-primary to-purple-dark",
    features: ["٤٥+ فيديو", "٣٠٠ سؤال تدريبي", "امتحانات تجريبية", "دعم مستمر"],
    students: "٢,١٤٠",
  },
  {
    id: 2,
    title: "تأسيس تفاضل وتكامل",
    subtitle: "من الصفر للاحتراف",
    description: "المنهج الكامل للتفاضل والتكامل بأسلوب مبسط ومنظم لأعلى الدرجات",
    price: "٣٤٩",
    oldPrice: "٥٤٩",
    badge: "جديد 🔥",
    badgeColor: "bg-pink-accent text-white",
    icon: "∫",
    gradient: "from-pink-accent to-purple-primary",
    features: ["٦٠+ فيديو", "٥٠٠ سؤال تدريبي", "كويزات تفاعلية", "شهادة إتمام"],
    students: "١,٨٩٠",
  },
  {
    id: 3,
    title: "إحصاء ثانوي شامل",
    subtitle: "الصف الثاني والثالث",
    description: "تغطية كاملة لمنهج الإحصاء مع أمثلة عملية وتمارين متنوعة",
    price: "٢٤٩",
    oldPrice: "٣٩٩",
    badge: "اقتصادي",
    badgeColor: "bg-green-500 text-white",
    icon: "📊",
    gradient: "from-blue-600 to-purple-primary",
    features: ["٣٥+ فيديو", "٢٠٠ سؤال تدريبي", "ملخصات PDF", "دعم مستمر"],
    students: "٩٨٧",
  },
  {
    id: 4,
    title: "جبر المتجهات والمصفوفات",
    subtitle: "الصف الثالث الثانوي",
    description: "شرح تفصيلي للمتجهات والمصفوفات مع تطبيقات عملية وأسئلة تفاعلية",
    price: "٢٧٩",
    oldPrice: "٤٤٩",
    badge: "مميز ⭐",
    badgeColor: "bg-gold text-navy-900",
    icon: "⊕",
    gradient: "from-indigo-600 to-purple-primary",
    features: ["٤٠+ فيديو", "٢٥٠ سؤال تدريبي", "نماذج امتحانات", "دعم مستمر"],
    students: "٧٥٤",
  },
];

export default function CoursesSection() {
  const [showAuth, setShowAuth] = useState(false);

  return (
    <>
      <section id="courses" className="relative py-24 bg-navy-950 overflow-hidden">
        {/* BG blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 blob bg-purple-primary opacity-10" />
        <div className="absolute bottom-0 right-0 w-80 h-80 blob bg-pink-accent opacity-10" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-3xl">💡</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-2 mb-4">
              احدث{" "}
              <span className="gradient-text">الباقات</span>{" "}
              <span className="text-3xl">💡</span>
            </h2>
            <p className="text-gray-400 text-lg">
              اختار الباقة المناسبة وابدأ رحلتك نحو التفوق
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className="relative glass rounded-3xl overflow-hidden card-hover group"
              >
                {/* Gradient top banner */}
                <div className={`h-32 bg-gradient-to-br ${course.gradient} relative flex items-center justify-center`}>
                  <span className="text-6xl opacity-30 font-black">{course.icon}</span>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy-800/60" />
                  {/* Badge */}
                  <span className={`absolute top-3 right-3 text-xs font-bold px-3 py-1 rounded-full ${course.badgeColor}`}>
                    {course.badge}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-5">
                  <p className="text-purple-light text-xs font-semibold mb-1">{course.subtitle}</p>
                  <h3 className="text-xl font-black text-white mb-2">{course.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{course.description}</p>

                  {/* Features */}
                  <ul className="space-y-1 mb-4">
                    {course.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-gray-300 text-sm">
                        <span className="text-purple-light text-xs">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Students enrolled */}
                  <p className="text-gray-500 text-xs mb-4">👥 {course.students} طالب مسجّل</p>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 justify-end mb-4">
                    <span className="text-gray-500 line-through text-sm">{course.oldPrice} ج</span>
                    <span className="text-3xl font-black text-white">{course.price}</span>
                    <span className="text-gray-300 text-sm">ج.م</span>
                  </div>

                  {/* Subscribe Button */}
                  <button
                    onClick={() => setShowAuth(true)}
                    className="w-full py-3 bg-purple-gradient text-white font-bold rounded-2xl shadow-glow hover:shadow-glow-pink transition-all hover:scale-105 text-sm"
                  >
                    اشترك الآن 🚀
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {showAuth && <AuthModal initialTab="register" onClose={() => setShowAuth(false)} />}
    </>
  );
}
