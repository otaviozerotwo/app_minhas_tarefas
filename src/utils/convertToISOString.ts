export function convertToISOString(dateTimeStr: string): string | null {
  const regex = /^(\d{2})\/(\d{2})\/(\d{4}) (\d{2}):(\d{2})$/;
  const match = dateTimeStr.match(regex);

  if (!match) return null;

  const [, day, month, year, hour, minute] = match;
  const isoString = new Date(`${year}-${month}-${day}T${hour}:${minute}:00`).toISOString();

  return isoString;
}