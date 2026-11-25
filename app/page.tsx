import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { OPEN_DAY_CITY, OPEN_DAY_RSVP_HREF, nextOpenDay, openDayDate, openDayTime } from "@/lib/open-day";
import { CONTACT_EMAIL, PRODUCTS } from "@/lib/products";

// The Open Day band shows the next evening; rebuild hourly so a past one gives way.
export const revalidate = 3600;

const principles = [
  {
    title: "The price is on the page",
    body: "Every product states what it costs before you start, in one sentence, with no tiers to decode and nothing added at checkout.",
  },
  {
    title: "No upsells, no ads",
    body: "Software should do the job it was bought for. None of ours nags, sells your attention, or holds a feature back to sell it later.",
  },
  {
    title: "A person still checks",
    body: "Automation does the arithmetic; a person reviews what it cannot judge. A tax return goes to the IRS checked, or it does not go.",
  },
  {
    title: "Built to last, in house",
    body: "Small products, kept simple on purpose, and maintained by the people who wrote them.",
  },
];

export default function Home() {
  const nextOpen = nextOpenDay();
  const live = PRODUCTS.filter((p) => p.status === "live").length;
  const building = PRODUCTS.filter((p) => p.status !== "live").length;
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-gideon-blue text-white">
        {/* A single soft highlight on the brand blue — plain enough that the
            mark could sit on it, though the mark lives in the nav. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70rem_40rem_at_20%_-10rem,rgba(255,255,255,0.16),transparent_60%),radial-gradient(50rem_30rem_at_100%_110%,rgba(0,0,0,0.25),transparent_60%)]"
        />
        <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium text-blue-50">
            <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden="true" />
            {live} products live{building > 0 && ` · ${building === 1 ? "one" : building} in development`}
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
            Honest software for taxes and money.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-blue-50/90">
            Gideon Solutions builds small, plain products that do one thing well:
            e-file a return, keep a tax record, watch the household money, find a
            trustworthy pair of hands. Prices stated up front. No upsells. A person
            behind every one of them.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#products"
              className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-gideon-blue shadow-sm transition hover:bg-blue-50"
            >
              See the products
            </a>
            <Link
              href="/contact"
              className="rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Talk to us
            </Link>
          </div>
        </div>
      </section>

      {/* Gideon Open Day */}
      {nextOpen && (
        <section aria-labelledby="open-day-heading" className="border-b border-blue-100 bg-blue-50">
          <div className="mx-auto flex max-w-6xl flex-col gap-5 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-gideon-blue">
                Gideon Open Day · {openDayDate(nextOpen)} · {openDayTime(nextOpen)} · {OPEN_DAY_CITY}
                {nextOpen.tentative && " · date tentative"}
              </p>
              <h2 id="open-day-heading" className="mt-1 text-xl font-semibold tracking-tight text-slate-900">
                Run a small business or work for yourself? Bring a problem, and let&rsquo;s build the software for it.
              </h2>
              <p className="mt-1 text-sm text-slate-600">Free, once a month, and everyone is welcome.</p>
            </div>
            <div className="flex shrink-0 gap-3">
              <Link
                href={OPEN_DAY_RSVP_HREF}
                className="rounded-lg bg-gideon-blue px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800"
              >
                RSVP
              </Link>
              <Link
                href="/open-day"
                className="rounded-lg border border-blue-200 bg-white px-5 py-2.5 text-sm font-semibold text-gideon-blue transition hover:bg-blue-100"
              >
                What happens
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Products */}
      <section id="products" className="scroll-mt-20 bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-gideon-blue">Products</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              A small family of tools, each with a job.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Every one runs on its own site. Prices are on the product, not here,
              so what you read there is what you pay.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((product, i) => (
              // The first product is the flagship and takes the wide card.
              <ProductCard key={product.key} product={product} featured={i === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section id="about" className="scroll-mt-20 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-gideon-blue">How we work</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Plain prices, plain words, and a person who answers.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                We are a small software company. Most of what we sell is the products
                above, each at the price it states before you start. Two things are made
                to order: the Enrolled Agent work at Gideon Tax, where consultations and
                IRS representation are billed by the hour at the rates its page states,
                with an estimate first; and Gideon for Professionals, software built for
                one business at a time and quoted in writing before any work starts.
              </p>
              <p className="mt-6 text-sm text-slate-500">
                Questions, a bug, or a form you wish we filed?{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium text-gideon-blue hover:underline">
                  {CONTACT_EMAIL}
                </a>
              </p>
            </div>
            <dl className="grid gap-6 sm:grid-cols-2">
              {principles.map((p) => (
                <div key={p.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                  <dt className="text-base font-semibold text-slate-900">{p.title}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-slate-600">{p.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="border-t border-slate-200 bg-slate-50 py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Something one of these should do, and doesn&rsquo;t?
            </h2>
            <p className="mt-2 text-slate-600">
              Tell us. We read every message, and a person answers.
            </p>
          </div>
          <Link
            href="/contact"
            className="rounded-lg bg-gideon-blue px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
