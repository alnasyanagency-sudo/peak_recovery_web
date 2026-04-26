"use client"

const locationInfo = [
  {
    icon: "fa-location-dot",
    title: "العنوان",
    description: "شارع الملك خالد بن عبد العزيز، حي الإسكان، بريدة 52387",
    color: "bg-[var(--green)]"
  },
  {
    icon: "fa-clock",
    title: "أوقات العمل",
    description: "9 ص – 12 ظ (صباحًا)\n4 م – 11 م (مساءً)\nالجمعة: 4 م – 9 م",
    color: "bg-[var(--red)]"
  },
  {
    icon: "fa-car",
    title: "مواقف السيارات",
    description: "مواقف مجانية متوفرة أمام المبنى مباشرة",
    color: "bg-[var(--gold)]"
  }
]

export function MapSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#FAFAF7]">

      {/* ✅ FIX: padding 16 mobile / 60 desktop */}
      <div className="container mx-auto px-[16px] lg:px-[60px] grid lg:grid-cols-2 gap-10 items-stretch">

        {/* Info */}
        <div className="flex flex-col gap-5 justify-center">
          {locationInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 flex items-start gap-5 hover:shadow-lg hover:translate-x-1.5 transition-all duration-400"
            >
              <div className={`w-12 h-12 ${info.color} rounded-xl flex items-center justify-center text-white text-lg flex-shrink-0`}>
                <i className={`fa-solid ${info.icon}`}></i>
              </div>

              <div>
                <div className="font-bold text-gray-900 mb-1">{info.title}</div>
                <div className="text-sm text-gray-500 leading-relaxed whitespace-pre-line">
                  {info.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Map */}
        <div className="rounded-2xl overflow-hidden shadow-lg min-h-[420px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.4576896825684!2d46.675!3d24.714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzUwLjQiTiA0NsKwNDAnMzAuMCJF!5e0!3m2!1sar!2ssa!4v1703000000000!5m2!1sar!2ssa"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: '420px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="موقع مركز التعافي"
          ></iframe>
        </div>

      </div>
    </section>
  )
}