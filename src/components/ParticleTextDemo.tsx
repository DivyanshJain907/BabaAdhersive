interface DemoProps {
  customWords?: string[]
  width?: number
  height?: number
}

export function ParticleTextDemo({ 
  customWords = ["BABA", "ADHESIVE", "PREMIUM", "QUALITY", "TRUST"],
  width = 1000,
  height = 500
}: DemoProps) {
  return <div className="w-full h-screen flex items-center justify-center bg-gradient-to-r from-gray-700 via-blue-600 to-gray-700">
    <h1 className="text-4xl font-bold text-white">Demo Component</h1>
  </div>
}
