import { Caveat, Indie_Flower, Kaushan_Script } from 'next/font/google';

export const caveat = Caveat({
  variable: '--font-caveat',
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  display: 'swap',
  subsets: ['latin'],
  fallback: ['cursive'],
  preload: true,
});

export const indieFlower = Indie_Flower({
  variable: '--font-indie-flower',
  weight: ['400'],
  style: ['normal'],
  display: 'swap',
  subsets: ['latin'],
  fallback: ['cursive'],
  preload: true,
});

export const kaushanScript = Kaushan_Script({
  variable: '--font-kaushan-script',
  weight: ['400'],
  style: ['normal'],
  display: 'swap',
  subsets: ['latin'],
  fallback: ['cursive'],
  preload: true,
});
