import { type SchemaTypeDefinition } from 'sanity'
import personalInfo from './personalInfo'
import techStack from './techStack'
import projects from './projects'
import competitiveProfiles from './competitiveProfiles'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [personalInfo, techStack, projects, competitiveProfiles],
}
