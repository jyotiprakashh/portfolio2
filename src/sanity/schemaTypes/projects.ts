import { defineType } from 'sanity';

export default defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'github',
      title: 'GitHub Repository',
      type: 'url',
      description: 'Link to the project repository',
    },
    {
      name: 'liveLink',
      title: 'Live Demo',
      type: 'url',
      description: 'Link to the live demo (if available)',
    },
    {
      name: 'description',
      title: 'Project Description',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'tools',
      title: 'Technologies Used',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of technologies/libraries used in this project',
      validation: (Rule: any) => Rule.required().min(1),
    },
    {
      name: 'screenshot',
      title: 'Project Screenshot',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessibility',
          validation: (Rule: any) => Rule.required(),
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      description: 'Check this if you want to feature this project',
      initialValue: false,
    },
    {
      name: 'date',
      title: 'Completion Date',
      type: 'date',
      options: {
        dateFormat: 'MMMM YYYY',
      },
      validation: (Rule: any) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'screenshot',
      subtitle: 'description',
    },
    prepare(selection: any) {
      const { title, media, subtitle } = selection;
      const block = (subtitle || []).find((block: any) => block._type === 'block');
      return {
        title: title,
        media: media,
        subtitle: block
          ? block.children
              .filter((child: any) => child._type === 'span')
              .map((span: any) => span.text)
              .join('')
              .substring(0, 100) + '...'
          : 'No description',
      };
    },
  },
  orderings: [
    {
      title: 'Featured First',
      name: 'featuredDesc',
      by: [{ field: 'featured', direction: 'desc' }],
    },
    {
      title: 'Newest First',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
  ],
});
