'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

const NavLinks = [
  {
    href: '/projects',
    label: 'Projects',
  },
  {
    href: '/contact',
    label: 'Contact',
  },
];

export const Navigation: React.FC = () => {
  const pathname = usePathname();

  const activeLink = 'text-white scale-105';

  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting),
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <header ref={ref}>
      <div
        className={`fixed container inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b  ${
          isIntersecting
            ? 'bg-zinc-900/0 border-transparent'
            : 'bg-zinc-900/500 border-zinc-800'
        }`}
      >
        <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
          <div className="flex justify-between gap-8">
            {NavLinks.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                className={`duration-200 hover:text-zinc-100 hover:scale-105 transition ease-in-out ${
                  pathname === link.href ? activeLink : 'text-zinc-400'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            href="/"
            className="duration-200 text-zinc-300 hover:text-zinc-100"
          >
            <ArrowLeft className="w-6 h-6 " />
          </Link>
        </div>
      </div>
    </header>
  );
};
