"use client";

import { sampleAttendance } from "../lib/mockData";

type LiveCountProps = {
  eventId: string;
};

export default function LiveCount({ eventId }: LiveCountProps) {
  const counts = sampleAttendance[eventId] ?? { yes: 0, maybe: 0, no: 0 };
  const confirmed = counts.yes;
  const reachedMinyan = confirmed >= 10;

  return (
    <div>
      <div className={`tag ${reachedMinyan ? "success" : ""}`}>
        {confirmed} confirmed
      </div>
      <p style={{ marginTop: "0.5rem", color: "#475569" }}>
        {counts.maybe} maybe · {counts.no} no response
      </p>
      {reachedMinyan && (
        <p className="banner" style={{ marginTop: "0.75rem" }}>
          🎉 Minyan reached! 10+ people confirmed.
        </p>
      )}
    </div>
  );
}
