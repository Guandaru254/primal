// app/components/Breadcrumbs.tsx
import Link from "next/link";

type Crumb = {
  label: string;
  href?: string;
};

interface BreadcrumbsProps {
  items: Crumb[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumb-wrapper">
      <ol className="breadcrumb-list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="breadcrumb-item">
              {item.href && !isLast ? (
                <Link href={item.href}>{item.label}</Link>
              ) : (
                <span className="breadcrumb-current">{item.label}</span>
              )}
              {!isLast && <span className="breadcrumb-separator">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
