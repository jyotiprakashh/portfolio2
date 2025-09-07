import { defineType } from 'sanity';

export default defineType({
  name: 'techStack',
  title: 'Tech Stack',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Technology Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'logo',
      title: 'Technology Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for accessibility',
          validation: (Rule: any) => Rule.required(),
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Frontend', value: 'frontend' },
          { title: 'Backend', value: 'backend' },
          { title: 'Database', value: 'database' },
          { title: 'DevOps', value: 'devops' },
          { title: 'Testing', value: 'testing' },
          { title: 'Other', value: 'other' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'proficiency',
      title: 'Proficiency Level',
      type: 'number',
      description: 'Rate your proficiency from 1 to 5',
      validation: (Rule: any) =>
        Rule.required()
          .min(1)
          .max(5)
          .warning('Proficiency should be between 1 and 5'),
      options: {
        list: [
          { title: '1 - Beginner', value: 1 },
          { title: '2 - Intermediate', value: 2 },
          { title: '3 - Proficient', value: 3 },
          { title: '4 - Advanced', value: 4 },
          { title: '5 - Expert', value: 5 },
        ],
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'logo',
      subtitle: 'category',
    },
    prepare(selection: any) {
      const { title, media, subtitle } = selection;
      return {
        title,
        media,
        subtitle: `${subtitle ? subtitle.charAt(0).toUpperCase() + subtitle.slice(1) : 'No category'}`,
      };
    },
  },
  orderings: [
    {
      title: 'Category',
      name: 'categoryAsc',
      by: [{ field: 'category', direction: 'asc' }],
    },
    {
      title: 'Proficiency (High to Low)',
      name: 'proficiencyDesc',
      by: [{ field: 'proficiency', direction: 'desc' }],
    },
  ],
});
