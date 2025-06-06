'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { date: '1 Jan', revenue: 4000000, transactions: 24 },
  { date: '2 Jan', revenue: 3000000, transactions: 18 },
  { date: '3 Jan', revenue: 5000000, transactions: 32 },
  { date: '4 Jan', revenue: 2780000, transactions: 16 },
  { date: '5 Jan', revenue: 1890000, transactions: 12 },
  { date: '6 Jan', revenue: 2390000, transactions: 14 },
  { date: '7 Jan', revenue: 3490000, transactions: 22 },
  { date: '8 Jan', revenue: 4200000, transactions: 28 },
  { date: '9 Jan', revenue: 3800000, transactions: 25 },
  { date: '10 Jan', revenue: 4500000, transactions: 30 },
]

export function RevenueChart() {
  return (
    <div className="card-glass p-6 rounded-2xl border border-primary/20">
      <div className="mb-6">
        <h3 className="font-heading text-xl font-semibold text-text-primary mb-2">
          Revenue Trend
        </h3>
        <p className="text-text-secondary text-sm">
          Daily revenue for the last 10 days
        </p>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis 
              dataKey="date" 
              stroke="#rgba(255,255,255,0.6)"
              fontSize={12}
            />
            <YAxis 
              stroke="#rgba(255,255,255,0.6)"
              fontSize={12}
              tickFormatter={(value) => `Rp ${(value / 1000000).toFixed(1)}M`}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#252729',
                border: '1px solid #00ADB5',
                borderRadius: '8px',
                color: '#FFFFFF'
              }}
              labelStyle={{ color: '#00ADB5' }}
              formatter={(value, name) => [
                name === 'revenue' 
                  ? `Rp ${(value as number).toLocaleString('id-ID')}`
                  : value,
                name === 'revenue' ? 'Revenue' : 'Transactions'
              ]}
            />
            <Line 
              type="monotone" 
              dataKey="revenue" 
              stroke="#00ADB5" 
              strokeWidth={3}
              dot={{ fill: '#00ADB5', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: '#00ADB5', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
} 