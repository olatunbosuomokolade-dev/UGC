export default function MarqueeBanner() {
  const items = Array.from({ length: 10 })

  return (
    <div className="bg-black py-4 overflow-hidden">
      <div className="marquee-track animate-marquee">
        {[...items, ...items].map((_, i) => (
          <span
            key={i}
            className="text-white text-sm md:text-base font-bold uppercase tracking-[0.3em] mx-6 flex-shrink-0"
          >
            UGC CREATOR
            <span className="mx-6 text-neutral-400">&bull;</span>
          </span>
        ))}
      </div>
    </div>
  )
}
