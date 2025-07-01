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

    if (rows.length === 0) {
      console.log("No user found for username:", username);
      return null;
    }

    const user = rows[0];
    if (password === user.password) {
      console.log("User authenticated:", user.username);
      return { id: user.id, name: user.username, role: "admin" };
    } else {
      console.log("Password mismatch for username:", username);
      return null;
    }
  } catch (error) {
    console.error("DB error in authorize:", error);
    return null;
  }
}

    }),
  ],
  
  callbacks: {
  async jwt({ token, user }) {
    if (user) {
      console.log("JWT callback - user:", user);
      token.role = user.role;
    }
    return token;
  },

  async session({ session, token }) {
    console.log("Session callback - token:", token);
    session.user.role = token.role;
    return session;
  },
},

  

  pages: {
    signIn: "/auth/signin",
  },

  secret: process.env.NEXTAUTH_SECRET,
});
