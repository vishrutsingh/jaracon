'use client'

import { clients } from '@/content/clients'

export default function ClientMarquee() {
  const items = [...clients, ...clients]

  return (
    <div className="relative flex overflow-hidden">
      <div className="flex shrink-0 animate-marquee gap-16 items-center">
        {items.map((client, i) => (
          <span
            key={`${client.name}-${i}`}
            className="text-heading font-semibold text-dark/10 whitespace-nowrap hover:text-dark/25 transition-colors duration-300"
          >
            {client.name}
          </span>
        ))}
      </div>
      <div className="flex shrink-0 animate-marquee gap-16 items-center" aria-hidden>
        {items.map((client, i) => (
          <span
            key={`${client.name}-dup-${i}`}
            className="text-heading font-semibold text-dark/10 whitespace-nowrap hover:text-dark/25 transition-colors duration-300"
          >
            {client.name}
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  )
}
