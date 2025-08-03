'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  emoji?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center space-x-2 text-sm">
        <li>
          <Link
            href="/"
            className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <Home className="w-4 h-4" />
            <span className="sr-only">Inicio</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight className="w-4 h-4 mx-2 text-muted-foreground" />
            {item.href ? (
              <Link
                href={item.href}
                className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.emoji && <span>{item.emoji}</span>}
                <span>{item.label}</span>
              </Link>
            ) : (
              <span className="flex items-center gap-1 text-foreground font-medium">
                {item.emoji && <span>{item.emoji}</span>}
                <span>{item.label}</span>
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}