import NextAuth from 'next-auth'
import loginUser from '../../../services/auth'

export default NextAuth({
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        const res = await loginUser(credentials)
      }
    })
  ]
})