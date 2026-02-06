import FourPointStar from './FourPointStar'

export default function StarDivider({ className = '' }: { className?: string }) {
  const items = Array.from({ length: 9 })

  return (
    <div className={`w-full py-6 flex items-center justify-center gap-4 md:gap-6 overflow-hidden ${className}`}>
      {items.map((_, i) => (
        <div key={i} className="flex-shrink-0">
          {i % 2 === 0 ? (
            <FourPointStar size={28} color="#D4D95C" variant="simple" />
          ) : (
            <FourPointStar size={32} color="#171717" variant="burst" />
          )}
        </div>
      ))}
    </div>
  )
}
