import type { Block } from 'payload'

export const PartnersCarousel: Block = {
  slug: 'partnersCarousel',
  interfaceName: 'PartnersCarouselBlock',
  labels: {
    singular: 'Partners Carousel',
    plural: 'Partners Carousels',
  },
  fields: [
    {
      name: 'label',
      type: 'text',
      localized: true,
    },
    {
      name: 'heading',
      type: 'text',
      localized: true,
    },
    {
      name: 'speed',
      type: 'select',
      defaultValue: '30',
      options: [
        { label: 'Slow', value: '50' },
        { label: 'Normal', value: '30' },
        { label: 'Fast', value: '15' },
      ],
    },
    {
      name: 'partners',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'name',
          type: 'text',
          label: 'Partner name (for alt text)',
        },
        {
          name: 'url',
          type: 'text',
          label: 'Link URL (optional)',
        },
      ],
    },
  ],
}
