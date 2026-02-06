import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  href: string;
  icon: React.ReactNode;
}

export default function ServiceCard({
  title,
  description,
  price,
  href,
  icon,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="mb-4 text-blue-600">{icon}</div>
      <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-blue-600">
        {title}
      </h3>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-600">
        {description}
      </p>
      <p className="text-sm font-bold text-[#0f172a]">{price}</p>
    </Link>
  );
}
