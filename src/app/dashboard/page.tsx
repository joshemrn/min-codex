import MinyanCard from "../../components/MinyanCard";
import { sampleEvents } from "../../lib/mockData";

export default function DashboardPage() {
  return (
    <div className="grid" style={{ gap: "1.5rem" }}>
      <section>
        <h2>Today’s minyanim</h2>
        <p style={{ color: "#475569", marginTop: "0.4rem" }}>
          Live attendance counts update in real time once Firestore listeners are enabled.
        </p>
      </section>
      <section className="grid two">
        {sampleEvents.map((event) => (
          <MinyanCard key={event.id} event={event} />
        ))}
      </section>
    </div>
  );
}
