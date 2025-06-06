import type { Metadata } from 'next'
import { BoothInterface } from '@/components/booth/booth-interface'

export const metadata: Metadata = {
  title: 'Booth Interface | KotigPoto',
  description: 'Interface kiosk PhotoBox untuk customer',
}

export default function BoothPage() {
  return (
    <div className="min-h-screen bg-background">
      <BoothInterface />
    </div>
  )
} 