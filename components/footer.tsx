"use client"

import Image from 'next/image'
import Link from 'next/link'

const LOGO_URL = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bcQiWVH5VgYPX9e7ZCsKuCAZXFb6jb.png"

const quickLinks = [
  { href: "#hero", label: "الرئيسية" },
  { href: "#about", label: "من نحن" },
  { href: "#services", label: "خدماتنا" },
  { href: "#gallery", label: "معرض الصور" },
  { href: "#testimonials", label: "آراء العملاء" },
  { href: "#booking", label: "احجز موعدك" },
]

const servicesLinks = [
  "معالجة الإبهر",
  "معالجة عرق النساء",
  "معالجة القولون",
  "معالجة الشقيقة",
  "معالجة الجيوب الأنفية",
  "علاج الخلعة",
]

const socialLinks = [
  { icon: "fa-instagram", href: "#" },
  { icon: "fa-twitter", href: "#" },
  { icon: "fa-snapchat", href: "#" },
  { icon: "fa-tiktok", href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0b1a10] via-[#142d1a] to-[#0f2016] text-white/60 pt-20 relative overflow-hidden">
      {/* Top Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--green)] to-transparent"></div>

      <div className="container mx-auto px-4 lg:px-60">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-14 pb-12 border-b border-white/10">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image src={LOGO_URL} alt="مركز قمة التعافي" width={50} height={50} />
              <span className="text-lg font-extrabold text-white">مركز قمة التعافي</span>
            </div>
            <p className="text-sm leading-relaxed text-white/40 mb-6">
              مركز متخصص في الحجامة العلاجية بأعلى معايير الجودة والتعقيم. أقسام رجالية ونسائية منفصلة مع فريق متخصص .
            </p>
            <div className="flex gap-2.5">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:bg-[var(--green)] hover:border-[var(--green)] hover:text-white hover:-translate-y-1 transition-all duration-400"
                >
                  <i className={`fa-brands ${social.icon}`}></i>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-bold text-white mb-5">روابط سريعة</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-sm font-medium text-white/40 hover:text-white hover:pr-1 transition-all duration-300 flex items-center gap-2"
                  >
                    <i className="fa-solid fa-chevron-left text-[10px]"></i>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base font-bold text-white mb-5">خدماتنا</h4>
            <ul className="space-y-3">
              {servicesLinks.map((service, index) => (
                <li key={index}>
                  <Link 
                    href="#services"
                    className="text-sm font-medium text-white/40 hover:text-white hover:pr-1 transition-all duration-300 flex items-center gap-2"
                  >
                    <i className="fa-solid fa-chevron-left text-[10px]"></i>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base font-bold text-white mb-5">تواصل معنا</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-location-dot text-[var(--green)] mt-1"></i>
                <span className="text-sm text-white/40">شارع الملك خالد بن عبد العزيز، حي الإسكان، بريدة 52387</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-phone text-[var(--green)]"></i>
                <span className="text-sm text-white/40" dir="ltr">+966 555160703</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-clock text-[var(--green)]"></i>
                <span className="text-sm text-white/40">9 ص – 12 ظ (صباحًا) | 4 م – 11 م (مساءً) | الجمعة: 4 م – 9 م</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="py-6 text-center text-sm text-white/25 font-medium">
          جميع الحقوق محفوظة © {new Date().getFullYear()} مركز قمة التعافي للحجامة
        </div>
      </div>
    </footer>
  )
}