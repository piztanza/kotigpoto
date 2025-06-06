'use client'

import { Clock, CreditCard, Smartphone, Gift, DollarSign } from 'lucide-react'

const transactions = [
  {
    id: 'TXN-001',
    booth: 'PhotoBox Mall Kota Kasablanka',
    package: 'Premium Package (3x Print)',
    amount: 75000,
    method: 'qris',
    status: 'completed',
    time: '2 minutes ago'
  },
  {
    id: 'TXN-002',
    booth: 'PhotoBox Plaza Senayan',
    package: 'Standard Package (2x Print)',
    amount: 50000,
    method: 'rfid',
    status: 'completed',
    time: '5 minutes ago'
  },
  {
    id: 'TXN-003',
    booth: 'PhotoBox Grand Indonesia',
    package: 'Basic Package (1x Print)',
    amount: 25000,
    method: 'voucher',
    status: 'processing',
    time: '8 minutes ago'
  },
  {
    id: 'TXN-004',
    booth: 'PhotoBox Central Park',
    package: 'Premium Package (3x Print)',
    amount: 75000,
    method: 'qris',
    status: 'failed',
    time: '12 minutes ago'
  },
  {
    id: 'TXN-005',
    booth: 'PhotoBox PIK Avenue',
    package: 'Standard Package (2x Print)',
    amount: 50000,
    method: 'rfid',
    status: 'completed',
    time: '15 minutes ago'
  }
]

const paymentMethodIcons = {
  qris: CreditCard,
  rfid: Smartphone,
  voucher: Gift,
  coin: DollarSign
}

const statusColors = {
  completed: 'text-green-400 bg-green-400/10',
  processing: 'text-yellow-400 bg-yellow-400/10',
  failed: 'text-red-400 bg-red-400/10',
  pending: 'text-blue-400 bg-blue-400/10'
}

export function RecentTransactions() {
  return (
    <div className="card-glass p-6 rounded-2xl border border-primary/20">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-heading text-xl font-semibold text-text-primary mb-2">
            Recent Transactions
          </h3>
          <p className="text-text-secondary text-sm">
            Latest transactions from all booths
          </p>
        </div>
        <button className="text-primary hover:text-primary/80 text-sm font-medium">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {transactions.map((transaction) => {
          const PaymentIcon = paymentMethodIcons[transaction.method as keyof typeof paymentMethodIcons]
          
          return (
            <div key={transaction.id} className="flex items-center gap-4 p-4 rounded-lg border border-primary/10 hover:border-primary/20 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                <PaymentIcon className="w-5 h-5 text-primary" />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-medium text-text-primary text-sm truncate">
                    {transaction.booth}
                  </h4>
                  <span className="font-semibold text-text-primary text-sm">
                    Rp {transaction.amount.toLocaleString('id-ID')}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <p className="text-text-secondary text-xs truncate">
                    {transaction.package}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[transaction.status as keyof typeof statusColors]}`}>
                      {transaction.status}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-1 mt-1">
                  <Clock className="w-3 h-3 text-text-secondary" />
                  <span className="text-text-secondary text-xs">
                    {transaction.time}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
} 