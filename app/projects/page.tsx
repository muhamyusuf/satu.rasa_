import Link from 'next/link';
import React from 'react';
import { allProjects } from 'contentlayer/generated';
import { Navigation } from '../components/nav';
import { Card } from '../components/card';

export const revalidate = 60;

export default async function Projects() {
  const featured = allProjects.find((project) => project.slug === 'unkey')!;
  const top2 = allProjects.find((project) => project.slug === 'planetfall')!;
  const top3 = allProjects.find((project) => project.slug === 'highstorm')!;
  const sorted = allProjects
    .filter((p) => p.published)
    .filter(
      (project) =>
        project.slug !== featured.slug &&
        project.slug !== top2.slug &&
        project.slug !== top3.slug,
    )
    .sort(
      (a, b) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
    );

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32 animate-fade-in-up">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            Some of my projects that I have worked on in the past.
          </p>
        </div>

        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          <Card></Card>

          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 "></div>
        </div>

        <div className="hidden w-full h-px md:block bg-zinc-800" />

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          <div className="grid grid-cols-1 gap-4"></div>
          <div className="grid grid-cols-1 gap-4"></div>
          <div className="grid grid-cols-1 gap-4"></div>
        </div>
      </div>
    </div>
  );
}
