import Link from 'next/link';
import './mdx.css';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';

import { graduation } from '@/datas/project-details';
import { photo_group } from '@/datas/project-details';
import { event_documentation } from '@/datas/project-details';
import { wedding } from '@/datas/project-details';
import { hunting } from '@/datas/project-details';
import { cosplay } from '@/datas/project-details';

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const title = params.slug.slice(0).replace(/-/g, ' ').replace(/%20/g, ' ');
  const title_matcher = title.toLowerCase().replace(/ /g, '_');

  return (
    <div className="w-full p-4 md:p-8">
      <Link
        href="/projects"
        className="duration-200 text-zinc-300 hover:text-zinc-100"
      >
        <ArrowLeft className="w-6 h-6 " />
      </Link>

      <div className="max-w-[720px] mx-auto mt-5 md:mt-10">
        <h1 className="text-5xl font-bold text-center text-white capitalize md:text-7xl">
          {title}
        </h1>
      </div>

      <div className="p-5 md:p-10">
        <div className="columns-1 gap-5 group lg:gap-6 sm:columns-2 md:columns-3 lg:columns-5 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
          {title_matcher === 'graduation'
            ? graduation.map((image, index) => (
                <Image
                  key={index}
                  src={image.src}
                  alt={image.name}
                  width={300}
                  height={100}
                  className={`w-auto h-auto grayscale-0 transition-all md:group-hover:grayscale md:hover:!grayscale-0 duration-300 ease-in-out rounded-md first-letter  
            `}
                  quality={100}
                  priority
                />
              ))
            : null}

          {title_matcher === 'photo_group'
            ? photo_group.map((image, index) => (
                <Image
                  key={index}
                  src={image.src}
                  alt={image.name}
                  width={300}
                  height={100}
                  className={`w-auto h-auto grayscale-0 transition-all md:group-hover:grayscale md:hover:!grayscale-0 duration-300 ease-in-out rounded-md first-letter  
            `}
                  quality={100}
                  priority
                />
              ))
            : null}

          {title_matcher === 'event_documentation'
            ? event_documentation.map((image, index) => (
                <Image
                  key={index}
                  src={image.src}
                  alt={image.name}
                  width={300}
                  height={100}
                  className={`w-auto h-auto grayscale-0 transition-all md:group-hover:grayscale md:hover:!grayscale-0 duration-300 ease-in-out rounded-md first-letter  
            `}
                  quality={100}
                  priority
                />
              ))
            : null}

          {title_matcher === 'wedding'
            ? wedding.map((image, index) => (
                <Image
                  key={index}
                  src={image.src}
                  alt={image.name}
                  width={300}
                  height={100}
                  className={`w-auto h-auto grayscale-0 transition-all md:group-hover:grayscale md:hover:!grayscale-0 duration-300 ease-in-out rounded-md first-letter  
            `}
                  quality={100}
                  priority
                />
              ))
            : null}

          {title_matcher === 'hunting'
            ? hunting.map((image, index) => (
                <Image
                  key={index}
                  src={image.src}
                  alt={image.name}
                  width={300}
                  height={100}
                  className={`w-auto h-auto grayscale-0 transition-all md:group-hover:grayscale md:hover:!grayscale-0 duration-300 ease-in-out rounded-md first-letter  
            `}
                  quality={100}
                  priority
                />
              ))
            : null}

          {title_matcher === 'cosplay'
            ? cosplay.map((image, index) => (
                <Image
                  key={index}
                  src={image.src}
                  alt={image.name}
                  width={300}
                  height={100}
                  className={`w-auto h-auto grayscale-0 transition-all md:group-hover:grayscale md:hover:!grayscale-0 duration-300 ease-in-out rounded-md first-letter  
            `}
                  quality={100}
                  priority
                />
              ))
            : null}

          {title_matcher === 'prewedding' ? (
            <h1 className="text-white">Soon</h1>
          ) : null}
        </div>
      </div>
    </div>
  );
}
