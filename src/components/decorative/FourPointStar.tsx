export default function FourPointStar({
  size = 32,
  color = '#D4D95C',
  variant = 'simple',
  className = '',
}: {
  size?: number
  color?: string
  variant?: 'simple' | 'burst'
  className?: string
}) {
  if (variant === 'burst') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (360 / 12) * i
          const len = i % 2 === 0 ? 18 : 12
          return (
            <line
              key={i}
              x1="20"
              y1="20"
              x2={20 + len * Math.cos((angle * Math.PI) / 180)}
              y2={20 + len * Math.sin((angle * Math.PI) / 180)}
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
            />
          )
        })}
      </svg>
    )
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 0 C22 16, 24 18, 40 20 C24 22, 22 24, 20 40 C18 24, 16 22, 0 20 C16 18, 18 16, 20 0Z"
        fill={color}
      />
    </svg>
  )
}
