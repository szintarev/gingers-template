'use client'

import React from 'react'

interface Partner {
  logo: { url?: string } | string | null
  name?: string | null
  url?: string | null
}

interface PartnersCarouselBlockProps {
  label?: string | null
  heading?: string | null
  speed?: string | null
  partners?: Partner[]
}

export function PartnersCarouselBlock({
  label,
  heading,
  speed = '30',
  partners = [],
}: PartnersCarouselBlockProps) {
  if (partners.length === 0) return null

  const duration = `${speed ?? '30'}s`

  // Duplicate items to create a seamless loop
  const items = [...partners, ...partners]

  return (
    <section className="py-16 bg-white overflow-hidden">
      <style>{`
        @keyframes partners-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .partners-track {
          animation: partners-marquee ${duration} linear infinite;
        }
        .partners-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="container mx-auto px-4 mb-10 text-center">
        {label && (
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-12" style={{ backgroundColor: '#8B1538', opacity: 0.3 }} />
            <span className="text-xs font-medium uppercase tracking-widest" style={{ color: '#8B1538' }}>
              {label}
            </span>
            <div className="h-px w-12" style={{ backgroundColor: '#8B1538', opacity: 0.3 }} />
          </div>
        )}
        {heading && (
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{heading}</h2>
        )}
      </div>

      {/* Fade edges */}
      <div className="relative">
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, white, transparent)' }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, white, transparent)' }}
        />

        <div className="flex overflow-hidden">
          <div className="partners-track flex items-center gap-12 whitespace-nowrap">
            {items.map((partner, i) => {
              const logoUrl =
                typeof partner.logo === 'object' && partner.logo !== null && 'url' in partner.logo
                  ? partner.logo.url
                  : null

              if (!logoUrl) return null

              const img = (
                <img
                  src={logoUrl}
                  alt={partner.name ?? 'Partner logo'}
                  className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                  draggable={false}
                />
              )

              return (
                <div key={i} className="flex-shrink-0 px-4">
                  {partner.url ? (
                    <a
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      {img}
                    </a>
                  ) : (
                    img
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
