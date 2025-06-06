'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Camera, CreditCard, Smartphone, Gift, ArrowLeft, ArrowRight } from 'lucide-react'
import { PackageSelection } from './package-selection'
import { PaymentMethod } from './payment-method'
import { PhotoCapture } from './photo-capture'

type BoothStep = 'welcome' | 'packages' | 'payment' | 'capture' | 'completed'

const steps = [
  { id: 'welcome', title: 'Welcome', icon: Camera },
  { id: 'packages', title: 'Choose Package', icon: Gift },
  { id: 'payment', title: 'Payment', icon: CreditCard },
  { id: 'capture', title: 'Photo Session', icon: Camera },
  { id: 'completed', title: 'Complete', icon: Camera }
]

export function BoothInterface() {
  const [currentStep, setCurrentStep] = useState<BoothStep>('welcome')
  const [selectedPackage, setSelectedPackage] = useState<any>(null)
  const [paymentMethod, setPaymentMethod] = useState<string>('')

  const nextStep = () => {
    const currentIndex = steps.findIndex(step => step.id === currentStep)
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1].id as BoothStep)
    }
  }

  const prevStep = () => {
    const currentIndex = steps.findIndex(step => step.id === currentStep)
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1].id as BoothStep)
    }
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 'welcome':
        return <WelcomeScreen onNext={nextStep} />
      case 'packages':
        return (
          <PackageSelection 
            onSelect={(pkg) => {
              setSelectedPackage(pkg)
              nextStep()
            }}
            onBack={prevStep}
          />
        )
      case 'payment':
        return (
          <PaymentMethod
            package={selectedPackage}
            onPaymentSelect={(method) => {
              setPaymentMethod(method)
              nextStep()
            }}
            onBack={prevStep}
          />
        )
      case 'capture':
        return (
          <PhotoCapture
            package={selectedPackage}
            onComplete={nextStep}
            onBack={prevStep}
          />
        )
      case 'completed':
        return <CompletionScreen onRestart={() => setCurrentStep('welcome')} />
      default:
        return <WelcomeScreen onNext={nextStep} />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background-dark to-background">
      {/* Header with progress */}
      <div className="bg-background-light border-b border-primary/20 p-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="font-heading text-2xl font-bold text-primary">
              KotigPoto PhotoBox
            </h1>
            <div className="text-text-secondary text-sm">
              Step {steps.findIndex(step => step.id === currentStep) + 1} of {steps.length}
            </div>
          </div>
          
          {/* Progress bar */}
          <div className="flex items-center gap-4">
            {steps.map((step, index) => {
              const isActive = step.id === currentStep
              const isCompleted = steps.findIndex(s => s.id === currentStep) > index
              
              return (
                <div key={step.id} className="flex items-center gap-2">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isActive 
                      ? 'bg-primary text-white' 
                      : isCompleted 
                        ? 'bg-primary/50 text-white' 
                        : 'bg-background-dark text-text-secondary'
                  }`}>
                    <step.icon className="w-5 h-5" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-8 h-1 rounded transition-all duration-300 ${
                      isCompleted ? 'bg-primary' : 'bg-background-dark'
                    }`} />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            {renderStepContent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

// Welcome Screen Component
function WelcomeScreen({ onNext }: { onNext: () => void }) {
  return (
    <div className="text-center py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center">
          <Camera className="w-16 h-16 text-white" />
        </div>
        
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-text-primary mb-6">
          Selamat Datang di PhotoBox!
        </h2>
        
        <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto">
          Siap untuk foto yang amazing? Pilih paket yang sesuai dengan kebutuhan Anda 
          dan nikmati pengalaman photo booth terbaik!
        </p>
        
        <button 
          onClick={onNext}
          className="kiosk-button btn-primary text-xl px-12 py-6 group"
        >
          Mulai Sekarang
          <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
        </button>
      </motion.div>
    </div>
  )
}

// Completion Screen Component
function CompletionScreen({ onRestart }: { onRestart: () => void }) {
  return (
    <div className="text-center py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
          <span className="text-6xl">🎉</span>
        </div>
        
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-text-primary mb-6">
          Terima Kasih!
        </h2>
        
        <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
          Foto Anda telah berhasil diambil dan sedang diproses. 
          Silakan ambil hasil cetakan Anda di tempat yang telah disediakan.
        </p>
        
        <p className="text-lg text-primary mb-12">
          📱 Foto digital akan dikirim ke email/WhatsApp dalam 5 menit
        </p>
        
        <button 
          onClick={onRestart}
          className="kiosk-button btn-primary text-xl px-12 py-6"
        >
          Foto Lagi? 📸
        </button>
      </motion.div>
    </div>
  )
} 