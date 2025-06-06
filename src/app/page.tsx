import type { Metadata } from 'next'
import { Hero } from '@/components/sections/hero'
import { Features } from '@/components/sections/features'
import { Pricing } from '@/components/sections/pricing'
import { Testimonials } from '@/components/sections/testimonials'
import { CTA } from '@/components/sections/cta'

export const metadata: Metadata = {
  title: 'Sistem Payment Gateway PhotoBox Terdepan di Indonesia',
  description: 'KotigPoto menyediakan solusi pembayaran photobox terlengkap dengan QRIS, RFID, voucher, dan dashboard management real-time. Tingkatkan bisnis photo booth Anda dengan teknologi terdepan.',
  keywords: [
    'photobox payment gateway Indonesia',
    'sistem pembayaran photo booth',
    'QRIS photobox',
    'photo booth management system',
    'photobox kiosk Indonesia'
  ],
  openGraph: {
    title: 'KotigPoto - Sistem Payment Gateway PhotoBox Terdepan',
    description: 'Solusi pembayaran photobox terlengkap dengan QRIS, RFID, dan management dashboard real-time.',
    images: [
      {
        url: '/og-homepage.jpg',
        width: 1200,
        height: 630,
        alt: 'KotigPoto Homepage',
      },
    ],
  },
  alternates: {
    canonical: 'https://kotigpoto.com',
  },
}

const homepageStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'KotigPoto - Sistem Payment Gateway PhotoBox',
  description: 'Sistem pembayaran photobox terlengkap dengan QRIS, RFID, dan dashboard management real-time',
  url: 'https://kotigpoto.com',
  mainEntity: {
    '@type': 'SoftwareApplication',
    name: 'KotigPoto PhotoBox Payment Gateway',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: 'Contact for pricing',
      priceCurrency: 'IDR'
    },
    feature: [
      'QRIS Payment Integration',
      'RFID Card Support',
      'Real-time Dashboard',
      'Voucher Management',
      'Multi-device Support'
    ]
  }
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homepageStructuredData)
        }}
      />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Features Section */}
      <Features />
      
      {/* Pricing Section */}
      <Pricing />
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* Call to Action Section */}
      <CTA />
    </main>
  )
} 