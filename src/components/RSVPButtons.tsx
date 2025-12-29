"use client";

import type { RSVPStatus } from "../lib/models";

type RSVPButtonsProps = {
  onSelect: (status: RSVPStatus) => void;
};

export default function RSVPButtons({ onSelect }: RSVPButtonsProps) {
  return (
    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
      <button className="primary" type="button" onClick={() => onSelect("yes")}>
        Yes
      </button>
      <button className="outline" type="button" onClick={() => onSelect("maybe")}>
        Maybe
      </button>
      <button className="outline" type="button" onClick={() => onSelect("no")}>
        No
      </button>
    </div>
  );
}
