'use client'

import { useState, useEffect } from 'react'
import { Camera, Timer } from 'lucide-react'

interface PhotoCaptureProps {
  package: any
  onComplete: () => void
  onBack: () => void
}

export function PhotoCapture({ package: pkg, onComplete, onBack }: PhotoCaptureProps) {
  const [countdown, setCountdown] = useState(5)
  const [isCapturing, setIsCapturing] = useState(false)
  const [photosTaken, setPhotosTaken] = useState(0)

  useEffect(() => {
    if (countdown > 0 && isCapturing) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000)
      return () => clearTimeout(timer)
    } else if (countdown === 0 && isCapturing) {
      // Simulate photo capture
      setTimeout(() => {
        setPhotosTaken(prev => prev + 1)
        setIsCapturing(false)
        setCountdown(5)
        
        if (photosTaken + 1 >= pkg.prints) {
          setTimeout(onComplete, 1000)
        }
      }, 1000)
    }
  }, [countdown, isCapturing, photosTaken, pkg.prints, onComplete])

  const startCapture = () => {
    setIsCapturing(true)
    setCountdown(5)
  }

  return (
    <div className="max-w-4xl mx-auto py-8 text-center">
      <h2 className="text-3xl font-bold text-text-primary mb-4">
        Sesi Foto - {pkg.name}
      </h2>
      
      <div className="mb-8 p-4 bg-primary/10 rounded-lg">
        <p className="text-lg text-text-primary">
          Foto {photosTaken + 1} dari {pkg.prints}
        </p>
      </div>

      <div className="relative w-80 h-60 mx-auto mb-8 bg-background-dark rounded-2xl border-2 border-primary/20 flex items-center justify-center">
        {isCapturing ? (
          <div className="text-center">
            {countdown > 0 ? (
              <>
                <Timer className="w-16 h-16 text-primary mx-auto mb-4" />
                <div className="text-6xl font-bold text-primary">{countdown}</div>
                <p className="text-text-secondary">Bersiap...</p>
              </>
            ) : (
              <>
                <Camera className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-2xl text-primary">Smile! 📸</p>
              </>
            )}
          </div>
        ) : (
          <div className="text-center">
            <Camera className="w-16 h-16 text-text-secondary mx-auto mb-4" />
            <p className="text-text-secondary">Kamera siap</p>
          </div>
        )}
      </div>

      <div className="space-y-4">
        {!isCapturing && photosTaken < pkg.prints && (
          <button
            onClick={startCapture}
            className="btn-primary text-xl px-12 py-4"
          >
            {photosTaken === 0 ? 'Mulai Foto' : 'Foto Selanjutnya'}
          </button>
        )}
        
        {photosTaken > 0 && !isCapturing && (
          <p className="text-text-secondary">
            {photosTaken} foto berhasil diambil!
          </p>
        )}
        
        <button onClick={onBack} className="btn-secondary">
          Kembali
        </button>
      </div>
    </div>
  )
} 