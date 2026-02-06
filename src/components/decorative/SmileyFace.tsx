export default function SmileyFace({
  size = 80,
  color = '#FF85A2',
  className = '',
}: {
  size?: number
  color?: string
  className?: string
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="40" cy="40" r="38" fill={color} stroke="white" strokeWidth="3" />
      <circle cx="28" cy="32" r="5" fill="white" />
      <circle cx="52" cy="32" r="5" fill="white" />
      <path
        d="M24 48 C28 56, 52 56, 56 48"
        fill="none"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  )
}
