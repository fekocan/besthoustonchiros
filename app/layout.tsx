import type { Metadata } from 'next';
import { GoogleAnalytics } from '@/components/GoogleAnalytics';
import { Outfit } from 'next/font/google';
import '../src/index.css';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Best Houstun Chiros - Find Trusted Chiropractors',
  description: 'Find licensed chiropractors and wellness professionals in the Houston metro area',
  verification: {
    google: 'PmZwet-FSKFZCagZLI9UGnRt38fN2_4X-wHp_rwA5QM',
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased`}>
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
