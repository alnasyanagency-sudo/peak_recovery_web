import type { Metadata } from 'next'
import { Cairo } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cairo = Cairo({ 
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo"
})

export const metadata: Metadata = {
  title: 'مركز قمة التعافي للحجامة | علاج طبيعي متخصص',
  description: 'مركز متخصص في الحجامة العلاجية بأعلى معايير الجودة والتعقيم. أقسام رجالية ونسائية منفصلة مع فريق متخصص وخبرة تتجاوز 10 سنوات.',
  keywords: ['حجامة', 'علاج طبيعي', 'التعافي', 'حجامة علاجية', 'مركز حجامة'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" className="bg-[#FAFAF7]">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body className={`${cairo.className} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
