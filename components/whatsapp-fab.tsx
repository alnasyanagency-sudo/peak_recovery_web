"use client"

import Link from 'next/link'

export function WhatsAppFab() {
  return (
    <Link
      href="https://wa.me/966555160703?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D8%A8%D8%AD%D8%AC%D8%B2%20%D9%85%D9%88%D8%B9%D8%AF"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-7 left-7 z-[999] w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white text-2xl shadow-lg shadow-[#25D366]/40 hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/50 transition-all duration-400 animate-pulse-glow"
      aria-label="تواصل معنا عبر واتساب"
    >
      <i className="fa-brands fa-whatsapp"></i>
    </Link>
  )
}
