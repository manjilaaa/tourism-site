// pages/auth/signin.js
import { getCsrfToken } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function SignIn({ csrfToken }) {

    const router = useRouter();
    const [error, setError] = useState("");

    useEffect(() => {
        if(router.query.error === "CredentialsSignin"){
            alert("Invalid Username or Password");
        }
    }, [router.query.error]);

  return (
    <div style={{ maxWidth: "400px", margin: "auto", paddingTop: "100px" }}>
      <h2>Admin Login</h2>
      <form method="post" action="/api/auth/callback/credentials">
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <input name="callbackUrl" type="hidden" value="/admin" />

        <div style={{ marginBottom: "10px" }}>
          <label>Username:</label>
          <input name="username" type="text" required />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Password:</label>
          <input name="password" type="password" required />
        </div>

        <button type="submit">Sign in</button>
      </form>
    </div>
  );
}

// Required to securely use CSRF tokens
export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}
