'use client'

interface Package {
  id: string
  name: string
  description: string
  price: number
  prints: number
  features: string[]
}

interface PackageSelectionProps {
  onSelect: (pkg: Package) => void
  onBack: () => void
}

const packages: Package[] = [
  {
    id: '1',
    name: 'Basic Package',
    description: '1 Print + Digital Copy',
    price: 25000,
    prints: 1,
    features: ['1x Print Photo', 'Digital Copy via Email', 'Basic Filters']
  },
  {
    id: '2', 
    name: 'Standard Package',
    description: '2 Prints + Digital Copy',
    price: 50000,
    prints: 2,
    features: ['2x Print Photos', 'Digital Copy via Email', 'Premium Filters', 'Custom Frame']
  },
  {
    id: '3',
    name: 'Premium Package', 
    description: '3 Prints + Digital Copy',
    price: 75000,
    prints: 3,
    features: ['3x Print Photos', 'Digital Copy via Email', 'All Filters', 'Premium Frames', 'Instant Share']
  }
]

export function PackageSelection({ onSelect, onBack }: PackageSelectionProps) {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">
        Pilih Paket Photo
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="card-glass p-6 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all cursor-pointer"
            onClick={() => onSelect(pkg)}
          >
            <h3 className="text-xl font-bold text-text-primary mb-2">{pkg.name}</h3>
            <p className="text-text-secondary mb-4">{pkg.description}</p>
            <div className="text-2xl font-bold text-primary mb-4">
              Rp {pkg.price.toLocaleString('id-ID')}
            </div>
            <ul className="space-y-2">
              {pkg.features.map((feature, index) => (
                <li key={index} className="text-text-secondary text-sm">
                  ✓ {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <button onClick={onBack} className="btn-secondary">
          Kembali
        </button>
      </div>
    </div>
  )
} 