"use client";
import { useState } from "react";
import { Copy, RefreshCw, Check } from "lucide-react";

// Generate a fake code
function generateCode(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const part = () => Array.from({ length: 4 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
  return `${part()}-${part()}-${part()}-${part()}`;
}

interface Code {
  id: number;
  code: string;
  value: number;
  status: "غير مستخدم" | "مستخدم";
  createdAt: string;
  usedBy?: string;
}

const initialCodes: Code[] = [
  { id: 1, code: "AQ25-MATH-K7P2-XZ9W", value: 100, status: "مستخدم", createdAt: "٢٠٢٥/٠١/١٥", usedBy: "محمد أحمد" },
  { id: 2, code: "AQ25-REVW-B3N8-QR4T", value: 200, status: "مستخدم", createdAt: "٢٠٢٥/٠١/١٦", usedBy: "سارة علي" },
  { id: 3, code: "AQ25-ALGE-M5V6-YS2P", value: 50, status: "غير مستخدم", createdAt: "٢٠٢٥/٠٢/٠١" },
  { id: 4, code: "AQ25-CALC-D9F3-WE7H", value: 300, status: "غير مستخدم", createdAt: "٢٠٢٥/٠٢/١٠" },
  { id: 5, code: "AQ25-STAT-J6L1-NP8K", value: 500, status: "غير مستخدم", createdAt: "٢٠٢٥/٠٣/٠١" },
];

export default function RechargeCodesPanel() {
  const [codes, setCodes] = useState<Code[]>(initialCodes);
  const [quantity, setQuantity] = useState(5);
  const [value, setValue] = useState(100);
  const [copied, setCopied] = useState<number | null>(null);
  const [generating, setGenerating] = useState(false);

  const handleGenerate = () => {
    setGenerating(true);
    setTimeout(() => {
      const now = new Date();
      const dateStr = now.toLocaleDateString("ar-EG");
      const newCodes: Code[] = Array.from({ length: quantity }, (_, i) => ({
        id: Date.now() + i,
        code: generateCode(),
        value,
        status: "غير مستخدم",
        createdAt: dateStr,
      }));
      setCodes((prev) => [...newCodes, ...prev]);
      setGenerating(false);
    }, 1200);
  };

  const copyCode = (id: number, code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="glass rounded-2xl overflow-hidden border border-purple-primary/20">
      {/* Header */}
      <div className="p-6 border-b border-purple-primary/20">
        <h2 className="text-xl font-black text-white mb-1">أكواد الشحن</h2>
        <p className="text-gray-400 text-sm">أنشئ وتابع أكواد شحن المحافظ</p>
      </div>

      {/* Generator Form */}
      <div className="p-6 border-b border-purple-primary/20 bg-navy-800/20">
        <h3 className="text-white font-bold mb-4">إنشاء أكواد جديدة</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-gray-400 text-xs mb-2 font-semibold">قيمة الكود (ج.م)</label>
            <select
              value={value}
              onChange={(e) => setValue(Number(e.target.value))}
              className="w-full bg-navy-800 border border-purple-primary/30 text-white rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-purple-light"
            >
              {[50, 100, 200, 300, 500, 1000].map((v) => (
                <option key={v} value={v}>{v} ج.م</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-gray-400 text-xs mb-2 font-semibold">عدد الأكواد</label>
            <input
              type="number"
              min={1}
              max={100}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-full bg-navy-800 border border-purple-primary/30 text-white rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-purple-light"
            />
          </div>
          <div className="flex items-end">
            <button
              onClick={handleGenerate}
              disabled={generating}
              className="w-full py-2.5 bg-purple-gradient text-white font-bold rounded-xl shadow-glow hover:scale-105 transition-all text-sm flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {generating ? (
                <>
                  <RefreshCw size={15} className="animate-spin" />
                  جاري الإنشاء...
                </>
              ) : (
                <>
                  <RefreshCw size={15} />
                  توليد الأكواد
                </>
              )}
            </button>
          </div>
        </div>
        <p className="text-gray-500 text-xs">
          سيتم توليد {quantity} كود بقيمة {value} ج.م لكل كود — الإجمالي: {quantity * value} ج.م
        </p>
      </div>

      {/* Codes table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-purple-primary/10 text-gray-400 text-xs">
              <th className="text-right py-3 px-6 font-semibold">#</th>
              <th className="text-right py-3 px-4 font-semibold">الكود</th>
              <th className="text-right py-3 px-4 font-semibold">القيمة</th>
              <th className="text-right py-3 px-4 font-semibold">تاريخ الإنشاء</th>
              <th className="text-right py-3 px-4 font-semibold">الحالة</th>
              <th className="text-right py-3 px-4 font-semibold">المستخدم من</th>
              <th className="text-right py-3 px-4 font-semibold">نسخ</th>
            </tr>
          </thead>
          <tbody>
            {codes.map((c, i) => (
              <tr key={c.id} className="border-b border-navy-700/50 hover:bg-navy-700/30 transition-colors">
                <td className="py-3 px-6 text-gray-500 font-mono text-xs">{i + 1}</td>
                <td className="py-3 px-4">
                  <code className="text-purple-light font-mono text-xs bg-navy-800 px-2 py-1 rounded-lg">
                    {c.code}
                  </code>
                </td>
                <td className="py-3 px-4 text-white font-bold">{c.value} ج.م</td>
                <td className="py-3 px-4 text-gray-400 text-xs">{c.createdAt}</td>
                <td className="py-3 px-4">
                  <span
                    className={`text-xs font-bold px-2 py-1 rounded-full ${
                      c.status === "غير مستخدم"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-gray-500/20 text-gray-400"
                    }`}
                  >
                    {c.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-gray-400 text-xs">{c.usedBy || "—"}</td>
                <td className="py-3 px-4">
                  <button
                    onClick={() => copyCode(c.id, c.code)}
                    disabled={c.status === "مستخدم"}
                    className="p-1.5 rounded-lg hover:bg-purple-primary/20 text-gray-400 hover:text-purple-light transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    title="نسخ الكود"
                  >
                    {copied === c.id ? (
                      <Check size={15} className="text-green-400" />
                    ) : (
                      <Copy size={15} />
                    )}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary */}
      <div className="p-4 border-t border-purple-primary/20 flex gap-6 text-xs text-gray-400">
        <span>الإجمالي: <strong className="text-white">{codes.length}</strong> كود</span>
        <span>غير مستخدم: <strong className="text-green-400">{codes.filter(c => c.status === "غير مستخدم").length}</strong></span>
        <span>مستخدم: <strong className="text-gray-500">{codes.filter(c => c.status === "مستخدم").length}</strong></span>
      </div>
    </div>
  );
}
