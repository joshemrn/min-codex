import {
  collection,
  doc,
  onSnapshot,
  query,
  where,
  setDoc,
  updateDoc,
  addDoc,
  Timestamp,
} from "firebase/firestore";
import { db } from "./firebase";
import type { Attendance, MinyanEvent, RSVPStatus } from "./models";

export const collections = {
  buildings: collection(db, "buildings"),
  users: collection(db, "users"),
  minyanEvents: collection(db, "minyanEvents"),
  attendance: collection(db, "attendance"),
  recurrences: collection(db, "recurrences"),
  announcements: collection(db, "announcements"),
};

export function subscribeToMinyanEvents(buildingId: string, callback: (events: MinyanEvent[]) => void) {
  const q = query(collections.minyanEvents, where("buildingId", "==", buildingId));
  return onSnapshot(q, (snapshot) => {
    const events = snapshot.docs.map((docSnap) => ({
      id: docSnap.id,
      ...(docSnap.data() as Omit<MinyanEvent, "id">),
    }));
    callback(events);
  });
}

export function subscribeToAttendance(minyanEventId: string, callback: (rows: Attendance[]) => void) {
  const q = query(collections.attendance, where("minyanEventId", "==", minyanEventId));
  return onSnapshot(q, (snapshot) => {
    const rows = snapshot.docs.map((docSnap) => ({
      id: docSnap.id,
      ...(docSnap.data() as Omit<Attendance, "id">),
    }));
    callback(rows);
  });
}

export async function upsertAttendance(
  attendanceId: string | null,
  payload: Omit<Attendance, "id" | "updatedAt">,
  status: RSVPStatus
) {
  if (attendanceId) {
    const ref = doc(collections.attendance, attendanceId);
    await updateDoc(ref, {
      status,
      updatedAt: Timestamp.now().toDate().toISOString(),
    });
    return;
  }

  await addDoc(collections.attendance, {
    ...payload,
    status,
    updatedAt: Timestamp.now().toDate().toISOString(),
  });
}

export async function updateMinyanEvent(eventId: string, changes: Partial<MinyanEvent>) {
  const ref = doc(collections.minyanEvents, eventId);
  await updateDoc(ref, changes);
}

export async function createMinyanEvent(event: Omit<MinyanEvent, "id">) {
  await addDoc(collections.minyanEvents, event);
}
