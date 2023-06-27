import NextAuth, { AuthOptions } from "next-auth"

import { authOptions } from "./authOptions"

const handler: AuthOptions = NextAuth(authOptions)

export { handler as GET, handler as POST }