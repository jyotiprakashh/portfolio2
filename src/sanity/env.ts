export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-09-17'

export const dataset = assertValue(
  "production",
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  "jxpu6yyf",
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const studioHost = assertValue(
  "jyotiprakash",
  'Missing environment variable: NEXT_PUBLIC_SANITY_STUDIO_HOST'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
