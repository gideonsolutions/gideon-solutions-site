interface ProductCardProps {
  title: string;
  description: string;
  href: string;
  status?: "available" | "coming-soon";
  icon: React.ReactNode;
}

export default function ProductCard({
  title,
  description,
  href,
  status = "available",
  icon,
}: ProductCardProps) {
  const isComingSoon = status === "coming-soon";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="text-blue-600">{icon}</div>
        {isComingSoon && (
          <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800">
            Coming soon
          </span>
        )}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-blue-600">
        {title}
      </h3>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-600">
        {description}
      </p>
      <p className="text-sm font-medium text-blue-600">
        {isComingSoon ? "Stay tuned →" : "Visit site →"}
      </p>
    </a>
  );
}
