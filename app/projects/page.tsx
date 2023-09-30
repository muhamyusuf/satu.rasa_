import React from 'react';
import { Navigation } from '../components/nav';
import Carousel from '../components/carousel';

export default async function Projects() {
  return (
    <div className="md:overflow-hidden relative w-full overflow-scroll">
      <Navigation />

      <div className="md:overflow-hidden max-w-7xl lg:px-8 md:space-y-10 md:pt-24 lg:pt-32 animate-fade-in-up flex flex-col px-6 pt-20 mx-auto space-y-6 overflow-scroll">
        <div className="md:mx-0 mx-auto">
          <h2 className="text-zinc-100 sm:text-4xl text-3xl font-bold tracking-tight">
            Projects
          </h2>

          <p className="text-zinc-400 mt-4">
            Some of my projects that I have worked on in the past.
          </p>
        </div>

        <div className="bg-zinc-800 w-full h-px" />

        <div className="md:overflow-auto md:flex-wrap md:flex-row flex flex-col items-center w-full gap-5 mx-auto overflow-hidden">
          <Carousel />
        </div>

        <div className="bg-zinc-800 w-full h-px" />
      </div>
    </div>
  );
}
