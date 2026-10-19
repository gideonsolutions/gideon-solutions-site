import { isExternal, type Product } from "@/lib/products";
import ProductIcon from "@/components/ProductIcon";

const CTA: Record<Product["status"], string> = {
  live: "Open",
  waitlist: "Join the waitlist",
  development: "Ask about it",
};

export default function ProductCard({ product, featured = false }: { product: Product; featured?: boolean }) {
  const external = isExternal(product);
  return (
    <a
      href={product.href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm ring-1 ring-transparent transition duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:ring-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${featured ? "lg:col-span-2 lg:p-9" : ""}`}
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <span
          className={`inline-flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-sm ${product.accent}`}
          aria-hidden="true"
        >
          <ProductIcon productKey={product.key} />
        </span>
        {product.status === "waitlist" && (
          <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-800">
            Waitlist open
          </span>
        )}
        {product.status === "development" && (
          <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700">
            In development
          </span>
        )}
      </div>
      <h3 className={`font-semibold tracking-tight text-slate-900 group-hover:text-gideon-blue ${featured ? "text-2xl" : "text-lg"}`}>
        {product.name}
      </h3>
      <p className="mt-1 text-sm font-medium text-slate-600">{product.tagline}</p>
      <p className={`mt-3 flex-1 leading-relaxed text-slate-600 ${featured ? "max-w-xl text-base" : "text-sm"}`}>
        {product.description}
      </p>
      <p className="mt-5 text-sm font-semibold text-gideon-blue">
        {product.status === "live" ? `${CTA.live} ${product.name}` : CTA[product.status]}
        <span aria-hidden="true" className="ml-1 inline-block transition-transform group-hover:translate-x-0.5">
          →
        </span>
        {external && <span className="sr-only"> (opens in a new tab)</span>}
      </p>
    </a>
  );
}
