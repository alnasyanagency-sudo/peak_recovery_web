"use client"

import Image from 'next/image'
import Link from 'next/link'

const IMAGES = {
  building: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-19%20at%209.26.10%20AM-9svQTzTHROahWRhZZ1S3GxV4vJJepD.jpeg",
  reception: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-19%20at%209.26.11%20AM-cOFOhgRCU7p1fUjEYEw9jHIEG87xCI.jpeg"
}

export function HeroSection() {
  return (
    <section id="hero" className="min-h-screen relative flex items-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={IMAGES.building}
          alt="مركز التعافي"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(15,48,21,0.92)] via-[rgba(30,84,39,0.85)] via-35% via-[rgba(45,115,57,0.75)] via-60% to-[rgba(26,26,46,0.88)] z-[1]" />

      {/* Grain */}
      <div className="absolute inset-0 z-[2] opacity-[0.03]" />

      {/* Shapes */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[var(--red)]/10 -top-[150px] -right-[150px] blur-[100px] animate-float z-[1]"></div>
      <div className="absolute w-[350px] h-[350px] rounded-full bg-[var(--gold)]/10 -bottom-[80px] -left-[80px] blur-[100px] animate-float-delayed z-[1]"></div>

      {/* CONTENT */}
      <div className="
        container mx-auto 
        px-[16px] lg:px-[60px] 
        relative z-[3] 
        grid lg:grid-cols-[1.1fr_0.9fr] 
        gap-10 lg:gap-16 
        items-center 
        pt-32 pb-10
      ">

        {/* Text */}
        <div className="text-center lg:text-right">

          <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-xl border border-white/15 text-white/90 text-sm font-semibold px-5 py-2.5 rounded-full mb-7">
            <div className="w-2 h-2 rounded-full bg-[var(--red)] animate-pulse-glow"></div>
            مركز معتمد ومتخصص في الحجامة العلاجية
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            راحة جسدك
            <br />
            تبدأ <span className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] bg-clip-text text-transparent">من هنا</span>
          </h1>

          <p className="text-lg text-white/65 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
            نقدّم لك تجربة حجامة احترافية في بيئة طبية مريحة ومعقّمة، على يد كوادر متخصصة بخبرة تتجاوز 10 سنوات.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

            <Link href="#booking"
              className="inline-flex items-center justify-center gap-2.5 bg-[var(--green)] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:-translate-y-1 transition-all"
            >
              <i className="fa-solid fa-calendar-check"></i>
              احجز موعدك الآن
            </Link>

            <Link href="#services"
              className="inline-flex items-center justify-center gap-2.5 border-2 border-white/35 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all"
            >
              تصفّح خدماتنا
            </Link>

          </div>

        </div>

        {/* Image side (unchanged) */}
        <div className="relative hidden lg:block">
          <div className="rounded-3xl overflow-hidden shadow-2xl h-[520px] relative">
            <Image
              src={IMAGES.reception}
              alt="استقبال المركز"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  )
}