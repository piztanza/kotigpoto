'use client'

import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, DollarSign, Users, Camera, CreditCard } from 'lucide-react'

const stats = [
  {
    title: 'Total Revenue',
    value: 'Rp 45,230,000',
    change: '+12.5%',
    trend: 'up',
    icon: DollarSign,
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Transaksi Hari Ini',
    value: '324',
    change: '+8.2%',
    trend: 'up',
    icon: CreditCard,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Active Booths',
    value: '12',
    change: '+2',
    trend: 'up',
    icon: Camera,
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Customer Visits',
    value: '1,847',
    change: '-2.4%',
    trend: 'down',
    icon: Users,
    color: 'from-orange-500 to-red-500'
  }
]

export function QuickStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="card-glass p-6 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300"
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} p-3`}>
              <stat.icon className="w-full h-full text-white" />
            </div>
            <div className={`flex items-center gap-1 text-sm ${
              stat.trend === 'up' ? 'text-green-400' : 'text-red-400'
            }`}>
              {stat.trend === 'up' ? (
                <TrendingUp className="w-4 h-4" />
              ) : (
                <TrendingDown className="w-4 h-4" />
              )}
              {stat.change}
            </div>
          </div>
          
          <div>
            <h3 className="font-heading text-2xl font-bold text-text-primary mb-1">
              {stat.value}
            </h3>
            <p className="text-text-secondary text-sm">
              {stat.title}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  )
} 