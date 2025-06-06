'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    name: 'Budi Santoso',
    company: 'PhotoBox Jakarta',
    role: 'Founder & CEO',
    content: 'KotigPoto benar-benar mengubah cara kami mengelola bisnis photo booth. Sistem pembayaran QRIS-nya sangat mudah digunakan dan customer sangat puas dengan pengalaman yang diberikan. Revenue kami meningkat 40% sejak menggunakan KotigPoto!',
    rating: 5,
    avatar: '/testimonials/budi-santoso.jpg',
    location: 'Jakarta'
  },
  {
    name: 'Sari Indah Permata',
    company: 'Moment Capture Studio',
    role: 'Business Owner',
    content: 'Dashboard analytics yang real-time sangat membantu kami memantau performa setiap booth secara langsung. Fitur voucher management juga membuat promosi kami jadi lebih efektif. Highly recommended untuk semua pemilik photo booth!',
    rating: 5,
    avatar: '/testimonials/sari-indah.jpg',
    location: 'Bandung'
  },
  {
    name: 'Ahmad Rahman',
    company: 'Selfie Corner Bandung',
    role: 'Operations Manager',
    content: 'Interface kiosk yang touch-friendly membuat customer mudah menggunakan booth kami. Support RFID card juga menambah value untuk customer yang sering datang. Tim support KotigPoto juga sangat responsif dan helpful.',
    rating: 4,
    avatar: '/testimonials/ahmad-rahman.jpg',
    location: 'Bandung'
  },
  {
    name: 'Lisa Permata',
    company: 'Happy Photo Booth',
    role: 'Franchise Owner',
    content: 'Sebagai pemilik franchise dengan 8 booth di berbagai lokasi, KotigPoto memudahkan kami untuk monitoring semua booth dari satu dashboard. Fitur multi-location management benar-benar game changer untuk bisnis kami.',
    rating: 5,
    avatar: '/testimonials/lisa-permata.jpg',
    location: 'Surabaya'
  },
  {
    name: 'Rizky Pratama',
    company: 'Event Photo Solutions',
    role: 'Event Organizer',
    content: 'Kami menggunakan KotigPoto untuk event-event besar dan hasilnya luar biasa. Sistem dapat handle ratusan transaksi secara bersamaan tanpa masalah. Analytics report juga sangat detailed untuk client kami.',
    rating: 5,
    avatar: '/testimonials/rizky-pratama.jpg',
    location: 'Bali'
  },
  {
    name: 'Maya Sari',
    company: 'Pixel Perfect Studio',
    role: 'Creative Director',
    content: 'Custom branding feature membantu kami maintain brand identity di semua touchpoint. PWA-nya juga bisa diakses offline, jadi tidak khawatir kalau koneksi internet bermasalah saat event.',
    rating: 5,
    avatar: '/testimonials/maya-sari.jpg',
    location: 'Yogyakarta'
  }
]

const stats = [
  { value: '500+', label: 'PhotoBox Aktif' },
  { value: '50K+', label: 'Transaksi/Bulan' },
  { value: '4.9/5', label: 'Rating Customer' },
  { value: '99.9%', label: 'Uptime' }
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

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-background-dark">
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
              Dipercaya oleh <span className="gradient-text">Ribuan</span> Photo Booth
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Bergabunglah dengan komunitas pemilik photo booth yang telah merasakan 
              manfaat KotigPoto untuk mengembangkan bisnis mereka.
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-heading text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-text-secondary text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <div className="card-glass p-6 h-full rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 border hover:border-primary/40">
                {/* Quote icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-primary opacity-50" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating
                          ? 'text-yellow-400 fill-current'
                          : 'text-text-secondary/30'
                      }`}
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center overflow-hidden">
                    {/* Placeholder for avatar */}
                    <div className="w-full h-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary font-semibold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-text-primary text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-text-secondary text-xs">
                      {testimonial.role}, {testimonial.company}
                    </div>
                    <div className="text-primary text-xs">
                      📍 {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20 max-w-4xl mx-auto">
            <h3 className="font-heading text-2xl font-bold text-text-primary mb-4">
              🏆 Penghargaan & Sertifikasi
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center opacity-60">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-primary/20 rounded-xl mb-2 flex items-center justify-center">
                  <span className="text-2xl">🥇</span>
                </div>
                <span className="text-xs text-text-secondary">Best Fintech Startup 2024</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-primary/20 rounded-xl mb-2 flex items-center justify-center">
                  <span className="text-2xl">🔒</span>
                </div>
                <span className="text-xs text-text-secondary">ISO 27001 Certified</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-primary/20 rounded-xl mb-2 flex items-center justify-center">
                  <span className="text-2xl">⭐</span>
                </div>
                <span className="text-xs text-text-secondary">4.9/5 Customer Rating</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-primary/20 rounded-xl mb-2 flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <span className="text-xs text-text-secondary">Fast Growing Startup</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <h3 className="font-heading text-xl font-bold text-text-primary mb-4">
            Bergabunglah dengan Para Pemilik PhotoBox Sukses
          </h3>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            Ribuan pemilik photo booth telah mempercayai KotigPoto untuk 
            mengembangkan bisnis mereka. Saatnya giliran Anda!
          </p>
          <button className="btn-primary">
            Mulai Trial Gratis Sekarang
          </button>
        </motion.div>
      </div>
    </section>
  )
} 