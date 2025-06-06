'use client'

import { motion } from 'framer-motion'
import { Camera, MapPin, Wifi, WifiOff, TrendingUp, Calendar } from 'lucide-react'

const booths = [
  {
    id: '1',
    name: 'PhotoBox Mall Kota Kasablanka',
    location: 'Kasablanka, Jakarta Selatan',
    status: 'online',
    todayRevenue: 2450000,
    todayTransactions: 18,
    lastUpdate: '2 minutes ago'
  },
  {
    id: '2',
    name: 'PhotoBox Plaza Senayan',
    location: 'Senayan, Jakarta Pusat',
    status: 'online',
    todayRevenue: 1850000,
    todayTransactions: 12,
    lastUpdate: '5 minutes ago'
  },
  {
    id: '3',
    name: 'PhotoBox Grand Indonesia',
    location: 'Thamrin, Jakarta Pusat',
    status: 'offline',
    todayRevenue: 0,
    todayTransactions: 0,
    lastUpdate: '2 hours ago'
  },
  {
    id: '4',
    name: 'PhotoBox Central Park',
    location: 'Central Park, Jakarta Barat',
    status: 'online',
    todayRevenue: 3200000,
    todayTransactions: 24,
    lastUpdate: '1 minute ago'
  }
]

const upcomingEvents = [
  {
    title: 'System Maintenance',
    description: 'Scheduled maintenance for all booths',
    date: '2024-01-15',
    time: '02:00 - 04:00',
    type: 'maintenance'
  },
  {
    title: 'New Year Promotion',
    description: '50% discount voucher campaign',
    date: '2024-01-01',
    time: 'All Day',
    type: 'promotion'
  }
]

export function DashboardOverview() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Booth Status */}
      <div className="lg:col-span-2 card-glass p-6 rounded-2xl border border-primary/20">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-heading text-xl font-semibold text-text-primary">
            Booth Status
          </h3>
          <button className="text-primary hover:text-primary/80 text-sm font-medium">
            Manage Booths
          </button>
        </div>

        <div className="space-y-4">
          {booths.map((booth, index) => (
            <motion.div
              key={booth.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center gap-4 p-4 rounded-lg border border-primary/10 hover:border-primary/20 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Camera className="w-6 h-6 text-primary" />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-medium text-text-primary truncate">
                    {booth.name}
                  </h4>
                  <div className="flex items-center gap-1">
                    {booth.status === 'online' ? (
                      <Wifi className="w-4 h-4 text-green-400" />
                    ) : (
                      <WifiOff className="w-4 h-4 text-red-400" />
                    )}
                    <span className={`text-xs font-medium ${
                      booth.status === 'online' ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {booth.status}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-1 mb-2">
                  <MapPin className="w-3 h-3 text-text-secondary" />
                  <span className="text-text-secondary text-sm truncate">
                    {booth.location}
                  </span>
                </div>
                
                <div className="flex items-center justify-between text-xs text-text-secondary">
                  <span>Last update: {booth.lastUpdate}</span>
                </div>
              </div>
              
              <div className="text-right">
                <div className="font-semibold text-text-primary text-sm">
                  Rp {booth.todayRevenue.toLocaleString('id-ID')}
                </div>
                <div className="text-text-secondary text-xs">
                  {booth.todayTransactions} transactions
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Upcoming Events & Alerts */}
      <div className="space-y-6">
        {/* Quick Actions */}
        <div className="card-glass p-6 rounded-2xl border border-primary/20">
          <h3 className="font-heading text-lg font-semibold text-text-primary mb-4">
            Quick Actions
          </h3>
          <div className="space-y-3">
            <button className="w-full btn-primary text-left">
              + Add New Booth
            </button>
            <button className="w-full btn-secondary text-left">
              Create Voucher
            </button>
            <button className="w-full btn-secondary text-left">
              Generate Report
            </button>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="card-glass p-6 rounded-2xl border border-primary/20">
          <h3 className="font-heading text-lg font-semibold text-text-primary mb-4">
            Upcoming Events
          </h3>
          <div className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-background-dark/50">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Calendar className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-text-primary text-sm mb-1">
                    {event.title}
                  </h4>
                  <p className="text-text-secondary text-xs mb-2">
                    {event.description}
                  </p>
                  <div className="text-primary text-xs">
                    {event.date} • {event.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Summary */}
        <div className="card-glass p-6 rounded-2xl border border-primary/20">
          <h3 className="font-heading text-lg font-semibold text-text-primary mb-4">
            This Week Performance
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-text-secondary text-sm">Revenue Growth</span>
              <div className="flex items-center gap-1 text-green-400">
                <TrendingUp className="w-4 h-4" />
                <span className="font-semibold">+15.3%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-text-secondary text-sm">Total Transactions</span>
              <span className="font-semibold text-text-primary">1,247</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-text-secondary text-sm">Avg. Transaction</span>
              <span className="font-semibold text-text-primary">Rp 52,500</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-text-secondary text-sm">Customer Satisfaction</span>
              <span className="font-semibold text-text-primary">4.8/5</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 