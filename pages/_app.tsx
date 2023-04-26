import "../global.css";
import Head from "next/head";

import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>How Hard Is This Class?</title>
        <meta name="title" content="How Hard Is This Class?" />
        <meta
          name="description"
          content="View grade distributions of courses sorted by professors and their attributed sections based on the most up to date data."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://smcgrades.vercel.app//" />
        <meta property="og:title" content="How Hard Is This Class?" />
        <meta
          property="og:description"
          content="View grade distributions of courses sorted by professors and their attributed sections based on the most up to date data."
        />
        <meta
          property="og:image"
          content="/assets/howhardisthisclass.png"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://smcgrades.vercel.app//" />
        <meta property="twitter:title" content="How Hard Is This Class?" />
        <meta
          property="twitter:description"
          content="View grade distributions of courses sorted by professors and their attributed sections based on the most up to date data."
        />
        <meta
          property="twitter:image"
          content="/assets/howhardisthisclass.png"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
