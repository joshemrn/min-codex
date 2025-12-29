import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <Link className="logo" href="/">
        Minyanim Organizer
      </Link>
      <ul>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/admin">Admin</Link>
        </li>
        <li>
          <Link href="/settings/notifications">Notifications</Link>
        </li>
        <li>
          <Link href="/auth/login">Log in</Link>
        </li>
      </ul>
    </nav>
  );
}
