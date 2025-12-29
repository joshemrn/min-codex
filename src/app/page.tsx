import Link from "next/link";
import FeatureCard from "../components/FeatureCard";

export default function HomePage() {
  return (
    <div className="grid two">
      <section className="card">
        <h1>Organize daily minyanim with confidence.</h1>
        <p>
          Coordinate Shacharis, Mincha, and Maariv in one shared hub. Track
          attendance, reach a minyan of 10, and keep everyone updated with push
          or WhatsApp alerts.
        </p>
        <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.5rem" }}>
          <Link className="primary" href="/auth/signup">
            Create account
          </Link>
          <Link className="outline" href="/dashboard">
            View dashboard
          </Link>
        </div>
      </section>
      <section className="grid" style={{ alignContent: "start", gap: "1rem" }}>
        <FeatureCard
          title="Live minyan counts"
          description="See RSVP totals update in real time and highlight when 10 people are confirmed."
        />
        <FeatureCard
          title="Multi-building support"
          description="Manage groups across multiple office buildings with role-based access."
        />
        <FeatureCard
          title="Bulk event creation"
          description="Generate daily or weekly minyan schedules in seconds with nusach tags."
        />
      </section>
    </div>
  );
}
