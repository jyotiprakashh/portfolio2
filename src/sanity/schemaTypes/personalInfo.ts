import { defineType } from 'sanity';

export default defineType({
  name: 'personalInfo',
  title: 'Personal Information',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'A short professional tagline (e.g., Full Stack Developer)',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Professional Summary',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'A detailed description about yourself',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'designation',
      title: 'Current Designation',
      type: 'string',
      description: 'Your current job title/position',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
      description: 'Your current location/address',
    },
    {
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: [
        (Rule: any) =>
          Rule.required().regex(
            /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
            { name: 'email', invert: false }
          ),
      ],
    },
    {
      name: 'resume',
      title: 'Resume',
      type: 'file',
      description: 'Upload your resume (PDF format recommended)',
      options: {
        accept: '.pdf',
      },
    },
    {
      name: 'resumeLink',
      title: 'Resume Link',
      type: 'url',
      description: 'Upload your resume link',
    },
    {
      name: 'profilePic',
      title: 'Profile Picture',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'designation',
      media: 'profilePic',
    },
  },
});
