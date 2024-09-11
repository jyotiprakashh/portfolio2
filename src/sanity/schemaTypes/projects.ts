import { defineType } from 'sanity'

export default defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Project Name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'githubLink',
      title: 'GitHub Link',
      type: 'url',
    },
    {
      name: 'liveLink',
      title: 'Live Link',
      type: 'url',
    },
    {
      name: 'techStack',
      title: 'Tech Stack',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'techStack' }] }],
    },
    {
      name: 'projectImage',
      title: 'Project Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }
  ],
})
