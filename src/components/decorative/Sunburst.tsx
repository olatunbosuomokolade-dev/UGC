export default function Sunburst({
  size = 200,
  color = '#F5C06A',
  className = '',
}: {
  size?: number
  color?: string
  className?: string
}) {
  const rays = 20
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="100" cy="100" r="40" fill={color} />
      {Array.from({ length: rays }).map((_, i) => {
        const angle = (360 / rays) * i
        return (
          <line
            key={i}
            x1="100"
            y1="100"
            x2={100 + 90 * Math.cos((angle * Math.PI) / 180)}
            y2={100 + 90 * Math.sin((angle * Math.PI) / 180)}
            stroke={color}
            strokeWidth="6"
            strokeLinecap="round"
          />
        )
      })}
    </svg>
  )
}
