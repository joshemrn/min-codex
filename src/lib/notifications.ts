export type NotificationProvider = "onesignal" | "firebase" | "twilio" | "meta";

export const notificationLinks = {
  onesignal: "https://onesignal.com/",
  firebase: "https://firebase.google.com/docs/cloud-messaging",
  twilio: "https://www.twilio.com/whatsapp",
  meta: "https://developers.facebook.com/docs/whatsapp/cloud-api",
};

export function buildWhatsAppMessage(count: number, minyanLabel: string) {
  if (count >= 10) {
    return `🎉 ${minyanLabel} now has ${count} confirmed. We reached a minyan!`;
  }
  return `Update: ${minyanLabel} is currently at ${count} confirmed.`;
}
