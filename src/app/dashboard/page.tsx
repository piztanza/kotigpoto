import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { DashboardOverview } from '@/components/dashboard/overview'
import { QuickStats } from '@/components/dashboard/quick-stats'
import { RecentTransactions } from '@/components/dashboard/recent-transactions'
import { RevenueChart } from '@/components/dashboard/revenue-chart'

export const metadata: Metadata = {
  title: 'Dashboard | KotigPoto',
  description: 'Monitor dan kelola bisnis photo booth Anda dengan dashboard real-time KotigPoto',
}

// This would typically check authentication
async function getCurrentUser() {
  // Mock user for now - in real app, get from session/JWT
  return {
    id: '1',
    email: 'admin@kotigpoto.com',
    role: 'admin',
    name: 'Admin KotigPoto'
  }
}

export default async function DashboardPage() {
  const user = await getCurrentUser()
  
  if (!user) {
    redirect('/login')
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Sidebar - would be a separate component */}
        <aside className="w-64 bg-background-light border-r border-primary/20 min-h-screen">
          <div className="p-6">
            <h2 className="font-heading text-xl font-bold text-primary mb-8">
              KotigPoto
            </h2>
            <nav className="space-y-2">
              <a href="/dashboard" className="block p-3 rounded-lg bg-primary/10 text-primary">
                Dashboard
              </a>
              <a href="/dashboard/booths" className="block p-3 rounded-lg text-text-secondary hover:bg-background-dark">
                Booth Management
              </a>
              <a href="/dashboard/transactions" className="block p-3 rounded-lg text-text-secondary hover:bg-background-dark">
                Transactions
              </a>
              <a href="/dashboard/analytics" className="block p-3 rounded-lg text-text-secondary hover:bg-background-dark">
                Analytics
              </a>
              <a href="/dashboard/vouchers" className="block p-3 rounded-lg text-text-secondary hover:bg-background-dark">
                Vouchers
              </a>
              <a href="/dashboard/settings" className="block p-3 rounded-lg text-text-secondary hover:bg-background-dark">
                Settings
              </a>
            </nav>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="font-heading text-3xl font-bold text-text-primary mb-2">
              Dashboard Overview
            </h1>
            <p className="text-text-secondary">
              Welcome back, {user.name}! Here's what's happening with your photo booths today.
            </p>
          </div>

          {/* Quick Stats */}
          <QuickStats />

          {/* Charts and Data */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <RevenueChart />
            <RecentTransactions />
          </div>

          {/* Dashboard Overview */}
          <DashboardOverview />
        </main>
      </div>
    </div>
  )
} 