import React from 'react';
import { allProjects } from 'contentlayer/generated';
import { Navigation } from '../components/nav';
import Carousel from '../components/carousel';

export const revalidate = 60;

export const CategoryPhoto = [
  {
    name: 'Hunting',
  },
  {
    name: 'Graduation',
  },
  {
    name: 'Photo Group',
  },
  {
    name: 'Event Documentation',
  },
  {
    name: 'Pre Wedding',
  },
  {
    name: 'Cosplay',
  },
  {
    name: 'Cosplay',
  },
];

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
    <div className="relative w-full pb-16 overflow-scroll md:overflow-hidden">
      <Navigation />

      <div className="flex flex-col px-6 pt-20 mx-auto space-y-6 overflow-scroll md:overflow-hidden max-w-7xl lg:px-8 md:space-y-10 md:pt-24 lg:pt-32 animate-fade-in-up">
        <div className="mx-auto md:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            Some of my projects that I have worked on in the past.
          </p>
        </div>

        <div className="w-full h-px bg-zinc-800" />

        <div className="flex flex-col items-center w-full gap-5 mx-auto overflow-hidden md:overflow-auto md:flex-wrap md:flex-row">
          <Carousel />
        </div>

        <div className="w-full h-px bg-zinc-800" />
      </div>
    </div>
  );
}
