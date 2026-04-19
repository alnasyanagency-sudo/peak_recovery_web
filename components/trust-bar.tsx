export function TrustBar() {
  const items = [
    { icon: "fa-shield-halved", text: "أدوات طبية معقّمة" },
    { icon: "fa-user-doctor", text: "كوادر متخصصة" },
    { icon: "fa-lock", text: "خصوصية تامة" },
    { icon: "fa-venus-mars", text: "أقسام رجالية ونسائية" },
    { icon: "fa-credit-card", text: "دفع إلكتروني" },
  ]

  return (
    <div className="bg-white border-b border-gray-200 py-6">
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-center gap-6 lg:gap-12">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-3 text-gray-600 font-semibold text-sm">
            <i className={`fa-solid ${item.icon} text-[var(--green)] text-lg`}></i>
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
