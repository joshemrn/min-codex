import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="card" style={{ maxWidth: 520, margin: "0 auto" }}>
      <h2>Log in</h2>
      <form style={{ marginTop: "1.5rem", display: "grid", gap: "1rem" }}>
        <label className="input-group">
          Email
          <input type="email" placeholder="you@example.com" />
        </label>
        <label className="input-group">
          Password
          <input type="password" placeholder="••••••••" />
        </label>
        <button className="primary" type="button">
          Sign in
        </button>
      </form>
      <div style={{ marginTop: "1rem" }}>
        <button className="outline" type="button">
          Continue with Google
        </button>
      </div>
      <p style={{ marginTop: "1.5rem", color: "#475569" }}>
        New here? <Link href="/auth/signup">Create an account</Link>
      </p>
    </div>
  );
}
