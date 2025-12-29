/* eslint-disable no-console */
const admin = require("firebase-admin");

if (!process.env.FIREBASE_SERVICE_ACCOUNT) {
  console.error("Missing FIREBASE_SERVICE_ACCOUNT. Set it to a path of your JSON key.");
  process.exit(1);
}

const serviceAccount = require(process.env.FIREBASE_SERVICE_ACCOUNT);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

async function seed() {
  const buildingRef = await db.collection("buildings").add({
    name: "Downtown Tower",
    address: "123 Business Ave, New York, NY",
  });

  const events = [
    {
      buildingId: buildingRef.id,
      date: "2024-08-15",
      time: "7:30 AM",
      prayerType: "Shacharis",
      location: "Conf Room A",
      nusach: "Ashkenaz",
      recurrenceId: "rec-1",
      status: "active",
    },
    {
      buildingId: buildingRef.id,
      date: "2024-08-15",
      time: "1:30 PM",
      prayerType: "Mincha",
      location: "Conf Room A",
      nusach: "Sefard",
      recurrenceId: "rec-2",
      status: "active",
    },
  ];

  const batch = db.batch();
  events.forEach((event) => {
    const ref = db.collection("minyanEvents").doc();
    batch.set(ref, event);
  });

  await batch.commit();
  console.log("Seed complete.");
}

seed().catch((error) => {
  console.error(error);
  process.exit(1);
});
