import type { Metadata } from 'next';
import { Inter, Press_Start_2P } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'cyrillic'],
});

const pressStart = Press_Start_2P({
  weight: '400',
  variable: '--font-press-start',
  subsets: ['latin', 'cyrillic'],
});

export const metadata: Metadata = {
  title: 'Freddy Fazbear\'s Pizza',
  description: 'Welcome to the new and improved Freddy Fazbear\'s Pizza!',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} ${pressStart.variable} antialiased font-sans bg-black text-white h-[100dvh] w-full overflow-hidden select-none touch-none`}>
        {children}
      </body>
    </html>
  );
}

