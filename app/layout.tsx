import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Chanho Archive",
  description: "프로젝트와 개발 기록을 쌓아두는 게시글형 포트폴리오",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <div className="site-bg" />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
