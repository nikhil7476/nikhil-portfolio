// components/MetaHead.js

import Head from "next/head";
import { useRouter } from "next/router";
import metaData from "@/utils/metaData";

const MetaHead = ({ page }) => {
  const router = useRouter();
  const { metaTitle, metaDescription, keywords, ogImage } =
    metaData[page][0] || {};

  // Your site base URL
  const baseUrl = "https://mishraji-official-portfolio.vercel.app";
  const canonicalUrl = `${baseUrl}${router.asPath}`;

  return (
    <Head>
      {/* Basic Meta */}
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={keywords.join(", ")} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph (OG) Meta */}
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={`${baseUrl}${ogImage}`} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />

      {/* Twitter Meta */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={`${baseUrl}${ogImage}`} />
    </Head>
  );
};

export default MetaHead;
