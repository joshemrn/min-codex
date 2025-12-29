import { notificationLinks } from "../../../lib/notifications";

export default function NotificationsPage() {
  return (
    <div className="grid" style={{ gap: "1.5rem" }}>
      <section>
        <h2>Notification settings</h2>
        <p style={{ color: "#475569", marginTop: "0.4rem" }}>
          Choose how you want to receive alerts for minyan updates, reminders, and announcements.
        </p>
      </section>
      <section className="card" style={{ display: "grid", gap: "1rem" }}>
        <label className="input-group">
          Push notifications
          <select defaultValue="enabled">
            <option value="enabled">Enabled</option>
            <option value="disabled">Disabled</option>
          </select>
        </label>
        <label className="input-group">
          WhatsApp alerts (optional)
          <input type="tel" placeholder="+1 555-555-5555" />
        </label>
        <div style={{ display: "flex", gap: "0.75rem" }}>
          <button className="primary" type="button">
            Save preferences
          </button>
          <button className="outline" type="button">
            Send test alert
          </button>
        </div>
        <p style={{ color: "#475569" }}>
          WhatsApp alerts are delivered via {" "}
          <a href={notificationLinks.twilio} target="_blank" rel="noreferrer">
            Twilio
          </a>{" "}
          or {" "}
          <a href={notificationLinks.meta} target="_blank" rel="noreferrer">
            Meta Cloud API
          </a>.
        </p>
      </section>
    </div>
  );
}
