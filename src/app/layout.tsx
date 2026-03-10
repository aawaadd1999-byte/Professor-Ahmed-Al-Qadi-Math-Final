import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "أستاذ أحمد القاضي - خبير الرياضيات",
  description:
    "منصة تعليمية متخصصة في الرياضيات للمرحلة الثانوية مع أستاذ أحمد القاضي",
  keywords: ["رياضيات", "تعليم", "جبر", "تفاضل", "ثانوية"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900&family=Tajawal:wght@300;400;500;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-arabic antialiased">{children}</body>
    </html>
  );
}
