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
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
        </svg>
      );
  }
}
