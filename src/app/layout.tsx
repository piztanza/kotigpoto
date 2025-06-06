import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Montserrat, Poppins, Josefin_Sans } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import { Analytics } from '@/components/analytics'
import { StructuredData } from '@/components/seo/structured-data'

// Load Google Fonts
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-button',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#00ADB5',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://kotigpoto.com'),
  title: {
    default: 'KotigPoto - Sistem Payment Gateway PhotoBox Terdepan',
    template: '%s | KotigPoto'
  },
  description: 'Sistem pembayaran photobox terlengkap dengan QRIS, RFID, dan dashboard management real-time. Solusi terbaik untuk bisnis photo booth di Indonesia.',
  keywords: [
    'photobox payment gateway',
    'sistem pembayaran photobox',
    'photo booth management',
    'QRIS photobox',
    'photobox Indonesia',
    'sistem photobox',
    'photo booth kiosk',
    'payment gateway Indonesia',
    'booth management system',
    'RFID photobox'
  ],
  authors: [{ name: 'KotigPoto Team', url: 'https://kotigpoto.com' }],
  creator: 'KotigPoto',
  publisher: 'KotigPoto',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://kotigpoto.com',
    siteName: 'KotigPoto',
    title: 'KotigPoto - Sistem Payment Gateway PhotoBox Terdepan',
    description: 'Sistem pembayaran photobox terlengkap dengan QRIS, RFID, dan dashboard management real-time.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'KotigPoto - PhotoBox Payment Gateway',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KotigPoto - Sistem Payment Gateway PhotoBox Terdepan',
    description: 'Sistem pembayaran photobox terlengkap dengan QRIS, RFID, dan dashboard management real-time.',
    images: ['/twitter-image.jpg'],
    creator: '@kotigpoto',
    site: '@kotigpoto',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://kotigpoto.com',
    languages: {
      'id-ID': 'https://kotigpoto.com',
      'en-US': 'https://kotigpoto.com/en',
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'business',
  classification: 'Business Software',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'KotigPoto',
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'msapplication-TileColor': '#00ADB5',
    'msapplication-config': '/browserconfig.xml',
  },
}

const organizationStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'KotigPoto',
  alternateName: 'KotigPoto PhotoBox Solutions',
  url: 'https://kotigpoto.com',
  logo: 'https://kotigpoto.com/logo.png',
  description: 'Penyedia sistem payment gateway photobox terlengkap di Indonesia dengan teknologi QRIS, RFID, dan management dashboard real-time.',
  foundingDate: '2024',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+62-21-1234-5678',
    contactType: 'customer service',
    areaServed: 'ID',
    availableLanguage: ['Indonesian', 'English']
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'ID',
    addressRegion: 'Jakarta',
    addressLocality: 'Jakarta Selatan',
    postalCode: '12345',
    streetAddress: 'Jl. Sudirman No. 123'
  },
  sameAs: [
    'https://www.facebook.com/kotigpoto',
    'https://www.instagram.com/kotigpoto',
    'https://www.linkedin.com/company/kotigpoto',
    'https://twitter.com/kotigpoto'
  ],
  service: {
    '@type': 'Service',
    name: 'PhotoBox Payment Gateway',
    description: 'Sistem pembayaran photobox dengan QRIS, RFID, voucher, dan coin payment',
    provider: {
      '@type': 'Organization',
      name: 'KotigPoto'
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="id" 
      className={`${montserrat.variable} ${poppins.variable} ${josefinSans.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        <StructuredData data={organizationStructuredData} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#00ADB5" />
        <meta name="msapplication-TileColor" content="#00ADB5" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="KotigPoto" />
        <meta name="application-name" content="KotigPoto" />
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
      </head>
      <body className="min-h-screen bg-background font-body antialiased">
        <div id="root" className="min-h-screen flex flex-col">
          {children}
        </div>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#252729',
              color: '#FFFFFF',
              border: '1px solid #00ADB5',
            },
          }}
        />
        <Analytics />
      </body>
    </html>
  )
} 