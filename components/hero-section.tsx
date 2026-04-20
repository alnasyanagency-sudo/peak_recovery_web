"use client"

import Image from 'next/image'
import Link from 'next/link'

const IMAGES = {
  building: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-19%20at%209.26.10%20AM-9svQTzTHROahWRhZZ1S3GxV4vJJepD.jpeg",
  reception: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-19%20at%209.26.11%20AM-cOFOhgRCU7p1fUjEYEw9jHIEG87xCI.jpeg"
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={IMAGES.building}
          alt="مركز التعافي"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Glow shapes */}
      <div className="absolute w-[500px] h-[500px] bg-[var(--green)]/20 blur-[120px] -top-40 -right-40"></div>
      <div className="absolute w-[400px] h-[400px] bg-[var(--gold)]/10 blur-[120px] -bottom-40 -left-40"></div>

      {/* CONTENT */}
      <div className="relative z-10 container mx-auto px-[16px] lg:px-[80px] grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div className="text-center lg:text-right">

          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white px-4 py-2 rounded-full text-sm mb-6">
            <span className="w-2 h-2 bg-[var(--green)] rounded-full animate-pulse"></span>
            مركز معتمد للحجامة العلاجية
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            راحة جسدك
            <br />
            تبدأ <span className="text-[var(--gold)]">من هنا</span>
          </h1>

          <p className="text-white/70 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
            نقدّم تجربة حجامة احترافية داخل بيئة طبية معقمة، بإشراف مختصين بخبرة أكثر من 10 سنوات لضمان راحتك وصحتك.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="#booking"
              className="bg-[var(--green)] hover:bg-[var(--green-light)] text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-lg"
            >
              احجز موعدك الآن
            </Link>

            <Link
              href="#services"
              className="border border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all"
            >
              تصفّح الخدمات
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 text-center lg:text-right">
            <div>
              <div className="text-3xl font-black text-white">+5000</div>
              <div className="text-white/50 text-sm">عميل</div>
            </div>

            <div>
              <div className="text-3xl font-black text-white">10+</div>
              <div className="text-white/50 text-sm">سنوات خبرة</div>
            </div>

            <div>
              <div className="text-3xl font-black text-white">98%</div>
              <div className="text-white/50 text-sm">رضا العملاء</div>
            </div>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative hidden lg:block">

          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <div className="relative h-[550px]">
              <Image
                src={IMAGES.reception}
                alt="الاستقبال"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

              {/* floating card */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-lg px-5 py-4 rounded-2xl shadow-lg">
                <div className="text-sm font-bold text-gray-900">تجربة آمنة 100%</div>
                <div className="text-xs text-gray-500">تعقيم كامل وأدوات جديدة</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}