import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

const monsterrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PHR Fasilkom UI',
  description: 'Your Healtcare Solutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={monsterrat.className}>{children}</body>
    </html>
  );
}
