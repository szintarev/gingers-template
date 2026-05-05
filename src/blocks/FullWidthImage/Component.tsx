import React from 'react'

interface FullWidthImageBlockProps {
  image: { url?: string; alt?: string } | string | number | null
  caption?: string | null
  maxHeight?: '400' | '600' | '800' | 'full'
}

const heightMap: Record<string, string> = {
  '400': '400px',
  '600': '600px',
  '800': '800px',
  full: '100vh',
}

export function FullWidthImageBlock({ image, caption, maxHeight = '600' }: FullWidthImageBlockProps) {
  const url = typeof image === 'object' && image !== null && 'url' in image ? image.url : null
  const alt = typeof image === 'object' && image !== null && 'alt' in image ? (image as any).alt ?? '' : ''

  if (!url) return null

  return (
    <section className="w-full">
      <div
        className="w-full overflow-hidden"
        style={{ maxHeight: heightMap[maxHeight] ?? '600px' }}
      >
        <img
          src={url}
          alt={alt}
          className="w-full h-full object-cover"
          style={{ maxHeight: heightMap[maxHeight] ?? '600px' }}
        />
      </div>
      {caption && (
        <p className="text-center text-sm text-gray-500 mt-3 px-4">{caption}</p>
      )}
    </section>
  )
}
