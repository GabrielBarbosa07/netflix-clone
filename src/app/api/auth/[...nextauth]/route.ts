import NextAuth from "next-auth"

import { authOptions } from "./authOptions"

export const dynamic = 'auto'
export const dynamicParams = true
export const revalidate = false
export const fetchCache = 'auto'
export const runtime = 'nodejs'
export const preferredRegion = 'auto'

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
