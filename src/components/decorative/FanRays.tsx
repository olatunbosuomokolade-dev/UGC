export default function FanRays({
  color = '#F5C6A0',
  className = '',
}: {
  color?: string
  className?: string
}) {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = -90 + i * 22.5
        return (
          <line
            key={i}
            x1="0"
            y1="120"
            x2={120 * Math.cos((angle * Math.PI) / 180)}
            y2={120 + 120 * Math.sin((angle * Math.PI) / 180)}
            stroke={color}
            strokeWidth="3"
          />
        )
      })}
    </svg>
  )
}
