export type PrayerType = "Shacharis" | "Mincha" | "Maariv";
export type NusachType = "Ashkenaz" | "Sefard" | "Eidot Mizrach" | "Chabad" | "Custom";
export type RSVPStatus = "yes" | "maybe" | "no";

export type UserProfile = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  buildingId: string;
  notificationPreferences: {
    push: boolean;
    whatsapp: boolean;
    email: boolean;
  };
  isAdmin?: boolean;
};

export type Building = {
  id: string;
  name: string;
  address: string;
};

export type MinyanEvent = {
  id: string;
  buildingId: string;
  date: string;
  time: string;
  prayerType: PrayerType;
  location: string;
  nusach: NusachType;
  recurrenceId?: string | null;
  status: "active" | "canceled";
};

export type Attendance = {
  id: string;
  minyanEventId: string;
  userId: string;
  status: RSVPStatus;
  updatedAt: string;
};
