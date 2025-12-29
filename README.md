# Minyanim Organizer

A full-stack, mobile-friendly app for coordinating daily minyanim in office buildings. It supports multi-building groups, RSVP tracking, and optional WhatsApp/push notifications.

## Tech Stack

- **Frontend:** Next.js (React + TypeScript)
- **Backend:** Firebase Auth + Firestore (real-time listeners)
- **Notifications:** OneSignal or Firebase Cloud Messaging (push), Twilio or Meta WhatsApp Cloud API (optional)
- **Deployment:** Web + PWA (manifest included)

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Create a `.env.local` file with your Firebase project values:

```
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...
```

## Firebase Setup

1. Create a Firebase project.
2. Enable **Authentication** (Email/Password + Google).
3. Create a **Firestore** database.
4. Add a web app in Firebase console and copy the config into `.env.local`.

Suggested Firestore collections:

- `buildings`
- `users`
- `minyanEvents`
- `attendance`
- `recurrences`
- `announcements`

## WhatsApp + Push Notifications

You need to manually add API keys or credentials for your provider(s):

### Push Notifications

- **OneSignal:** `ONESIGNAL_APP_ID`, `ONESIGNAL_API_KEY`
- **Firebase Cloud Messaging:** `FCM_SERVER_KEY`

### WhatsApp Notifications (optional)

- **Twilio:** `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN`, `TWILIO_WHATSAPP_NUMBER`
- **Meta WhatsApp Cloud API:** `META_WHATSAPP_TOKEN`, `META_WHATSAPP_PHONE_ID`

These keys should be stored in your server environment (e.g., Vercel, Render) and referenced in the notification service.

## Seed Demo Data

Create a Firebase service account and set the path to the JSON file:

```bash
export FIREBASE_SERVICE_ACCOUNT=/path/to/serviceAccount.json
npm run seed
```

## Project Structure

```
src/
  app/              Next.js routes
  components/       Reusable UI components
  lib/              Firebase + data models
scripts/            Seed helpers
public/             PWA manifest + icon
```

## Notes

- The dashboard uses mock data in `src/lib/mockData.ts`. Replace it with Firestore listeners from `src/lib/firestore.ts`.
- Use Firestore batch writes to create recurring minyanim in bulk.
- Admin roles can be stored in user profiles (see `UserProfile.isAdmin`).

## Deploy

This project is compatible with Vercel or Firebase Hosting. Make sure to add the environment variables in your deployment provider.
