"use client";
import { useState } from "react";
import { X, Wallet, CheckCircle } from "lucide-react";

interface WalletModalProps {
  onClose: () => void;
}

export default function WalletModal({ onClose }: WalletModalProps) {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [balance] = useState(250);

  const handleRecharge = (e: React.FormEvent) => {
    e.preventDefault();
    if (!code.trim()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1800);
  };

  return (
    /* Overlay — px-4 keeps card away from screen edges on mobile */
    <div className="modal-overlay px-4" onClick={onClose}>
      {/* Card: scrollable when content is taller than viewport */}
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

        {success ? (
          /* ── Success state ─────────────────────────────── */
          <div className="text-center py-6">
            <CheckCircle className="text-green-400 mx-auto mb-4" size={56} />
            <h2 className="text-xl sm:text-2xl font-black text-white mb-2">تم الشحن بنجاح! 🎉</h2>
            <p className="text-gray-400 mb-5 text-sm">تمت إضافة الرصيد إلى محفظتك بنجاح</p>
            <div className="glass rounded-2xl p-4 mb-5">
              <p className="text-gray-400 text-sm mb-1">رصيد المحفظة الحالي</p>
              <p className="text-4xl font-black gradient-text">{balance + 100} ج.م</p>
            </div>
            <button
              onClick={onClose}
              className="px-8 py-3 bg-purple-gradient text-white font-bold rounded-full shadow-glow hover:scale-105 transition-all"
            >
              رائع! ✨
            </button>
          </div>
        ) : (
          <>
            {/* ── Header ──────────────────────────────────── */}
            <div className="text-center mb-5">
              <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-purple-gradient flex items-center justify-center shadow-glow">
                <Wallet size={26} className="text-white" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white">شحن المحفظة 💳</h2>
              <p className="text-gray-400 text-sm">أدخل كود بطاقة الشحن للإضافة</p>
            </div>

            {/* Current Balance */}
            <div className="glass-light rounded-2xl p-4 mb-5 text-center">
              <p className="text-gray-400 text-sm mb-1">رصيدك الحالي</p>
              <p className="text-3xl font-black gradient-text">{balance} ج.م</p>
            </div>

            {/* Recharge amounts — 3 cols on mobile, 6 on sm+ */}
            <p className="text-gray-300 text-sm font-semibold mb-2">القيم المتاحة:</p>
            <div className="grid grid-cols-3 sm:grid-cols-3 gap-2 mb-5">
              {["٥٠ ج.م", "١٠٠ ج.م", "٢٠٠ ج.م", "٣٠٠ ج.م", "٥٠٠ ج.م", "١٠٠٠ ج.م"].map((v) => (
                <button
                  key={v}
                  className="py-2 text-xs font-bold rounded-xl glass-light border border-purple-primary/30 text-gray-300 hover:bg-purple-primary/20 hover:text-white transition-all"
                >
                  {v}
                </button>
              ))}
            </div>

            {/* Code form */}
            <form onSubmit={handleRecharge} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-300 mb-1.5 font-semibold">
                  كود بطاقة الشحن
                </label>
                <input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="XXXX-XXXX-XXXX-XXXX"
                  className="w-full bg-navy-800/80 border border-purple-primary/30 text-white placeholder-gray-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-light focus:shadow-glow transition-all tracking-widest text-center"
                  maxLength={19}
                />
              </div>

              <button
                type="submit"
                disabled={loading || !code.trim()}
                className="w-full py-3 bg-purple-gradient text-white font-bold rounded-xl shadow-glow hover:shadow-glow-pink transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    جاري التحقق...
                  </span>
                ) : "شحن الآن 🚀"}
              </button>
            </form>

            <p className="text-center text-gray-500 text-xs mt-3">
              يمكنك الحصول على بطاقات الشحن من الموزعين المعتمدين
            </p>
          </>
        )}
      </div>
    </div>
  );
}
