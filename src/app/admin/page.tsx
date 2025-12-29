import AdminBulkForm from "../../components/AdminBulkForm";

export default function AdminPage() {
  return (
    <div className="grid" style={{ gap: "1.5rem" }}>
      <section>
        <h2>Admin controls</h2>
        <p style={{ color: "#475569", marginTop: "0.4rem" }}>
          Create one-time or recurring minyanim, edit events, and send announcements.
        </p>
      </section>
      <AdminBulkForm />
      <section className="card">
        <h3>Announcements</h3>
        <p style={{ color: "#475569", marginTop: "0.4rem" }}>
          Use this section to notify members about schedule changes or office-wide updates.
        </p>
        <div className="input-group" style={{ marginTop: "1rem" }}>
          <label htmlFor="announcement">Message</label>
          <input id="announcement" type="text" placeholder="Reminder: Mincha moved to Room B" />
        </div>
        <div style={{ marginTop: "1rem", display: "flex", gap: "0.75rem" }}>
          <button className="primary" type="button">
            Send announcement
          </button>
          <button className="outline" type="button">
            Schedule for later
          </button>
        </div>
      </section>
    </div>
  );
}
