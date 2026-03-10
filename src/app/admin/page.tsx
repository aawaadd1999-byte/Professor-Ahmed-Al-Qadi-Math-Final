"use client";
import { useState } from "react";
import AdminSidebar from "@/components/admin/AdminSidebar";
import StatsCards from "@/components/admin/StatsCards";
import CoursesTable from "@/components/admin/CoursesTable";
import RechargeCodesPanel from "@/components/admin/RechargeCodesPanel";
import StudentsTable from "@/components/admin/StudentsTable";
import { Bell, Settings } from "lucide-react";

export default function AdminPage() {
  const [active, setActive] = useState("لوحة التحكم");

  const renderContent = () => {
    switch (active) {
      case "إدارة الكورسات":
        return <CoursesTable />;
      case "الطلاب":
        return <StudentsTable />;
      case "أكواد الشحن":
        return <RechargeCodesPanel />;
      default:
        return (
          <div className="space-y-8">
            <StatsCards />
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <CoursesTable />
              <RechargeCodesPanel />
            </div>
            <StudentsTable />
          </div>
        );
    }
  };

  return (
    <div className="flex min-h-screen bg-navy-950 text-white font-arabic">
      {/* Sidebar */}
      <AdminSidebar active={active} setActive={setActive} />

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="flex items-center justify-between px-6 py-4 glass border-b border-purple-primary/20">
          <div>
            <h1 className="text-xl font-black text-white">
              {active === "لوحة التحكم" ? "لوحة تحكم المشرف 🎛️" : active}
            </h1>
            <p className="text-gray-400 text-xs">
              أهلاً بك، أستاذ أحمد · {new Date().toLocaleDateString("ar-EG", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>
          <div className="flex items-center gap-3">
            {/* Notifications */}
            <button className="relative p-2 rounded-xl glass-light hover:bg-purple-primary/20 transition-colors">
              <Bell size={18} className="text-gray-400" />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-pink-accent badge-pulse" />
            </button>
            {/* Settings */}
            <button className="p-2 rounded-xl glass-light hover:bg-purple-primary/20 transition-colors">
              <Settings size={18} className="text-gray-400" />
            </button>
            {/* Admin avatar */}
            <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-purple-primary shadow-glow">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80"
                alt="admin"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-6">
            <span className="hover:text-purple-light cursor-pointer" onClick={() => setActive("لوحة التحكم")}>
              الرئيسية
            </span>
            {active !== "لوحة التحكم" && (
              <>
                <span className="text-gray-700">/</span>
                <span className="text-purple-light">{active}</span>
              </>
            )}
          </div>

          {renderContent()}
        </main>
      </div>
    </div>
  );
}
