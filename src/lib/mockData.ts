import type { MinyanEvent } from "./models";

export const sampleEvents: MinyanEvent[] = [
  {
    id: "evt-1",
    buildingId: "bld-1",
    date: "2024-08-15",
    time: "7:30 AM",
    prayerType: "Shacharis",
    location: "Conf Room A",
    nusach: "Ashkenaz",
    recurrenceId: "rec-1",
    status: "active",
  },
  {
    id: "evt-2",
    buildingId: "bld-1",
    date: "2024-08-15",
    time: "1:30 PM",
    prayerType: "Mincha",
    location: "Conf Room A",
    nusach: "Sefard",
    recurrenceId: "rec-2",
    status: "active",
  },
  {
    id: "evt-3",
    buildingId: "bld-1",
    date: "2024-08-15",
    time: "6:10 PM",
    prayerType: "Maariv",
    location: "Lobby Lounge",
    nusach: "Eidot Mizrach",
    recurrenceId: null,
    status: "active",
  },
];

export const sampleAttendance = {
  "evt-1": { yes: 8, maybe: 2, no: 1 },
  "evt-2": { yes: 10, maybe: 1, no: 0 },
  "evt-3": { yes: 6, maybe: 3, no: 2 },
};
