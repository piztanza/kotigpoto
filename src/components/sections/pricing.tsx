'use client'

import { motion } from 'framer-motion'
import { Check, Star, Zap, Crown } from 'lucide-react'

const pricingPlans = [
  {
    name: 'Starter',
    icon: Zap,
    price: 'Gratis',
    period: '30 hari trial',
    description: 'Perfect untuk photo booth pemula',
    features: [
      '1 Booth aktif',
      'QRIS Payment',
      'Basic Analytics',
      '100 transaksi/bulan',
      'Email support',
      'Dashboard web',
      'Basic voucher system'
    ],
    notIncluded: [
      'RFID Support',
      'Advanced Analytics',
      'Custom branding',
      'Priority support'
    ],
    cta: 'Mulai Gratis',
    popular: false,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Professional',
    icon: Star,
    price: 'Rp 299.000',
    period: '/bulan',
    description: 'Solusi terbaik untuk bisnis growing',
    features: [
      '5 Booth aktif',
      'QRIS + RFID Payment',
      'Advanced Analytics',
      'Unlimited transaksi',
      'Priority support',
      'Mobile app access',
      'Advanced voucher system',
      'Custom branding',
      'Export reports',
      'Real-time monitoring'
    ],
    notIncluded: [
      'White-label solution',
      'API access',
      'Custom integrations'
    ],
    cta: 'Pilih Professional',
    popular: true,
    color: 'from-primary to-primary/80'
  },
  {
    name: 'Enterprise',
    icon: Crown,
    price: 'Custom',
    period: 'per kebutuhan',
    description: 'Solusi enterprise dengan fitur lengkap',
    features: [
      'Unlimited Booths',
      'All Payment Methods',
      'Complete Analytics Suite',
      'Unlimited transaksi',
      '24/7 Dedicated support',
      'White-label solution',
      'API access',
      'Custom integrations',
      'Advanced security',
      'Training & onboarding',
      'Custom reporting',
      'Multi-location support'
    ],
    notIncluded: [],
    cta: 'Hubungi Sales',
    popular: false,
    color: 'from-purple-500 to-pink-500'
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 }
}

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-background">
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
              Pilih <span className="gradient-text">Paket</span> yang Tepat
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Mulai dengan trial gratis 30 hari, lalu upgrade ke paket yang sesuai 
              dengan kebutuhan bisnis photo booth Anda.
            </p>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ 
                scale: plan.popular ? 1.02 : 1.05,
                transition: { duration: 0.2 }
              }}
              className={`relative group ${plan.popular ? 'lg:scale-105' : ''}`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-primary to-primary/80 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Paling Populer
                  </div>
                </div>
              )}

              <div className={`card-glass p-8 h-full rounded-2xl transition-all duration-300 border-2 ${
                plan.popular 
                  ? 'border-primary shadow-xl shadow-primary/20' 
                  : 'border-transparent hover:border-primary/40'
              }`}>
                {/* Plan header */}
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${plan.color} p-4`}>
                    <plan.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-text-primary mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-text-secondary text-sm mb-4">
                    {plan.description}
                  </p>
                  <div className="mb-2">
                    <span className={`font-heading text-4xl font-bold ${
                      plan.popular ? 'text-primary' : 'text-text-primary'
                    }`}>
                      {plan.price}
                    </span>
                    <span className="text-text-secondary text-lg ml-1">
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* Features list */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-text-secondary text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                  
                  {plan.notIncluded.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3 opacity-50">
                      <div className="w-5 h-5 rounded-full bg-text-secondary/20 flex items-center justify-center flex-shrink-0">
                        <div className="w-3 h-0.5 bg-text-secondary/50" />
                      </div>
                      <span className="text-text-secondary text-sm line-through">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button 
                  className={`w-full py-4 rounded-xl font-button font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-primary text-white hover:shadow-lg hover:shadow-primary/25'
                      : 'border border-primary text-primary hover:bg-primary hover:text-white'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-text-primary mb-4">
              Pertanyaan yang Sering Ditanyakan
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="card-glass p-6 rounded-xl border border-primary/20">
                <h4 className="font-heading font-semibold text-text-primary mb-2">
                  Apakah ada biaya setup atau instalasi?
                </h4>
                <p className="text-text-secondary text-sm">
                  Tidak ada biaya setup untuk semua paket. Kami menyediakan onboarding gratis 
                  dan bantuan setup untuk memastikan sistem berjalan dengan sempurna.
                </p>
              </div>

              <div className="card-glass p-6 rounded-xl border border-primary/20">
                <h4 className="font-heading font-semibold text-text-primary mb-2">
                  Bagaimana cara upgrade atau downgrade paket?
                </h4>
                <p className="text-text-secondary text-sm">
                  Anda dapat upgrade atau downgrade paket kapan saja melalui dashboard. 
                  Perubahan akan berlaku pada periode billing berikutnya.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="card-glass p-6 rounded-xl border border-primary/20">
                <h4 className="font-heading font-semibold text-text-primary mb-2">
                  Apakah data saya aman?
                </h4>
                <p className="text-text-secondary text-sm">
                  Ya, kami menggunakan enkripsi tingkat bank dan compliance keamanan international. 
                  Data Anda di-backup secara otomatis dan tersimpan dengan aman.
                </p>
              </div>

              <div className="card-glass p-6 rounded-xl border border-primary/20">
                <h4 className="font-heading font-semibold text-text-primary mb-2">
                  Bagaimana dengan support teknis?
                </h4>
                <p className="text-text-secondary text-sm">
                  Semua paket termasuk support teknis. Professional dan Enterprise mendapat 
                  priority support dengan response time yang lebih cepat.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Money-back guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20 max-w-4xl mx-auto">
            <h3 className="font-heading text-2xl font-bold text-text-primary mb-4">
              💰 Garansi 30 Hari Uang Kembali
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Coba KotigPoto selama 30 hari. Jika tidak puas, kami akan mengembalikan 
              100% uang Anda tanpa pertanyaan. Kami yakin Anda akan menyukai layanan kami!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 