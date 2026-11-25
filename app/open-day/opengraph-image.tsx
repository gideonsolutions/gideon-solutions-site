import { OG_CONTENT_TYPE, OG_SIZE, OPEN_DAY_OG_ALT, renderOpenDayCard } from "@/lib/og-card";
import { OPEN_DAY_CITY, nextOpenDay, openDayShortDate, openDayTime } from "@/lib/open-day";

export const runtime = "nodejs";
export const revalidate = 3600;
export const alt = OPEN_DAY_OG_ALT;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  const next = nextOpenDay();
  return next
    ? renderOpenDayCard(`${openDayShortDate(next)} · ${openDayTime(next)} · ${OPEN_DAY_CITY}`, next.tentative)
    : renderOpenDayCard(`Once a month · ${OPEN_DAY_CITY}`, false);
}
