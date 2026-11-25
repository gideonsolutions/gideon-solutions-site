/**
 * Gideon Open Day — an evening a month in Charlotte when local small
 * businesses and independent contractors bring a problem from their work and
 * Ian builds software for it with them, using AI to work quickly. It is the
 * way in to Gideon for Professionals.
 *
 * The one list the home page, /open-day, the contact form and the share card
 * read, so a date is added, moved or confirmed in exactly one place. Add the
 * next month's evening here; a past one drops off the pages by itself.
 */

export interface OpenDay {
  /** Start and end as ISO instants with the Eastern offset (-05:00 in winter, -04:00 in summer). */
  startsAt: string;
  endsAt: string;
  /** Not yet confirmed: every page that shows the date says so. */
  tentative: boolean;
}

export const OPEN_DAYS: readonly OpenDay[] = [
  { startsAt: "2026-12-10T18:00:00-05:00", endsAt: "2026-12-10T19:00:00-05:00", tentative: true },
];

/** Where it is held. The street address goes to people who RSVP, not on the page. */
export const OPEN_DAY_CITY = "Charlotte, NC";

/** The contact form's "About" value for an RSVP, and the link that preselects it. */
export const OPEN_DAY_TOPIC = "Gideon Open Day RSVP";
export const OPEN_DAY_RSVP_HREF = "/contact?about=open-day";

/** The next Open Day that has not ended yet, or null when none is scheduled. */
export function nextOpenDay(now: Date = new Date()): OpenDay | null {
  return OPEN_DAYS.find((d) => new Date(d.endsAt).getTime() > now.getTime()) ?? null;
}

const TZ = "America/New_York";

/** "Thursday, December 10, 2026" */
export function openDayDate(d: OpenDay): string {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: TZ,
  }).format(new Date(d.startsAt));
}

/** "Thu, Dec 10" */
export function openDayShortDate(d: OpenDay): string {
  return new Intl.DateTimeFormat("en-US", { weekday: "short", month: "short", day: "numeric", timeZone: TZ }).format(
    new Date(d.startsAt),
  );
}

/** "6–7 PM Eastern" (or "6:30–8 PM", "11 AM–1 PM"). */
export function openDayTime(d: OpenDay): string {
  const part = (iso: string) => {
    const parts = new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", timeZone: TZ }).formatToParts(
      new Date(iso),
    );
    const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
    const minute = get("minute");
    return { clock: minute === "00" ? get("hour") : `${get("hour")}:${minute}`, period: get("dayPeriod") };
  };
  const a = part(d.startsAt);
  const b = part(d.endsAt);
  const start = a.period === b.period ? a.clock : `${a.clock} ${a.period}`;
  return `${start}–${b.clock} ${b.period} Eastern`;
}
