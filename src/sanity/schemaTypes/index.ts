import { type SchemaTypeDefinition } from 'sanity'
import personalInfo from './personalInfo'
import techStack from './techStack'
import projects from './projects'
import competitiveProfiles from './competitiveProfiles'
import socialHandles from './socialHandles'
import experience from './experience'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [personalInfo, techStack, projects, competitiveProfiles, socialHandles, experience],
}
