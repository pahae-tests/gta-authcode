import { createHmac } from "crypto";

// Returns the 6-digit code for the hour containing `date`.
// The code is identical for every request made during the same hour (UTC)
// and changes at the top of the next hour.
export function getHourlyCode(date = new Date()) {
  const secret = process.env.AUTH_SECRET || "authcode-default-secret";
  const hourBucket = Math.floor(date.getTime() / 3_600_000);
  const digest = createHmac("sha256", secret).update(String(hourBucket)).digest();
  const n = digest.readUInt32BE(0);
  return 100000 + (n % 900000); // always 6 digits: 100000–999999
}
