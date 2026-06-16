import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar/NavBar";
import Image from "next/image";
import Logo from "../components/logo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MediaShelf",
  description: "Ваш личный медиасервер для фильмов и сериалов",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NavBar />
        <div className="relative w-full h-96">
          <div className="fixed bottom-20 left-0 w-96 h-96 bg-blue-400/45 rounded-full blur-2xl pointer-events-zone z-0"></div>
          <div className="fixed top-100 right-0 w-133 h-96 bg-blue-600/45 rounded-full blur-3xl pointer-events-zone z-0"></div>
          <Image src="/Banner.png" alt="Banner" fill className="relative w-full h-96 mb-8 object-cover" />
          <div className="absolute inset-0 bg-black/50"></div>
        
          
          <div className="absolute bottom-28 left-12 max-w-md text-white">
            <Logo />
            
            <p className="mt-4 text-sm text-gray-300">Твоя личная медиатека.
Находи фильмы через удобный поиск, сохраняй в свой список и отслеживай что посмотрел, а что ещё в планах. Ставь оценки, оставляй заметки и возвращайся к своей коллекции в любое время.
            </p>
          </div>
        </div>
        
        {children}
      </body>
    </html>
  );
}

