import { defineType } from 'sanity'

export default defineType({
  name: 'techStack',
  title: 'Tech Stack',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Technology Name',
      type: 'string',
    },
    {
      name: 'techlogo',
      title: 'Technology Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
})
