/** One line-icon per product, keyed by `Product.key`. Decorative; callers hide it from assistive tech. */
export default function ProductIcon({ productKey }: { productKey: string }) {
  const common = {
    className: "h-6 w-6",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    viewBox: "0 0 24 24",
  };
  switch (productKey) {
    case "tax":
      // A stamped return: a document with a check.
      return (
        <svg {...common}>
          <path d="M7 3h7l5 5v13H7z" />
          <path d="M14 3v5h5" />
          <path d="M9.5 14.5l2 2 3.5-4" />
        </svg>
      );
    case "trucker-tax":
      // A truck.
      return (
        <svg {...common}>
          <path d="M3 7h10v9H3zM13 10h4l3 3v3h-7z" />
          <circle cx="7" cy="17.5" r="1.5" />
          <circle cx="17" cy="17.5" r="1.5" />
        </svg>
      );
    case "keep":
      // An archive box.
      return (
        <svg {...common}>
          <path d="M4 7h16v3H4zM5 10v9h14v-9" />
          <path d="M10 14h4" />
        </svg>
      );
    case "steward":
      // A wallet.
      return (
        <svg {...common}>
          <path d="M3 8a2 2 0 012-2h12a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          <path d="M15 11h6v4h-6a2 2 0 010-4z" />
        </svg>
      );
    case "tasks":
      // Two hands / a handshake, simplified as a checklist.
      return (
        <svg {...common}>
          <path d="M4 6h2M4 12h2M4 18h2" />
          <path d="M9 6h11M9 12h11M9 18h11" />
        </svg>
      );
    case "lantern":
      // A lantern: a hanging ring, a cap, the glass, a flame.
      return (
        <svg {...common}>
          <path d="M12 2.5v2" />
          <path d="M8 7l1.5-2.5h5L16 7z" />
          <path d="M8 7h8v11a1.5 1.5 0 01-1.5 1.5h-5A1.5 1.5 0 018 18z" />
          <path d="M12 10.5c1.2 1.2 1.2 3 0 4.2-1.2-1.2-1.2-3 0-4.2z" />
        </svg>
      );
    case "hearth":
      // A house with a flame at its hearth.
      return (
        <svg {...common}>
          <path d="M3 11l9-7 9 7" />
          <path d="M5 10v10h14V10" />
          <path d="M12 18c-1.4 0-2.4-1-2.4-2.3 0-1.4 1.4-2.1 2.4-3.6 1 1.5 2.4 2.2 2.4 3.6 0 1.3-1 2.3-2.4 2.3z" />
        </svg>
      );
    case "books":
      // An open ledger: two facing pages, a column rule on each.
      return (
        <svg {...common}>
          <path d="M3 5.5A1.5 1.5 0 014.5 4H10a2 2 0 012 2v13a2 2 0 00-2-2H3z" />
          <path d="M21 5.5A1.5 1.5 0 0019.5 4H14a2 2 0 00-2 2v13a2 2 0 012-2h7z" />
          <path d="M6 8.5h3M6 11.5h3M15 8.5h3M15 11.5h3" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
        </svg>
      );
  }
}
