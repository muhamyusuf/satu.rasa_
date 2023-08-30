'use client';
import { ArrowLeft, Eye, Github, Twitter } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

type Props = {
  project: {
    url?: string;
    title: string;
    description: string;
    repository?: string;
  };

  views: number;
};
export const Header: React.FC<Props> = ({ project, views }) => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);

  const links: { label: string; href: string }[] = [];
  if (project.repository) {
    links.push({
      label: 'GitHub',
      href: `https://github.com/${project.repository}`,
    });
  }
  if (project.url) {
    links.push({
      label: 'Website',
      href: project.url,
    });
  }
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting),
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      ref={ref}
      className="relative overflow-hidden isolate bg-gradient-to-tl from-black via-zinc-900 to-black"
    >
      <div
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur lg:backdrop-blur-none duration-200 border-b lg:bg-transparent ${
          isIntersecting
            ? 'bg-zinc-900/0 border-transparent'
            : 'bg-white/10  border-zinc-200 lg:border-transparent'
        }`}
      >
        <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
          <div className="flex justify-between gap-8">
            <span
              title="View counter for this page"
              className={`duration-200 hover:font-medium flex items-center gap-1 ${
                isIntersecting
                  ? ' text-zinc-400 hover:text-zinc-100'
                  : 'text-zinc-600 hover:text-zinc-900'
              } `}
            >
              <Eye className="w-5 h-5" />{' '}
              {Intl.NumberFormat('en-US', { notation: 'compact' }).format(
                views,
              )}
            </span>
            <Link target="_blank" href="https://twitter.com/chronark_">
              <Twitter
                className={`w-6 h-6 duration-200 hover:font-medium ${
                  isIntersecting
                    ? ' text-zinc-400 hover:text-zinc-100'
                    : 'text-zinc-600 hover:text-zinc-900'
                } `}
              />
            </Link>
            <Link target="_blank" href="https://github.com/chronark">
              <Github
                className={`w-6 h-6 duration-200 hover:font-medium ${
                  isIntersecting
                    ? ' text-zinc-400 hover:text-zinc-100'
                    : 'text-zinc-600 hover:text-zinc-900'
                } `}
              />
            </Link>
          </div>

          <Link
            href="/projects"
            className={`duration-200 hover:font-medium ${
              isIntersecting
                ? ' text-zinc-400 hover:text-zinc-100'
                : 'text-zinc-600 hover:text-zinc-900'
            } `}
          >
            <ArrowLeft className="w-6 h-6 " />
          </Link>
        </div>
      </div>
      <div className="container relative py-24 mx-auto overflow-hidden isolate sm:py-32">
        <div className="flex flex-col items-center px-6 mx-auto text-center max-w-7xl lg:px-8">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-display">
              {project.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-300">
              {project.description}
            </p>
          </div>

          <div className="max-w-2xl mx-auto mt-10 lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 text-base font-semibold leading-7 text-white gap-y-6 gap-x-8 sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <Link target="_blank" key={link.label} href={link.href}>
                  {link.label} <span aria-hidden="true">&rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
