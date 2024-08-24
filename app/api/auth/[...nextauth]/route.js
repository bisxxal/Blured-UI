import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

import { MongoDBAdapter } from "@auth/mongodb-adapter" 
import clientPromise from "@/lib/MongoClient";
export const authOptions = {
  secret:process.env.AUTH_SECRET,
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
      ],
      adapter: MongoDBAdapter(clientPromise),
}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }