import type { Block } from 'payload'

export const FullWidthImage: Block = {
  slug: 'fullWidthImage',
  interfaceName: 'FullWidthImageBlock',
  labels: {
    singular: 'Full Width Image',
    plural: 'Full Width Images',
  },
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'caption',
      type: 'text',
      localized: true,
    },
    {
      name: 'maxHeight',
      type: 'select',
      defaultValue: '600',
      options: [
        { label: 'Small (400px)', value: '400' },
        { label: 'Medium (600px)', value: '600' },
        { label: 'Large (800px)', value: '800' },
        { label: 'Full screen', value: 'full' },
      ],
    },
  ],
}
