import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link crossOrigin="anonymous" rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alexandria:wght@300;500&family=Arvo:wght@400;700&family=Crimson+Pro:ital,wght@0,600;0,700;1,200;1,300;1,400;1,600&family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,700&family=DM+Serif+Text:ital@0;1&family=Gloria+Hallelujah&family=Montserrat:wght@300;400;500&family=Noto+Serif+JP:wght@200;300&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,700;1,800&family=Prompt:wght@200&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
