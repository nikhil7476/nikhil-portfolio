import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="author" content="Nikhil Mishra" />
        <meta name="publisher" content="Nikhil Mishra" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/nikhil-logo.jpeg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@100..800&display=swap"
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
