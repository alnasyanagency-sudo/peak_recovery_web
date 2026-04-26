"use client"

const reasons = [
  {
    icon: "fa-shield-virus",
    title: "أدوات معقّمة",
    description: "استخدام أدوات طبية معقمة ذات استخدام واحد وفق أعلى معايير السلامة."
  },
  {
    icon: "fa-user-shield",
    title: "راحة وخصوصية",
    description: "بيئة مريحة بأقسام منفصلة تضمن لك الخصوصية التامة أثناء الجلسة."
  },
  {
    icon: "fa-fire",
    title: "حجامة مساجية بالنار",
    description: "تقنيات متقدمة تجمع بين المساج والحجامة بالنار لتحفيز العضلات وتخفيف الألم."
  },
  {
    icon: "fa-heart-pulse",
    title: "أنواع حجامة متنوعة",
    description: "حجامة تنشيطية، علاجية، وحجامة السنة وفق أفضل الممارسات."
  },
  {
    icon: "fa-droplet",
    title: "تنشيط الدورة الدموية",
    description: "تحفيز تدفق الدم بشكل صحي يساعد على تحسين نشاط الجسم."
  },
  {
    icon: "fa-biohazard",
    title: "تنقية الجسم من السموم",
    description: "المساعدة في تخليص الجسم من السموم وتعزيز وظائفه الحيوية."
  },
  {
    icon: "fa-user-doctor",
    title: "علاج احترافي متكامل",
    description: "نساعد في التعامل مع الحالات المختلفة بأسلوب مهني وآمن."
  },
  {
    icon: "fa-hand-holding-dollar",
    title: "دفع مرن",
    description: "إمكانية الدفع عبر تابي وتمارا لتجربة مريحة وسهلة."
  }
]

export function WhyUsSection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-[#102a16] via-[#1e5427] via-[35%] via-[#2D7339] via-[65%] to-[#163520] relative overflow-hidden">

      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_600px_500px_at_5%_90%,rgba(219,31,43,0.08),transparent),radial-gradient(ellipse_400px_350px_at_95%_10%,rgba(196,162,101,0.06),transparent)]"></div>

      <div className="container mx-auto px-[16px] lg:px-[60px] relative z-10">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-sm font-bold text-white/90 px-4 py-2 rounded-full bg-white/10 border border-white/15 mb-5">
            <i className="fa-solid fa-gem text-xs"></i>
            لماذا نحن؟
          </div>

          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
            ليش تختار مركز قمة التعافي؟
          </h2>

          <p className="text-white/50 max-w-xl mx-auto leading-relaxed">
            خدمات احترافية وتجربة مريحة من أول لحظة حتى نهاية الجلسة.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10 text-center hover:bg-white/10 hover:-translate-y-2 hover:border-white/20 transition-all duration-500"
            >

              <div className="w-[70px] h-[70px] mx-auto rounded-full bg-gradient-to-br from-white/15 to-white/5 flex items-center justify-center text-2xl text-white mb-6 transition-all duration-500 group-hover:bg-[var(--red)] group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[var(--red)]/30">
                <i className={`fa-solid ${reason.icon}`}></i>
              </div>

              <h3 className="text-lg font-bold text-white mb-3">
                {reason.title}
              </h3>

              <p className="text-sm text-white/45 leading-relaxed">
                {reason.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}