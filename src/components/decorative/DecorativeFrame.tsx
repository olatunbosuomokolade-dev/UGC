import Image from 'next/image'

export default function DecorativeFrame({
  variant = 'starburst',
  imageSrc,
  alt = '',
  label,
  size = 180,
  bgColor,
  className = '',
}: {
  variant?: 'starburst' | 'flower' | 'cloud'
  imageSrc?: string
  alt?: string
  label?: string
  size?: number
  bgColor?: string
  className?: string
}) {
  const defaultColors = {
    starburst: '#FFB0C5',
    flower: '#87CEEB',
    cloud: '#D4D95C',
  }

  const bg = bgColor || defaultColors[variant]

  const renderFrame = () => {
    if (variant === 'starburst') {
      const points = 16
      const outerR = 48
      const innerR = 38
      const path = Array.from({ length: points * 2 })
        .map((_, i) => {
          const angle = (360 / (points * 2)) * i - 90
          const r = i % 2 === 0 ? outerR : innerR
          const x = 50 + r * Math.cos((angle * Math.PI) / 180)
          const y = 50 + r * Math.sin((angle * Math.PI) / 180)
          return `${i === 0 ? 'M' : 'L'}${x},${y}`
        })
        .join(' ')

      return (
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
          <path d={`${path}Z`} fill={bg} />
        </svg>
      )
    }

    if (variant === 'flower') {
      const petals = 8
      return (
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
          {Array.from({ length: petals }).map((_, i) => {
            const angle = (360 / petals) * i
            const cx = 50 + 20 * Math.cos((angle * Math.PI) / 180)
            const cy = 50 + 20 * Math.sin((angle * Math.PI) / 180)
            return <circle key={i} cx={cx} cy={cy} r="22" fill={bg} />
          })}
          <circle cx="50" cy="50" r="28" fill={bg} />
        </svg>
      )
    }

    // cloud
    return (
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
        <circle cx="50" cy="50" r="35" fill={bg} />
        <circle cx="30" cy="40" r="22" fill={bg} />
        <circle cx="70" cy="40" r="22" fill={bg} />
        <circle cx="35" cy="60" r="20" fill={bg} />
        <circle cx="65" cy="60" r="20" fill={bg} />
        <circle cx="50" cy="35" r="20" fill={bg} />
      </svg>
    )
  }

  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      {renderFrame()}
      {imageSrc ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-3/5 h-3/5 rounded-full overflow-hidden">
            <Image src={imageSrc} alt={alt} fill className="object-cover" sizes={`${size}px`} />
          </div>
        </div>
      ) : label ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-neutral-900 font-bold text-sm text-center leading-tight px-4">{label}</span>
        </div>
      ) : null}
    </div>
  )
}
