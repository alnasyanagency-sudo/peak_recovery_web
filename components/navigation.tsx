"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const LOGO_URL = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bcQiWVH5VgYPX9e7ZCsKuCAZXFb6jb.png"

const navLinks = [
  { href: "#hero", label: "الرئيسية" },
  { href: "#about", label: "من نحن" },
  { href: "#services", label: "خدماتنا" },
  { href: "#gallery", label: "معرض الصور" },
  // { href: "#testimonials", label: "آراء العملاء" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[var(--green-dark)] text-white py-2 fixed top-0 left-0 right-0 z-[1001]">

        {/* ✅ FIX: padding 16 mobile / 60 desktop */}
        <div className="container mx-auto px-[16px] lg:px-[60px] flex items-center justify-between text-sm">

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <i className="fa-solid fa-phone text-[var(--gold)]"></i>
              <span dir="ltr">+966 555 160 703</span>
            </span>

            <span className="hidden md:flex items-center gap-2">
              <i className="fa-solid fa-clock text-[var(--gold)]"></i>
              <span>9 ص – 12 ظ (صباحًا) | 4 م – 11 م (مساءً) | الجمعة: 4 م – 9 م</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden sm:block font-bold text-[var(--gold)]">التعافي للحجامة</span>
            <i className="fa-solid fa-leaf text-[var(--gold)]"></i>
          </div>

        </div>
      </div>

      {/* Main Nav */}
      <nav className={cn(
        "fixed top-8 left-0 right-0 z-[1000] py-4 transition-all duration-500",
        isScrolled ? "bg-white/95 backdrop-blur-xl shadow-lg py-3" : "bg-transparent"
      )}>

        <div className="container mx-auto px-[16px] lg:px-[60px] flex items-center justify-between">

          {/* Logo */}
          <Link href="#hero" className="flex items-center gap-3">
            <Image
              src={LOGO_URL}
              alt="مركز قمة التعافي للحجامة"
              width={50}
              height={50}
              className={cn(
                "transition-all duration-400",
                isScrolled ? "h-11 w-auto" : "h-12 w-auto"
              )}
            />
            <span className={cn(
              "text-base font-extrabold transition-colors duration-400 whitespace-nowrap",
              isScrolled ? "text-[var(--green-dark)]" : "text-white"
            )}>
              التعافي للحجامة
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300",
                    isScrolled
                      ? "text-gray-600 hover:bg-[var(--green)]/10 hover:text-[var(--green)]"
                      : "text-white/85 hover:bg-white/10 hover:text-white"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            <li>
              <Link
                href="#booking"
                className="bg-[var(--red)] text-white px-5 py-2.5 rounded-full text-sm font-bold mr-2 hover:bg-[var(--red-dark)] hover:-translate-y-0.5 hover:shadow-lg transition-all"
              >
                احجز موعدك
              </Link>
            </li>
          </ul>

          {/* Mobile Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={cn(
              "lg:hidden p-2 text-xl",
              isScrolled ? "text-[var(--green)]" : "text-white"
            )}
          >
            <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>

        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl rounded-b-2xl overflow-hidden transition-all duration-300",
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}>
          <ul className="py-4 px-4 space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg text-gray-700 font-semibold hover:bg-[var(--green)]/10 hover:text-[var(--green)] transition-all"
                >
                  {link.label}
                </Link>
              </li>
            ))}

            <li className="pt-2">
              <Link
                href="#booking"
                onClick={() => setIsMenuOpen(false)}
                className="block text-center bg-[var(--red)] text-white px-5 py-3 rounded-full font-bold"
              >
                احجز موعدك
              </Link>
            </li>
          </ul>
        </div>

      </nav>
    </>
  )
}