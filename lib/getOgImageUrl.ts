import siteMetadata from '@/data/siteMetadata'

export type OgImageSchema = {
  heading: string
  type: string
  mode: 'light' | 'dark'
}

export function getOgImageUrl(ogImageSchema: OgImageSchema) {
  const ogUrl = new URL(`${siteMetadata.siteUrl}/api/og`)
  ogUrl.searchParams.set('heading', ogImageSchema.heading)
  ogUrl.searchParams.set('type', ogImageSchema.type)
  ogUrl.searchParams.set('mode', ogImageSchema.mode)
  const ogImageUrl = ogUrl.toString()
  return ogImageUrl
}
