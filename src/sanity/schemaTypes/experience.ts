export default {
  name: 'experience',
  title: 'Work Experience',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Job Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'company',
      title: 'Company Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'date',
      title: 'Employment Period',
      type: 'string',
      description: 'e.g., Jan 2020 - Present',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Job Description',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'companyLogo',
      title: 'Company Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'company',
      media: 'companyLogo',
    },
  },
};
