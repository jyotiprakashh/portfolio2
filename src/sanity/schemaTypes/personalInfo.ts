import { defineType } from 'sanity'

export default defineType({
  name: 'personalInfo',
  title: 'Personal Information',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    },
    {
      name: 'about',
      title: 'About Me',
      type: 'text',
    },
    {
      name : 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'resume',
      title: 'Reume url',
      type: 'url',
    },
    {
      name: 'linkedin',
      title: 'LinkedIn URL',
      type: 'url',
    },
    {
      name: 'github',
      title: 'GitHub URL',
      type: 'url',
    },
    {
      name: 'twitter',
      title: 'Twitter URL',
      type: 'url',
    },
    {
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true, // Allows cropping within the Sanity studio
      },
    },
  ],
})
