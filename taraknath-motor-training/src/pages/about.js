import Head from "next/head";

import MainTemplate from "../components/templates/MainTemplate";
import Banner from "../components/global/Banner";
import AboutSection from "../components/home/AboutSection";
import InfoSection from "../components/home/InfoSection";
export default function about() {
  return (
    <>
      <Head>
        <title>About Us - Taraknath Motor Training</title>
        <meta
          name="description"
          content="New Taraknath Motor Training School is one of the oldest and most trusted motor training schools in Siliguri, dedicated to providing comprehensive driving education. With 20+ years of experience, we have trained thousands of confident drivers, ensuring road safety and responsible driving habits."
        />
        <meta name="keywords" content="about, company, values, team" />
        <meta
          property="og:title"
          content="About Us - Taraknath Motor Training"
        />
        <meta
          property="og:description"
          content="Learn more about our company and values."
        />
      </Head>
      <MainTemplate>
        <Banner />
        <AboutSection />
        <InfoSection />
      </MainTemplate>
    </>
  );
}
