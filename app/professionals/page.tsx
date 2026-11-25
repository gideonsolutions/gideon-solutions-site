import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/products";
import { OPEN_DAY_CITY, OPEN_DAY_RSVP_HREF, nextOpenDay, openDayDate, openDayTime } from "@/lib/open-day";

export const revalidate = 3600;

const title = "Gideon for Professionals";
const description =
  "Software made for one business at a time: local small businesses and independent contractors bring a problem, and we build the tool for it. Quoted in writing before any work starts.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/professionals" },
  openGraph: { type: "website", siteName: "Gideon Solutions", title, description, url: "/professionals" },
};

const examples = [
  "Booking and reminders for your customers",
  "Quotes and invoices that look like your business",
  "Keeping track of jobs, crews and materials",
  "Turning a spreadsheet that outgrew itself into a real tool",
  "A simple website people can find",
  "Connecting the apps you already use so you stop retyping",
];

const how = [
  {
    title: "Talk it through",
    body: "At an Open Day or by message: what you do, what slows you down, what you've tried.",
  },
  {
    title: "A written quote first",
    body: "Before any work starts, you get a quote in writing: what will be built and what it costs. Nothing is added later without your yes.",
  },
  {
    title: "Built with you",
    body: "We use AI tools to build quickly, and a person checks every piece. You try it as it takes shape, so it fits the way you actually work.",
  },
  {
    title: "Ordinary software",
    body: "What you get is plain software that does its job, with no AI fees built into running it.",
  },
];

export default function ProfessionalsPage() {
  const next = nextOpenDay();
  return (
    <>
      <section className="bg-gideon-blue text-white">
        <div className="mx-auto max-w-4xl px-6 py-20 sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-100">
            Gideon for Professionals · New
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Software made for your business, not the other way around.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-blue-50/90">
            Most software is built for millions of customers, so you bend your work to fit it.
            Gideon for Professionals builds for one business at a time: local small businesses
            and independent contractors bring a problem, and we build the tool that solves it.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/open-day"
              className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-gideon-blue shadow-sm transition hover:bg-blue-50"
            >
              Come to an Open Day
            </Link>
            <Link
              href="/contact?about=professionals"
              className="rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Tell us about your business
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 md:grid-cols-[1fr_1.3fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-gideon-blue">For example</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">What we can build</h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              If you do it the same way every week and wish you didn&rsquo;t have to, it&rsquo;s
              probably a good fit.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {examples.map((e) => (
              <li key={e} className="rounded-xl border border-slate-200 bg-white p-4 text-sm leading-relaxed text-slate-700">
                {e}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-gideon-blue">How it works</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
            Plain prices and a person who answers, as with everything we make.
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {how.map((h) => (
              <div key={h.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-base font-semibold text-slate-900">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Start at Gideon Open Day</h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-slate-600">
              Gideon for Professionals is new, and it starts in {OPEN_DAY_CITY}.
              {next
                ? ` The next Open Day is ${openDayDate(next)}, ${openDayTime(next)}${next.tentative ? " (tentative)" : ""}.`
                : " The next Open Day is being set."}{" "}
              Come by with a problem, free.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                href={OPEN_DAY_RSVP_HREF}
                className="rounded-lg bg-gideon-blue px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800"
              >
                RSVP for Open Day
              </Link>
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm font-medium text-gideon-blue hover:underline">
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
