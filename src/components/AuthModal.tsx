"use client";
import { useState } from "react";
import { X } from "lucide-react";

interface AuthModalProps {
  initialTab: "login" | "register";
  onClose: () => void;
}

export default function AuthModal({ initialTab, onClose }: AuthModalProps) {
  const [tab, setTab] = useState<"login" | "register">(initialTab);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onClose();
    }, 1500);
  };

  return (
    /* Overlay */
    <div
      className="modal-overlay px-4"
      onClick={onClose}
    >
      {/* Card: w-full on mobile capped at max-w-md, scrollable if tall */}
      <div
        className="relative w-full max-w-md glass border-glow rounded-3xl p-6 sm:p-8 animate-fade-in-up max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 text-gray-400 hover:text-white transition-colors z-10"
          aria-label="إغلاق"
        >
          <X size={22} />
        </button>

        {/* Logo */}
        <div className="text-center mb-5">
          <div className="w-14 h-14 mx-auto mb-3 rounded-full overflow-hidden border-2 border-purple-primary shadow-glow">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80"
              alt="أستاذ أحمد القاضي"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white">أستاذ أحمد القاضي</h2>
          <p className="text-gray-400 text-sm">منصة الرياضيات الأولى</p>
        </div>

        {/* Tab Switcher */}
        <div className="flex rounded-2xl overflow-hidden glass-light mb-5">
          <button
            className={`flex-1 py-2.5 font-bold text-sm transition-all ${tab === "login" ? "bg-purple-gradient text-white shadow-glow" : "text-gray-400 hover:text-white"}`}
            onClick={() => setTab("login")}
          >
            تسجيل دخول
          </button>
          <button
            className={`flex-1 py-2.5 font-bold text-sm transition-all ${tab === "register" ? "bg-purple-gradient text-white shadow-glow" : "text-gray-400 hover:text-white"}`}
            onClick={() => setTab("register")}
          >
            حساب جديد
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          {tab === "register" && (
            <div>
              <label className="block text-sm text-gray-300 mb-1.5 font-semibold">الاسم الكامل</label>
              <input
                type="text"
                placeholder="أدخل اسمك بالكامل"
                className="w-full bg-navy-800/80 border border-purple-primary/30 text-white placeholder-gray-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-light focus:shadow-glow transition-all"
                required
              />
            </div>
          )}

          <div>
            <label className="block text-sm text-gray-300 mb-1.5 font-semibold">رقم الهاتف</label>
            <input
              type="tel"
              placeholder="01xxxxxxxxx"
              className="w-full bg-navy-800/80 border border-purple-primary/30 text-white placeholder-gray-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-light focus:shadow-glow transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1.5 font-semibold">كلمة المرور</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full bg-navy-800/80 border border-purple-primary/30 text-white placeholder-gray-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-light focus:shadow-glow transition-all"
              required
            />
          </div>

          {tab === "register" && (
            <div>
              <label className="block text-sm text-gray-300 mb-1.5 font-semibold">المحافظة</label>
              <select className="w-full bg-navy-800/80 border border-purple-primary/30 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-light transition-all">
                <option value="">اختار محافظتك</option>
                <option>القاهرة</option>
                <option>الجيزة</option>
                <option>الإسكندرية</option>
                <option>الشرقية</option>
                <option>المنوفية</option>
                <option>البحيرة</option>
              </select>
            </div>
          )}

          {tab === "login" && (
            <div className="text-left">
              <button type="button" className="text-purple-light text-xs hover:underline">
                نسيت كلمة المرور؟
              </button>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-purple-gradient text-white font-bold rounded-xl shadow-glow hover:shadow-glow-pink transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed mt-1"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                </svg>
                جاري التحميل...
              </span>
            ) : tab === "login" ? (
              "تسجيل الدخول 🚀"
            ) : (
              "إنشاء الحساب ✨"
            )}
          </button>
        </form>

        {/* Switch tab */}
        <div className="mt-4 text-center">
          <p className="text-gray-500 text-xs">
            {tab === "login" ? "ليس لديك حساب؟" : "لديك حساب بالفعل؟"}{" "}
            <button
              className="text-purple-light hover:underline font-semibold"
              onClick={() => setTab(tab === "login" ? "register" : "login")}
            >
              {tab === "login" ? "أنشئ حسابًا" : "سجّل دخول"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
