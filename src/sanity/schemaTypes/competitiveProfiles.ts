import { defineType } from 'sanity'

export default defineType({
  name: 'competitiveProfiles',
  title: 'Competitive Programming Profiles',
  type: 'document',
  fields: [
    {
      name: 'platform',
      title: 'Platform Name',
      type: 'string',
    },
    {
      name: 'profileUrl',
      title: 'Profile URL',
      type: 'url',
    },
    {
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }
  ],
})
