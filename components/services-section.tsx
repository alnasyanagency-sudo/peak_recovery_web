"use client"

import { useEffect, useRef } from 'react'

const testimonials = [
  {
    text: "من زمان أعاني من الإبهر، وجرّبت أشياء كثيرة بدون فايدة. بعد جلستين في التعافي والله حسّيت بفرق كبير. ناس محترفين والمكان نظيف ومرتّب.",
    name: "محمد العتيبي",
    location: "الرياض",
    initials: "م ع",
    color: "bg-[var(--green)]"
  },
  {
    text: "كنت خايفة من الحجامة بصراحة، بس الأخصائية طمّنتني وشرحت لي كل شي. الجلسة كانت مريحة جداً والمكان نظيف. أنصح كل أحد يجرّب عندهم.",
    name: "نورة القحطاني",
    location: "جدة",
    initials: "ن ق",
    color: "bg-[var(--red)]"
  },
  {
    text: "القولون كان يتعبني بشكل يومي. من أحسن القرارات إني رحت عندهم. تحسّنت بشكل كبير ولله الحمد بعد ثلاث جلسات فقط.",
    name: "فهد الشمري",
    location: "الدمام",
    initials: "ف ش",
    color: "bg-[var(--gold)]"
  },
  {
    text: "أعاني من الشقيقة سنوات، والحجامة عندهم خفّفت عليّ بشكل ما توقّعته. الأخصائي شرح لي كل شي وكان حريص على راحتي. تجربة ممتازة.",
    name: "خالد الدوسري",
    location: "بريدة",
    initials: "خ د",
    color: "bg-[var(--green-dark)]"
  },
  {
    text: "رحت للقسم النسائي وكانت التجربة أكثر من رائعة. المكان نظيف والأخصائية شاطرة. حسّيت بتحسّن كبير بعد جلسة الجيوب الأنفية.",
    name: "ريم المالكي",
    location: "مكة المكرمة",
    initials: "ر م",
    color: "bg-[var(--red-dark)]"
  },
  {
    text: "صديقي نصحني أروح لمركز التعافي لعلاج عرق النساء، وفعلاً من أول جلسة بديت أحسّ بتحسّن. المركز هذا من الأفضل.",
    name: "عبدالله الحربي",
    location: "المدينة المنورة",
    initials: "ع ح",
    color: "bg-gray-700"
  },
  {
    text: "تجربتي مع التعافي كانت رائعة جداً. الموظفين محترمين ومتعاونين، والنتائج كانت أفضل من توقعاتي. أنصح الجميع بزيارتهم.",
    name: "سارة الزهراني",
    location: "الطائف",
    initials: "س ز",
    color: "bg-[var(--green)]"
  },
  {
    text: "أول مرة أجرّب الحجامة وكانت التجربة مريحة جداً. شكراً لفريق التعافي على الاحترافية والاهتمام بالتفاصيل.",
    name: "أحمد السبيعي",
    location: "الخبر",
    initials: "أ س",
    color: "bg-[var(--red)]"
  }
]

export function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const handleMouseEnter = () => {
      track.style.animationPlayState = 'paused'
    }
    const handleMouseLeave = () => {
      track.style.animationPlayState = 'running'
    }

    track.addEventListener('mouseenter', handleMouseEnter)
    track.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      track.removeEventListener('mouseenter', handleMouseEnter)
      track.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  // ❗ بدون تكرار
  const allTestimonials = testimonials

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-sm font-bold text-[var(--green)] px-4 py-2 rounded-full bg-[var(--green)]/10 border border-[var(--green)]/20 mb-5">
            <i className="fa-solid fa-quote-right text-xs"></i>
            آراء العملاء
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
            عملاؤنا يتكلمون
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            تجارب حقيقية من أشخاص جرّبوا خدماتنا ولمسوا الفرق بأنفسهم.
          </p>
        </div>
      </div>

      <div className="relative">
        <div 
          ref={trackRef}
          className="flex gap-6 animate-marquee"
          style={{ width: 'max-content' }}
        >
          {allTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-[380px] bg-gray-50 border border-gray-200 rounded-2xl p-8 flex-shrink-0 hover:shadow-lg hover:border-[var(--green)]/20 hover:-translate-y-1 transition-all duration-400"
            >
              <div className="flex gap-1 mb-4 text-amber-500 text-sm">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fa-solid fa-star"></i>
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">{testimonial.text}</p>

              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-full ${testimonial.color} flex items-center justify-center text-white font-bold text-sm`}>
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}