import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="card" style={{ maxWidth: 520, margin: "0 auto" }}>
      <h2>Create your account</h2>
      <form style={{ marginTop: "1.5rem", display: "grid", gap: "1rem" }}>
        <label className="input-group">
          Full name
          <input type="text" placeholder="First Last" />
        </label>
        <label className="input-group">
          Email
          <input type="email" placeholder="you@example.com" />
        </label>
        <label className="input-group">
          Password
          <input type="password" placeholder="Create a password" />
        </label>
        <label className="input-group">
          Building invite link
          <input type="text" placeholder="Paste your invite URL" />
        </label>
        <button className="primary" type="button">
          Create account
        </button>
      </form>
      <div style={{ marginTop: "1rem" }}>
        <button className="outline" type="button">
          Sign up with Google
        </button>
      </div>
      <p style={{ marginTop: "1.5rem", color: "#475569" }}>
        Already have an account? <Link href="/auth/login">Log in</Link>
      </p>
    </div>
  );
}
