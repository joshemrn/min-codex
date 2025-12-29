"use client";

import LiveCount from "./LiveCount";
import RSVPButtons from "./RSVPButtons";
import type { MinyanEvent } from "../lib/models";

type MinyanCardProps = {
  event: MinyanEvent;
};

export default function MinyanCard({ event }: MinyanCardProps) {
  return (
    <div className="card">
      <h3>
        {event.prayerType} · {event.time}
      </h3>
      <p style={{ marginTop: "0.4rem", color: "#475569" }}>
        {event.date} · {event.location}
      </p>
      <div style={{ marginTop: "0.75rem" }}>
        <span className="tag">{event.nusach}</span>
      </div>
      <div style={{ marginTop: "1rem" }}>
        <LiveCount eventId={event.id} />
      </div>
      <div style={{ marginTop: "1rem" }}>
        <RSVPButtons onSelect={(status) => console.log("RSVP", event.id, status)} />
      </div>
    </div>
  );
}
