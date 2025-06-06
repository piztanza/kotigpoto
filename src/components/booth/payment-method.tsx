'use client'

import { CreditCard, Smartphone, Gift } from 'lucide-react'

interface PaymentMethodProps {
  package: any
  onPaymentSelect: (method: string) => void
  onBack: () => void
}

const paymentMethods = [
  {
    id: 'qris',
    name: 'QRIS',
    description: 'Scan QR Code untuk pembayaran',
    icon: CreditCard,
    available: true
  },
  {
    id: 'rfid',
    name: 'RFID Card',
    description: 'Tap kartu RFID Anda',
    icon: Smartphone,
    available: true
  },
  {
    id: 'voucher',
    name: 'Voucher',
    description: 'Gunakan kode voucher',
    icon: Gift,
    available: true
  }
]

export function PaymentMethod({ package: pkg, onPaymentSelect, onBack }: PaymentMethodProps) {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-3xl font-bold text-text-primary mb-4 text-center">
        Pilih Metode Pembayaran
      </h2>
      
      {pkg && (
        <div className="text-center mb-8 p-4 bg-primary/10 rounded-lg">
          <h3 className="text-xl font-semibold text-text-primary">{pkg.name}</h3>
          <p className="text-2xl font-bold text-primary">
            Rp {pkg.price.toLocaleString('id-ID')}
          </p>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {paymentMethods.map((method) => (
          <button
            key={method.id}
            onClick={() => onPaymentSelect(method.id)}
            disabled={!method.available}
            className="card-glass p-6 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all text-center disabled:opacity-50"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
              <method.icon className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-2">{method.name}</h3>
            <p className="text-text-secondary">{method.description}</p>
          </button>
        ))}
      </div>
      
      <div className="text-center">
        <button onClick={onBack} className="btn-secondary">
          Kembali
        </button>
      </div>
    </div>
  )
} 