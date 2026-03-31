import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'CphClean | Premium Cleaning Services in Copenhagen',
  description: 'Professional office cleaning, Airbnb turnover, and move-out cleaning services in Copenhagen. Eco-friendly, reliable, and trusted by 500+ businesses.',
  keywords: 'Office cleaning Copenhagen, Flytterengøring København, Airbnb cleaning Copenhagen, professional cleaning service, kontorrengøring København',
  openGraph: {
    title: 'CphClean | Premium Cleaning Services in Copenhagen',
    description: 'Professional office cleaning, Airbnb turnover, and move-out cleaning services in Copenhagen.',
    type: 'website',
    locale: 'en_DK',
    alternateLocale: 'da_DK',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
