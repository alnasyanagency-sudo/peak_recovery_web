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
      
      {/* Background Image */}
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
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(15,48,21,0.92)] via-[rgba(30,84,39,0.85)] via-35% via-[rgba(45,115,57,0.75)] via-60% to-[rgba(26,26,46,0.88)] z-[1]"></div>

      {/* Grain */}
      <div className="absolute inset-0 z-[2] opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
      }}></div>

      {/* Decorative Shapes */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[var(--red)]/10 -top-[150px] -right-[150px] blur-[100px] animate-float z-[1]"></div>
      <div className="absolute w-[350px] h-[350px] rounded-full bg-[var(--gold)]/10 -bottom-[80px] -left-[80px] blur-[100px] animate-float-delayed z-[1]"></div>

      {/* CONTENT */}
      <div className="container mx-auto px-4 lg:px-60 relative z-[3] grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center pt-32 pb-10">

        {/* Content */}
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
            نقدّم لك تجربة حجامة احترافية في بيئة طبية مريحة ومعقّمة، على يد كوادر متخصصة بخبرة تتجاوز 10 سنوات. صحّتك أمانة عندنا.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link 
              href="#booking" 
              className="inline-flex items-center justify-center gap-2.5 bg-[var(--green)] text-white px-8 py-4 rounded-full font-bold text-base shadow-lg shadow-[var(--green)]/25 hover:-translate-y-1 hover:shadow-xl hover:shadow-[var(--green)]/35 hover:bg-[var(--green-light)] transition-all duration-400"
            >
              <i className="fa-solid fa-calendar-check"></i>
              <span>احجز موعدك الآن</span>
            </Link>

            <Link 
              href="#services" 
              className="inline-flex items-center justify-center gap-2.5 bg-transparent text-white px-8 py-4 rounded-full font-bold text-base border-2 border-white/35 hover:bg-white/10 hover:border-white/60 hover:-translate-y-0.5 transition-all duration-400"
            >
              <span>تصفّح خدماتنا</span>
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-8 lg:gap-12 mt-14 pt-8 border-t border-white/10">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-black text-white flex items-baseline justify-center gap-0.5">
                <span className="text-[var(--gold)] text-2xl">+</span>5000
              </div>
              <div className="text-sm text-white/40 mt-2 font-medium">عميل استفاد</div>
            </div>

            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-black text-white flex items-baseline justify-center gap-0.5">
                <span className="text-[var(--gold)] text-2xl">+</span>10
              </div>
              <div className="text-sm text-white/40 mt-2 font-medium">سنوات خبرة</div>
            </div>

            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-black text-white flex items-baseline justify-center gap-0.5">
                98<span className="text-[var(--red)] text-xl">%</span>
              </div>
              <div className="text-sm text-white/40 mt-2 font-medium">نسبة رضا العملاء</div>
            </div>
          </div>
        </div>

        {/* Visual (unchanged) */}
        <div className="relative hidden lg:block">
          <div className="absolute -top-4 -left-8 bg-white/95 backdrop-blur-lg rounded-2xl px-5 py-3.5 flex items-center gap-3 shadow-xl animate-float z-10">
            <div className="w-10 h-10 rounded-xl bg-[var(--green)] flex items-center justify-center text-white">
              <i className="fa-solid fa-shield-halved"></i>
            </div>
            <div>
              <div className="text-sm font-bold text-gray-900">أدوات معقّمة 100%</div>
              <div className="text-xs text-gray-500">استخدام واحد فقط</div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <div className="relative h-[520px]">
              <Image
                src={IMAGES.reception}
                alt="استقبال المركز"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(30,84,39,0.5)] to-transparent flex items-end p-8">
                <div className="bg-white/95 backdrop-blur-lg rounded-2xl px-5 py-4 flex items-center gap-4 shadow-lg">
                  <div className="w-11 h-11 rounded-xl bg-[var(--green)] flex items-center justify-center text-white">
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">تقييم ممتاز</div>
                    <div className="text-xs text-gray-500">أكثر من 5000 عميل راضي</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-20 -right-10 bg-white/95 backdrop-blur-lg rounded-2xl px-5 py-3.5 flex items-center gap-3 shadow-xl animate-float-delayed z-10">
            <div className="w-10 h-10 rounded-xl bg-[var(--red)] flex items-center justify-center text-white">
              <i className="fa-solid fa-award"></i>
            </div>
            <div>
              <div className="text-sm font-bold text-gray-900">مركز معتمد</div>
              <div className="text-xs text-gray-500">رجالي ونسائي</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}