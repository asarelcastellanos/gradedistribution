import "../global.css";
import Head from "next/head";

import Router from "next/router";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";

import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    Router.events.on("routeChangeStart", (url) => {
      setIsLoading(true);
    });

    Router.events.on("routeChangeComplete", (url) => {
      setIsLoading(false);
    });

    Router.events.on("routeChangeError", (url) => {
      setIsLoading(false);
    });
  }, [Router]);

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
        <meta property="og:image" content="/assets/howhardisthisclass.png" />

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
      {isLoading && <Loader />}
      <Component {...pageProps} />
    </>
  );
}
