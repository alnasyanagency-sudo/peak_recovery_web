"use client"

const services = [
  {
    icon: "fa-bone",
    title: "معالجة الإبهر بالحجامة",
    description: "علاج فعّال لآلام الإبهر اللي تسبب ضيق بالصدر وصعوبة بالحركة. نستخدم تقنيات حجامة متخصصة تخفّف الألم وتحسّن الدورة الدموية."
  },
  {
    icon: "fa-person-walking",
    title: "معالجة عرق النساء بالحجامة",
    description: "الحجامة تساعد على تخفيف الضغط عن العصب الوركي وتقليل الالتهاب. كثير من عملاءنا حسّوا بتحسّن واضح من أول جلسة."
  },
  {
    icon: "fa-heart-pulse",
    title: "معالجة القولون بالحجامة",
    description: "الحجامة تساعد على تهدئة القولون العصبي وتخفيف الانتفاخ والتشنّجات، مع تحسّن ملحوظ في الهضم والراحة العامة."
  },
  {
    icon: "fa-head-side-mask",
    title: "معالجة الجيوب الأنفية",
    description: "الحجامة على نقاط محدّدة تساعد على تصريف الاحتقان وتخفيف أعراض التهاب الجيوب الأنفية بشكل طبيعي وآمن."
  },
  {
    icon: "fa-brain",
    title: "معالجة الشقيقة",
    description: "الحجامة تشتغل على تخفيف الضغط في الأوعية الدموية وتقليل حدّة نوبات الصداع النصفي وتكرارها بإذن الله."
  },
  {
    icon: "fa-spa",
    title: "علاج الخلعة (رجالي ونسائي)",
    description: "جلسات حجامة متخصصة للرجال والنساء تساعد على تهدئة الأعصاب واستعادة التوازن النفسي والجسدي من أثر الخلعة."
  }
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FAFAF7]">
      
      <div className="container mx-auto px-4 lg:px-60">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-sm font-bold text-[var(--green)] px-4 py-2 rounded-full bg-[var(--green)]/10 border border-[var(--green)]/20 mb-5">
            <i className="fa-solid fa-stethoscope text-xs"></i>
            خدماتنا
          </div>

          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
            علاجات متخصصة بالحجامة
          </h2>

          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            نقدّم مجموعة علاجات تستهدف مشاكل صحية محدّدة بأساليب مدروسة ونتائج ملموسة بإذن الله.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 border border-gray-200 hover:-translate-y-2.5 hover:shadow-xl hover:border-transparent transition-all duration-500 relative overflow-hidden"
            >
              
              {/* Top Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--green)] to-[var(--red)] scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left transition-transform duration-600"></div>
              
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-xl mb-6 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 ${
                index % 2 === 0 
                  ? 'bg-[var(--green)]/10 text-[var(--green)]' 
                  : 'bg-[var(--red)]/10 text-[var(--red)]'
              }`}>
                <i className={`fa-solid ${service.icon}`}></i>
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {service.title}
              </h3>

              <p className="text-sm text-gray-500 leading-relaxed">
                {service.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}