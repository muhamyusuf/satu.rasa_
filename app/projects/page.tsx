import React from 'react';
import { Navigation } from '../components/nav';
import Carousel from '../components/carousel';

export default async function Projects() {
  return (
    <div className="relative w-full overflow-scroll md:overflow-hidden">
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
