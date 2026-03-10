"use client";
import { useState } from "react";
import AuthModal from "./AuthModal";
import WalletModal from "./WalletModal";

export default function Navbar() {
  const [showAuth, setShowAuth] = useState(false);
  const [authTab, setAuthTab] = useState<"login" | "register">("login");
  const [showWallet, setShowWallet] = useState(false);

  const openLogin = () => { setAuthTab("login"); setShowAuth(true); };
  const openRegister = () => { setAuthTab("register"); setShowAuth(true); };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 glass border-b border-purple-primary/20">
        {/* Logo + Name */}
        <div className="flex items-center gap-3">
          <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-purple-primary shadow-glow">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80"
              alt="أستاذ أحمد القاضي"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-right leading-tight">
            <p className="text-white font-bold text-sm leading-none">أحمد</p>
            <p className="gradient-text font-black text-sm">القاضي</p>
            <p className="text-gray-400 text-[10px]">MATH EXPERT</p>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-300">
          <li><a href="#why-us" className="hover:text-purple-glow transition-colors">لماذا نحن؟</a></li>
          <li><a href="#courses" className="hover:text-purple-glow transition-colors">الباقات</a></li>
          <li><a href="#hall-of-fame" className="hover:text-purple-glow transition-colors">أوائل الجمهورية</a></li>
          <li>
            <button
              onClick={() => setShowWallet(true)}
              className="hover:text-gold transition-colors"
            >
              💳 شحن المحفظة
            </button>
          </li>
        </ul>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={openLogin}
            className="hidden sm:block px-5 py-2 text-sm font-bold rounded-full border border-purple-primary text-purple-light hover:bg-purple-primary/20 transition-all"
          >
            تسجيل دخول
          </button>
          <button
            onClick={openRegister}
            className="px-5 py-2 text-sm font-bold rounded-full bg-purple-gradient text-white shadow-glow hover:shadow-glow-pink transition-all hover:scale-105"
          >
            ➕ إنشاء حساب
          </button>
        </div>
      </nav>

      {/* Modals */}
      {showAuth && (
        <AuthModal
          initialTab={authTab}
          onClose={() => setShowAuth(false)}
        />
      )}
      {showWallet && <WalletModal onClose={() => setShowWallet(false)} />}
    </>
  );
}
