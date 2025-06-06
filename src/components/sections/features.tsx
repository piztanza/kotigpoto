'use client'

import { motion } from 'framer-motion'
import { 
  CreditCard, 
  Smartphone, 
  BarChart3, 
  Shield, 
  Zap,
  Monitor,
  Users,
  Gift,
  QrCode,
  Wifi,
  Clock,
  TrendingUp
} from 'lucide-react'

const features = [
  {
    icon: QrCode,
    title: 'QRIS Payment',
    description: 'Integrasi pembayaran QRIS yang mudah dan aman melalui Midtrans. Support semua bank dan e-wallet.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Smartphone,
    title: 'RFID Support',
    description: 'Sistem kartu RFID untuk pembayaran cashless yang cepat dan modern.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    description: 'Dashboard analytics lengkap dengan monitoring transaksi dan revenue secara real-time.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Shield,
    title: 'Secure Transactions',
    description: 'Keamanan tingkat enterprise dengan enkripsi dan fraud detection.',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Monitor,
    title: 'Kiosk Mode',
    description: 'Interface kiosk yang touch-friendly untuk pengalaman customer yang optimal.',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Gift,
    title: 'Voucher Management',
    description: 'Sistem voucher lengkap dengan berbagai tipe diskon dan promosi.',
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: Users,
    title: 'Multi-user Access',
    description: 'Role-based access control untuk admin, owner, dan operator.',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Wifi,
    title: 'PWA Ready',
    description: 'Progressive Web App yang dapat diinstall di semua device.',
    color: 'from-teal-500 to-green-500'
  },
  {
    icon: Clock,
    title: '24/7 Monitoring',
    description: 'Sistem monitoring dan logging komprehensif untuk uptime maksimal.',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    icon: TrendingUp,
    title: 'Business Intelligence',
    description: 'Insights bisnis mendalam dengan reporting dan forecasting.',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Performa tinggi dengan response time di bawah 100ms.',
    color: 'from-yellow-500 to-amber-500'
  },
  {
    icon: CreditCard,
    title: 'Multiple Payments',
    description: 'Dukungan berbagai metode pembayaran dalam satu platform.',
    color: 'from-cyan-500 to-blue-500'
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 }
}

export function Features() {
  return (
    <section id="features" className="py-20 bg-background-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Fitur <span className="gradient-text">Terlengkap</span> untuk Bisnis PhotoBox
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              KotigPoto hadir dengan berbagai fitur canggih yang dirancang khusus untuk 
              memudahkan pengelolaan bisnis photo booth modern Anda.
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              <div className="card-glass p-6 h-full rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 border hover:border-primary/40">
                {/* Icon */}
                <div className="relative mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-full h-full text-white" />
                  </div>
                  <div className={`absolute inset-0 w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-300`} />
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl font-semibold text-text-primary mb-3 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="font-heading text-2xl font-bold text-text-primary mb-4">
              Siap Mencoba Semua Fitur Ini?
            </h3>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Dapatkan akses ke semua fitur premium KotigPoto dan tingkatkan 
              bisnis photo booth Anda ke level berikutnya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Mulai Trial Gratis
              </button>
              <button className="btn-secondary">
                Hubungi Sales
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 