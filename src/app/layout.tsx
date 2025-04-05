import { kaushanScript } from '../../public/fonts/google-fonts';

import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${kaushanScript.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
