import Head from "next/head";

import MainTemplate from "../components/templates/MainTemplate";
import Banner from "../components/global/Banner";
import PackageSection from "../components/home/PackageSection";
export default function packages() {
  return (
    <>
      <Head>
        <title>Our Packages - Taraknath Motor Training</title>
        <meta
          name="description"
          content="Standard Package, Home Service Package, Special Package, Scooty Package, Bike Package"
        />
        <meta name="keywords" content="about, company, values, team" />
        <meta property="og:title" content="Our Packages - Taraknath Motor Training" />
        <meta
          property="og:description"
          content="Learn more about our company and values."
        />
      </Head>
      <MainTemplate>
        <Banner />
        <PackageSection />
      </MainTemplate>
    </>
  );
}
