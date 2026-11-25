import { ImageResponse } from "next/og";
import { GIDEON_LOGO_PNG_BASE64 } from "@/lib/logo-png";
import { PRODUCTS } from "@/lib/products";

/**
 * The social share card (1200×630), used by app/opengraph-image.tsx and
 * app/twitter-image.tsx. Each route file must define its own default export,
 * so the image lives here and both call it.
 *
 * The mark is the canonical PNG, unaltered, on Gideon Blue — one of the two
 * backgrounds the brand permits it on. Satori (behind next/og) needs
 * `display: flex` on any element with more than one child.
 */
export const OG_SIZE = { width: 1200, height: 630 };
export const OG_ALT = "Gideon Solutions — honest software for taxes and money";
export const OG_CONTENT_TYPE = "image/png";

const logoSrc = `data:image/png;base64,${GIDEON_LOGO_PNG_BASE64}`;

export function renderOgCard() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: 72,
          color: "#ffffff",
          background: "#013ea9",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 26 }}>
          {/* Satori renders this, not a browser: a plain <img>, not next/image. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={96} height={96} alt="" />
          <span style={{ fontSize: 52, fontWeight: 700, letterSpacing: -1 }}>Gideon Solutions</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2 }}>
            Honest software for taxes and money.
          </div>
          <div style={{ fontSize: 32, color: "#dbe7ff" }}>
            {PRODUCTS.map((p) => p.name).join(" · ")}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 30, fontWeight: 600, color: "#ffffff" }}>gideonsolutions.us</span>
          <span style={{ fontSize: 26, color: "#c5d6f7" }}>Prices up front · no upsells · a person answers</span>
        </div>
      </div>
    ),
    { ...OG_SIZE },
  );
}

export const OPEN_DAY_OG_ALT = "Gideon Open Day — bring a problem from your business, and let's build the software for it";

/**
 * The share card for /open-day: the next evening's date, so an invitation
 * posted anywhere says when. Read at build time like the page (hourly).
 */
export function renderOpenDayCard(when: string, tentative: boolean) {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: 72,
          color: "#ffffff",
          background: "#013ea9",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 26 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={96} height={96} alt="" />
          <span style={{ fontSize: 46, fontWeight: 700, letterSpacing: -1 }}>Gideon Open Day</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.08, letterSpacing: -2 }}>
            Bring a problem from your business. Let&rsquo;s build the software for it.
          </div>
          <div style={{ fontSize: 34, color: "#dbe7ff" }}>{tentative ? `${when} · date tentative` : when}</div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 30, fontWeight: 600, color: "#ffffff" }}>gideonsolutions.us/open-day</span>
          <span style={{ fontSize: 26, color: "#c5d6f7" }}>Free · small businesses &amp; independent contractors</span>
        </div>
      </div>
    ),
    { ...OG_SIZE },
  );
}
