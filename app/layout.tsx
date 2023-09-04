import '../global.css';
import { Inter } from '@next/font/google';
import LocalFont from '@next/font/local';
import { Metadata } from 'next';

import Particles from './components/particles';

export const metadata: Metadata = {
  title: {
    default: 'Satu.rasa_',
    template: '%s - SR`Photography',
  },
  description:
    'Solo photographer who is ready to capture every moment you want to create and memorize',
  openGraph: {
    title: 'Satu.rasa_',
    description:
      'Solo photographer who is ready to capture every moment you want to create and memorize',
    url: 'https://satu-rasa.vercel.app',
    siteName: 'satu-rasa.vercel.app',
    images: [
      {
        url: 'https://satu-rasa.vercel.app/satu-rasa.png',
        width: 1080,
        height: 1080,
      },
    ],
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    shortcut: '/favicon.png',
  },
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const calSans = LocalFont({
  src: '../public/fonts/CalSans-SemiBold.ttf',
  variable: '--font-calsans',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(' ')}>
      <body
        className={`bg-black overflow-hidden relative ${
          process.env.NODE_ENV === 'development' ? 'debug-screens' : undefined
        }`}
      >
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={100}
        />
        {children}
      </body>
    </html>
  );
}
