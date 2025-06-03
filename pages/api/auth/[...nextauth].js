import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import pool from '../../../lib/db';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Admin Login",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { username, password } = credentials;

        try {
          const [rows] = await pool.query(
            "SELECT * FROM admin_users WHERE username = ?",
            [username]
          );

          if (rows.length === 0) return null;

          const user = rows[0];

          // Plain password comparison (for now)
          if (password === user.password) {
            return { id: user.id, name: user.username, role: "admin" };
          }

          return null;
        } catch (error) {
          console.error("DB error:", error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  secret: process.env.NEXTAUTH_SECRET,
});