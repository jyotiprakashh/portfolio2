import { Link as LinkIcon } from '@phosphor-icons/react';

export default {
  name: 'socialHandles',
  title: 'Social Handles',
  type: 'document',
  icon: LinkIcon,
  fields: [
    {
      name: 'platform',
      title: 'Platform Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'logo',
      title: 'Platform Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'link',
      title: 'Profile URL',
      type: 'url',
      validation: (Rule: any) => Rule.required().uri({
        scheme: ['http', 'https', 'mailto', 'tel'],
      }),
    },
  ],
  preview: {
    select: {
      title: 'platform',
      media: 'logo',
    },
  },
};
