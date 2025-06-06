'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Rocket, Zap } from 'lucide-react'
import Link from 'next/link'

const benefits = [
  'Setup gratis tanpa biaya tersembunyi',
  'Trial 30 hari dengan semua fitur premium',
  'Support 24/7 dari tim expert',
  'Garansi uang kembali 100%'
]

const quickStats = [
  { icon: Rocket, value: '< 10 menit', label: 'Setup Time' },
  { icon: Zap, value: '3x', label: 'Revenue Boost' },
  { icon: CheckCircle, value: '99.9%', label: 'Uptime' }
]

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-background-dark to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_40%,rgba(0,173,181,0.1)_0%,transparent_70%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(0,173,181,0.1)_0%,transparent_70%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Rocket className="w-4 h-4" />
                Mulai Sekarang, Rasakan Hasilnya Langsung!
              </div>

              {/* Main heading */}
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6 leading-tight">
                Siap Transformasi Bisnis{' '}
                <span className="gradient-text">PhotoBox</span> Anda?
              </h2>

              {/* Description */}
              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                Bergabunglah dengan ribuan pemilik photo booth yang telah meningkatkan 
                revenue hingga 3x lipat dengan KotigPoto. Mulai trial gratis hari ini 
                dan rasakan perbedaannya!
              </p>

              {/* Benefits list */}
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-text-secondary">
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/register"
                  className="btn-primary group flex items-center justify-center"
                >
                  Mulai Trial Gratis Sekarang
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link
                  href="/demo"
                  className="btn-secondary flex items-center justify-center"
                >
                  Lihat Demo Live
                </Link>
              </div>

              {/* Trust indicators */}
              <p className="text-sm text-text-secondary/80">
                🔒 Data aman dengan enkripsi tingkat bank • 
                ⚡ Setup dalam 10 menit • 
                💰 Garansi uang kembali
              </p>
            </motion.div>

            {/* Right Column - Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Quick stats cards */}
              <div className="grid grid-cols-1 gap-4 mb-8">
                {quickStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="card-glass p-6 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary/20 to-primary/10 flex items-center justify-center">
                        <stat.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-heading text-2xl font-bold text-primary">
                          {stat.value}
                        </div>
                        <div className="text-text-secondary text-sm">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Success story card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="card-glass p-6 rounded-2xl border border-primary/20"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📈</span>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-text-primary mb-2">
                      Success Story
                    </h3>
                    <p className="text-text-secondary text-sm mb-3">
                      "PhotoBox Jakarta meningkatkan revenue 40% dalam 3 bulan 
                      pertama menggunakan KotigPoto!"
                    </p>
                    <div className="flex items-center gap-2 text-xs text-primary">
                      <span>⭐⭐⭐⭐⭐</span>
                      <span>Budi Santoso, Founder</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom section - Urgency */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20 max-w-4xl mx-auto">
            <h3 className="font-heading text-xl md:text-2xl font-bold text-text-primary mb-4">
              ⏰ Penawaran Terbatas - Trial Premium Gratis!
            </h3>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Dapatkan akses ke semua fitur premium selama 30 hari tanpa biaya. 
              Tidak ada kartu kredit, tidak ada komitmen. Mulai sekarang sebelum terlambat!
            </p>
            
            {/* Final CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/register"
                className="btn-primary text-lg px-8 py-4 group"
              >
                🚀 Claim Trial Gratis Sekarang
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <p className="text-sm text-text-secondary">
                Join 500+ PhotoBox owners yang sudah sukses!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}