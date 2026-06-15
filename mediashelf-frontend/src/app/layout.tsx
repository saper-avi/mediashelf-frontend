import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar/NavBar";
import Image from "next/image";

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
        <div className="relative w-full h-96">
          <Image src="/Dune.jpg" alt="Dune" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute top-0 left-0 right-0">
            <NavBar />
          </div>
        </div>
        
        {children}
      </body>
    </html>
  );
}

