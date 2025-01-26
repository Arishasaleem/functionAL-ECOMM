import { createClient } from 'next-sanity'

export const client = createClient({
  projectId:"1p3qzpmf",
  dataset:"production",
  apiVersion:"v2025-01-18",
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
