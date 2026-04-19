"use client"

import Image from 'next/image'

const IMAGES = {
  reception: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-19%20at%209.26.13%20AM-UcyBZNN7IwdHNQmjYEjriIpBhH2tME.jpeg",
  hallway: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-19%20at%209.26.16%20AM%20%281%29-yqzpYWI4sqDb8Y83m8y72ysJrHNYAQ.jpeg",
  office: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-19%20at%209.26.16%20AM-cuPyGIJjg0pcVUbx0ZIGEEdeBZF0ax.jpeg"
}

const features = [
  { icon: "fa-user-doctor", text: "فريق متخصص ومدرّب" },
  { icon: "fa-pump-medical", text: "أدوات استخدام واحد" },
  { icon: "fa-lock", text: "خصوصية تامة" },
  { icon: "fa-award", text: "نتائج ملموسة بإذن الله" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Gallery */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4 relative order-2 lg:order-1">
          <div className="row-span-2 rounded-2xl overflow-hidden shadow-lg group">
            <div className="relative h-full min-h-[400px]">
              <Image 
                src={IMAGES.reception} 
                alt="الاستقبال" 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-105" 
              />
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg group">
            <div className="relative h-48">
              <Image 
                src={IMAGES.hallway} 
                alt="الممرات" 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-105" 
              />
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg group">
            <div className="relative h-48">
              <Image 
                src={IMAGES.office} 
                alt="المكتب" 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-105" 
              />
            </div>
          </div>
          
          {/* Badge */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[var(--red)] text-white rounded-2xl px-7 py-4 text-center shadow-xl z-10">
            <div className="text-3xl font-black leading-none">+١٠</div>
            <div className="text-sm font-semibold opacity-90 mt-1">سنوات خبرة</div>
          </div>
        </div>

        {/* Content */}
        <div className="order-1 lg:order-2">
          <div className="inline-flex items-center gap-2 text-sm font-bold text-[var(--green)] px-4 py-2 rounded-full bg-[var(--green)]/10 border border-[var(--green)]/20 mb-5">
            <i className="fa-solid fa-heart text-xs"></i>
            من نحن
          </div>

          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4 leading-tight">
            مركز قمة التعافي للحجامة
          </h2>

          <p className="text-gray-500 leading-relaxed mb-8">
            في مركز قمة التعافي، نؤمن إن الحجامة مو بس علاج — هي أسلوب حياة صحّي مبني على السنّة النبوية الشريفة. فريقنا يجمع بين الخبرة الطويلة والاهتمام بأدق التفاصيل، من التعقيم الكامل إلى توفير بيئة مريحة تحسّ فيها بالخصوصية والأمان. عندنا أقسام منفصلة للرجال والنساء، وكل جلسة مصمّمة بعناية لأن صحّتك تستاهل الأفضل.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-transparent hover:bg-white hover:border-[var(--green)]/20 hover:shadow-sm hover:translate-x-1 transition-all duration-400"
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--green)]/10 flex items-center justify-center text-[var(--green)] flex-shrink-0">
                  <i className={`fa-solid ${feature.icon}`}></i>
                </div>
                <span className="text-sm font-semibold text-gray-700">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
