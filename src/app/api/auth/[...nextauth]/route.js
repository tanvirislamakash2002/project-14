import { authOptions } from "../../../../lib/authOptions.js"
import NextAuth from "next-auth"



const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }