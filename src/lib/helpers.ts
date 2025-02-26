export function trimText(input: string, maxLength: number = 100): string {
  if (input.length <= maxLength) return input;
  return input.substring(0, maxLength - 3) + "...";
}

export function getCurrentTimeInPST(): Date {
  // Create a date object with the current UTC time
  const now = new Date();

  // Convert the UTC time to PST (UTC-8)
  const offsetPST = -8; // PST is UTC-8
  now.setHours(now.getUTCHours() + offsetPST);

  return now;
}

export function formatTimeForPST(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone: "America/Los_Angeles",
  };

  let formattedTime = new Intl.DateTimeFormat("en-US", options).format(date);

  // Append PST
  formattedTime += " PST";

  return formattedTime;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
