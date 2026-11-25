import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/products";
import {
  OPEN_DAY_CITY,
  OPEN_DAY_RSVP_HREF,
  nextOpenDay,
  openDayDate,
  openDayTime,
} from "@/lib/open-day";

// The next date is worked out when the page is built; rebuild hourly so a past
// evening gives way to the next one without a deploy.
export const revalidate = 3600;

export function generateMetadata(): Metadata {
  const next = nextOpenDay();
  const when = next ? `${openDayDate(next)}, ${openDayTime(next)}, in ${OPEN_DAY_CITY}` : `monthly in ${OPEN_DAY_CITY}`;
  const title = "Gideon Open Day";
  const description = `Local small businesses and independent contractors: bring a problem from your work, and let's build the software for it together. Free. ${when}${next?.tentative ? " (date tentative)" : ""}.`;
  return {
    title,
    description,
    alternates: { canonical: "/open-day" },
    openGraph: { type: "website", siteName: "Gideon Solutions", title, description, url: "/open-day" },
    twitter: { card: "summary_large_image", title, description },
  };
}

const steps = [
  {
    title: "Tell us what eats your time",
    body: "Booking customers, writing quotes and invoices, keeping track of jobs, a spreadsheet that outgrew itself, a website you keep meaning to make. Small problems are welcome.",
  },
  {
    title: "Watch it take shape",
    body: "Ian uses AI tools to sketch the software with you, and where it's small enough, starts building it right there, so you can see whether it fits the way you actually work.",
  },
  {
    title: "Decide what's next",
    body: "If it's worth building properly, Gideon for Professionals can take it from there, with a written quote before any work starts. If not, you leave with ideas, and that's fine too.",
  },
];

export default function OpenDayPage() {
  const next = nextOpenDay();
  return (
    <>
      <section className="bg-gideon-blue text-white">
        <div className="mx-auto max-w-4xl px-6 py-20 sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-100">Gideon Open Day</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Bring a problem from your business. Let&rsquo;s build the software for it together.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-blue-50/90">
            One evening a month in {OPEN_DAY_CITY}, local small businesses and independent
            contractors are welcome to come by, talk through what slows their work down, and see
            what software can do about it. It&rsquo;s free, and everyone is welcome.
          </p>

          <div className="mt-10 rounded-2xl border border-white/25 bg-white/10 p-6 sm:p-8">
            {next ? (
              <>
                <p className="text-sm font-semibold uppercase tracking-wider text-blue-100">Next Open Day</p>
                <p className="mt-2 text-2xl font-semibold">{openDayDate(next)}</p>
                <p className="mt-1 text-lg text-blue-50">
                  {openDayTime(next)} · {OPEN_DAY_CITY}
                </p>
                {next.tentative && (
                  <p className="mt-4 text-base text-white">
                    <strong className="font-semibold">This date is tentative.</strong> We&rsquo;ll confirm it
                    here, and by email to everyone who RSVPs.
                  </p>
                )}
                <p className="mt-2 text-base text-blue-50">
                  The address goes to everyone who RSVPs.
                </p>
              </>
            ) : (
              <p className="text-lg">
                The next date is being set. RSVP and we&rsquo;ll write to you when it is.
              </p>
            )}
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={OPEN_DAY_RSVP_HREF}
                className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-gideon-blue shadow-sm transition hover:bg-blue-50"
              >
                RSVP
              </Link>
              <Link
                href="/professionals"
                className="rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                About Gideon for Professionals
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-gideon-blue">The evening</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">What happens</h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gideon-blue text-sm font-semibold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-base font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Who it&rsquo;s for</h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              Local small businesses and independent contractors: a shop, a crew, a salon, a
              one-person practice, a side business that&rsquo;s turning into a real one. You
              don&rsquo;t need to know anything about software. You only need to know your own
              work, and you already do.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              We plan to hold an Open Day every month.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">What to bring</h2>
            <ul className="mt-4 space-y-3 leading-relaxed text-slate-600">
              <li>The problem, in your own words, and an example of how you handle it today.</li>
              <li>A laptop if you have one. Not required.</li>
              <li>
                <strong className="font-semibold text-slate-800">
                  Please don&rsquo;t bring your customers&rsquo; personal or financial information.
                </strong>{" "}
                Made-up examples work just as well for an evening like this.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Coming?</h2>
            <p className="mt-2 text-slate-600">
              RSVP so we save you a seat and send you the address. Questions:{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium text-gideon-blue hover:underline">
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>
          <Link
            href={OPEN_DAY_RSVP_HREF}
            className="rounded-lg bg-gideon-blue px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800"
          >
            RSVP
          </Link>
        </div>
      </section>
    </>
  );
}
