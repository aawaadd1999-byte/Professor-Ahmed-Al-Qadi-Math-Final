"use client";
import { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  BookOpen,
  Users,
  CreditCard,
  LogOut,
  Menu,
  X,
  ChevronLeft,
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "لوحة التحكم", href: "#dashboard" },
  { icon: BookOpen, label: "إدارة الكورسات", href: "#courses" },
  { icon: Users, label: "الطلاب", href: "#students" },
  { icon: CreditCard, label: "أكواد الشحن", href: "#codes" },
];

interface AdminSidebarProps {
  active: string;
  setActive: (s: string) => void;
}

export default function AdminSidebar({ active, setActive }: AdminSidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`${collapsed ? "w-16" : "w-64"} transition-all duration-300 flex-shrink-0 glass border-l border-purple-primary/20 flex flex-col min-h-screen`}
    >
      {/* Logo */}
      <div className="p-4 border-b border-purple-primary/20 flex items-center justify-between">
        {!collapsed && (
          <div className="flex items-center gap-2 overflow-hidden">
            <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-purple-primary">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80"
                alt="admin"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-right">
              <p className="text-white font-bold text-xs leading-none">أ. أحمد القاضي</p>
              <p className="text-purple-light text-[10px]">المشرف</p>
            </div>
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-gray-400 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-purple-primary/20"
        >
          {collapsed ? <Menu size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      {/* Nav items */}
      <nav className="flex-1 p-3 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.label;
          return (
            <button
              key={item.label}
              onClick={() => setActive(item.label)}
              className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-semibold transition-all group ${
                isActive
                  ? "bg-purple-gradient text-white shadow-glow"
                  : "text-gray-400 hover:text-white hover:bg-navy-700"
              }`}
            >
              <Icon size={18} className="flex-shrink-0" />
              {!collapsed && <span>{item.label}</span>}
            </button>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="p-3 border-t border-purple-primary/20">
        <Link
          href="/"
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-gray-400 hover:text-red-400 hover:bg-red-400/10 transition-all"
        >
          <LogOut size={18} className="flex-shrink-0" />
          {!collapsed && <span>الموقع الرئيسي</span>}
        </Link>
      </div>
    </aside>
  );
}
