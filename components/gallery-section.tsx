"use client"

import Image from 'next/image'

const galleryItems = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-19%20at%209.26.11%20AM-cOFOhgRCU7p1fUjEYEw9jHIEG87xCI.jpeg",
    title: "الاستقبال الرئيسي",
    large: true
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-19%20at%209.26.17%20AM%20%281%29-FzxWW5g7fVEEvmO8RluGJOV2UsjsGq.jpeg",
    title: "غرفة العلاج"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-19%20at%209.26.17%20AM-ilqdUZlQHXAOL56FCPUU7rrhlNeNkm.jpeg",
    title: "ممرات وغرف خاصة"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-19%20at%209.26.18%20AM-p9GCmX3a1RvLsnh4CpBJzarc8DZCgR.jpeg",
    title: "غرفة مجهّزة بالكامل"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-19%20at%209.26.20%20AM-zBV6VvQdJhp2mHKCD8NdQxgBF0iwVb.jpeg",
    title: "أدوات طبية معقّمة"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-19%20at%209.04.54%20AM-9UPtR0txLPrZWtJeoOyYBsA3lSf4h0.jpeg",
    title: "واجهة المركز"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-19%20at%209.26.16%20AM-cuPyGIJjg0pcVUbx0ZIGEEdeBZF0ax.jpeg",
    title: "مكتب الاستشارة"
  }
]

export function GallerySection() {
  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#FAFAF7]">
      <div className="container mx-auto px-4 lg:px-60">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-sm font-bold text-[var(--green)] px-4 py-2 rounded-full bg-[var(--green)]/10 border border-[var(--green)]/20 mb-5">
            <i className="fa-solid fa-images text-xs"></i>
            معرض الصور
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
            لمحة عن مركزنا
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            شوف بيئة العمل والأدوات والمرافق عشان تطمئن قبل ما تزورنا.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[240px] gap-4">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
                item.large ? 'col-span-2 row-span-2' : ''
              }`}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--green-dark)]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <span className="text-white font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}