import { Link2, Mail } from 'lucide-react'

const TikTokIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
)

const socialLinks = [
  {
    href: '#contact',
    icon: Link2,
    bg: 'bg-[#D4D95C]',
    label: 'Website',
  },
  {
    href: 'mailto:brownskingirl19@gmail.com',
    icon: Mail,
    bg: 'bg-white',
    label: 'Email',
  },
  {
    href: 'https://tiktok.com/@zinnialifestyle_',
    icon: TikTokIcon,
    bg: 'bg-pink-400',
    label: 'TikTok',
    external: true,
  },
]

export default function SocialIcons({
  size = 'md',
  className = '',
  dark = false,
}: {
  size?: 'sm' | 'md' | 'lg'
  className?: string
  dark?: boolean
}) {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-14 h-14',
  }

  const iconSizes = { sm: 16, md: 18, lg: 22 }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socialLinks.map((social) => {
        const Icon = social.icon
        return (
          <a
            key={social.label}
            href={social.href}
            target={social.external ? '_blank' : undefined}
            rel={social.external ? 'noopener noreferrer' : undefined}
            className={`${sizeClasses[size]} ${social.bg} rounded-full flex items-center justify-center ${dark ? 'text-neutral-900' : 'text-neutral-900'} hover:scale-110 transition-transform border border-neutral-200`}
            aria-label={social.label}
          >
            <Icon size={iconSizes[size]} />
          </a>
        )
      })}
    </div>
  )
}
