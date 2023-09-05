import { Metadata } from 'next';
import Particles from '../components/particles';

export const metadata: Metadata = {
  title: 'Projects',
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900">
      <Particles
        className="absolute inset-0 overflow-hidden -z-10 animate-fade-in"
        quantity={100}
      />
      {children}
    </div>
  );
}
