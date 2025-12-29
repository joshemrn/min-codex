export default function BuildingPage() {
  return (
    <div className="grid" style={{ gap: "1.5rem" }}>
      <section className="card">
        <h2>Building overview</h2>
        <p style={{ color: "#475569", marginTop: "0.4rem" }}>
          Invite teammates to this building or request admin approval to join additional minyan groups.
        </p>
        <div style={{ marginTop: "1rem" }}>
          <button className="primary" type="button">
            Copy invite link
          </button>
        </div>
      </section>
      <section className="card">
        <h3>Group membership</h3>
        <p style={{ color: "#475569", marginTop: "0.4rem" }}>
          Pending requests can be approved by admins in the Admin panel.
        </p>
      </section>
    </div>
  );
}
