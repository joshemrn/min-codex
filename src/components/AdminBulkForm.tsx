const nusachOptions = ["Ashkenaz", "Sefard", "Eidot Mizrach", "Chabad"];
const prayerTypes = ["Shacharis", "Mincha", "Maariv"];

export default function AdminBulkForm() {
  return (
    <form className="card" style={{ display: "grid", gap: "1rem" }}>
      <h3>Bulk daily creation</h3>
      <div className="grid two">
        <label className="input-group">
          Prayer type
          <select name="prayerType" defaultValue="Shacharis">
            {prayerTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
        <label className="input-group">
          Nusach
          <select name="nusach" defaultValue="Ashkenaz">
            {nusachOptions.map((nusach) => (
              <option key={nusach} value={nusach}>
                {nusach}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="grid two">
        <label className="input-group">
          Time
          <input type="time" name="time" defaultValue="07:30" />
        </label>
        <label className="input-group">
          Location / room
          <input type="text" name="location" placeholder="Conf Room A" />
        </label>
      </div>
      <div className="grid two">
        <label className="input-group">
          Start date
          <input type="date" name="startDate" />
        </label>
        <label className="input-group">
          End date
          <input type="date" name="endDate" />
        </label>
      </div>
      <div className="grid two">
        <label className="input-group">
          Days
          <select name="days" defaultValue="weekday">
            <option value="weekday">Every weekday</option>
            <option value="all">Every day</option>
            <option value="custom">Specific weekdays</option>
          </select>
        </label>
        <label className="input-group">
          Specific weekdays
          <input type="text" name="weekdayList" placeholder="Mon, Wed, Thu" />
        </label>
      </div>
      <div style={{ display: "flex", gap: "0.75rem" }}>
        <button className="primary" type="button">
          Generate series
        </button>
        <button className="outline" type="button">
          Save draft
        </button>
      </div>
      <p style={{ color: "#475569" }}>
        This form auto-generates all minyan events in the chosen date range. Use the Firestore
        batch write helper in <code>src/lib/firestore.ts</code> to create the series.
      </p>
    </form>
  );
}
