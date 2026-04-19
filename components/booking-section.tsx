"use client"

import { useState } from 'react'

const contactInfo = [
  {
    icon: "fa-phone",
    label: "اتصل بنا",
    value: "+966 555 160 703",
    href: "tel:+966555160703",
    color: "bg-[var(--green)]"
  },
  {
    icon: "fa-brands fa-whatsapp",
    label: "واتساب",
    value: "+966 555 160 703",
    href: "https://wa.me/966555160703?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D8%A8%D8%AD%D8%AC%D8%B2%20%D9%85%D9%88%D8%B9%D8%AF",
    color: "bg-[#25D366]"
  },
  {
    icon: "fa-clock",
    label: "ساعات العمل",
    value: "السبت - الخميس: ٤م - ١٢ص",
    href: "",
    color: "bg-[var(--red)]"
  }
]

const services = [
  "حجامة وقائية",
  "معالجة الإبهر",
  "معالجة عرق النساء",
  "معالجة القولون",
  "معالجة الجيوب الأنفية",
  "معالجة الشقيقة",
  "علاج الخلعة"
]

export function BookingSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    section: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    const whatsappMessage = `مرحباً، أود حجز موعد\n\nالاسم: ${formData.name}\nالجوال: ${formData.phone}\nالخدمة: ${formData.service}\nالقسم: ${formData.section}\nالتاريخ: ${formData.date}`
    window.open(`https://wa.me/966555160703?text=${encodeURIComponent(whatsappMessage)}`, '_blank')
  }

  return (
    <section id="booking" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Info */}
        <div>
          <div className="inline-flex items-center gap-2 text-sm font-bold text-[var(--green)] px-4 py-2 rounded-full bg-[var(--green)]/10 border border-[var(--green)]/20 mb-5">
            <i className="fa-solid fa-calendar-check text-xs"></i>
            احجز موعدك
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
            خطوتك الأولى نحو التعافي
          </h2>
          <p className="text-gray-500 leading-relaxed mb-8">
            عبّي النموذج وبنتواصل معك في أقرب وقت لتأكيد موعدك. أو تقدر تتواصل معنا مباشرة:
          </p>

          <div className="space-y-4">
            {contactInfo.map((info, index) => {
              const content = (
                <>
                  <div className={`w-11 h-11 ${info.color} rounded-xl flex items-center justify-center text-white flex-shrink-0`}>
                    <i className={`${info.icon.startsWith('fa-brands') ? info.icon : `fa-solid ${info.icon}`}`}></i>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium">{info.label}</div>
                    <div className="text-sm font-semibold text-gray-700" dir="ltr">{info.value}</div>
                  </div>
                </>
              )
              
              return info.href ? (
                <a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-transparent hover:bg-white hover:border-gray-200 hover:shadow-sm transition-all duration-400 cursor-pointer"
                >
                  {content}
                </a>
              ) : (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-transparent"
                >
                  {content}
                </div>
              )
            })}
          </div>
        </div>

        {/* Form */}
        <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 lg:p-10 relative overflow-hidden">
          {/* Gradient Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--green)] via-[var(--gold)] to-[var(--red)]"></div>

          <h3 className="text-xl font-extrabold text-gray-900 mb-7">احجز موعدك الآن</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">الاسم الكامل</label>
                <input
                  type="text"
                  required
                  placeholder="أدخل اسمك"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl bg-white text-gray-900 font-medium placeholder:text-gray-300 focus:border-[var(--green)] focus:ring-4 focus:ring-[var(--green)]/10 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">رقم الجوال</label>
                <input
                  type="tel"
                  required
                  placeholder="05XXXXXXXX"
                  dir="ltr"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl bg-white text-gray-900 font-medium placeholder:text-gray-300 focus:border-[var(--green)] focus:ring-4 focus:ring-[var(--green)]/10 outline-none transition-all text-right"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">الخدمة المطلوبة</label>
                <select
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl bg-white text-gray-900 font-medium focus:border-[var(--green)] focus:ring-4 focus:ring-[var(--green)]/10 outline-none transition-all appearance-none cursor-pointer"
                >
                  <option value="">اختر الخدمة</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">القسم</label>
                <select
                  required
                  value={formData.section}
                  onChange={(e) => setFormData({ ...formData, section: e.target.value })}
                  className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl bg-white text-gray-900 font-medium focus:border-[var(--green)] focus:ring-4 focus:ring-[var(--green)]/10 outline-none transition-all appearance-none cursor-pointer"
                >
                  <option value="">اختر القسم</option>
                  <option value="رجالي">رجالي</option>
                  <option value="نسائي">نسائي</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">التاريخ المفضل</label>
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl bg-white text-gray-900 font-medium focus:border-[var(--green)] focus:ring-4 focus:ring-[var(--green)]/10 outline-none transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-6 bg-[var(--green)] text-white py-4 rounded-full font-bold text-lg shadow-lg shadow-[var(--green)]/25 hover:bg-[var(--green-light)] hover:-translate-y-1 hover:shadow-xl hover:shadow-[var(--green)]/35 transition-all duration-400 flex items-center justify-center gap-2"
            >
              <i className="fa-solid fa-calendar-check"></i>
              <span>تأكيد الحجز</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
