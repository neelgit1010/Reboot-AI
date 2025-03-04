import Head from "next/head";

import MainTemplate from "../components/templates/MainTemplate";
import VideoComponent from "../components/home/VideoComponent";
import InfoSection from "../components/home/InfoSection";
import AboutSection from "../components/home/AboutSection";
import PackageSection from "../components/home/PackageSection";
import ServiceSection from "@/components/home/ServiceSection";
import FeedbackSection from "@/components/home/FeedbackSection";
export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Taraknath Motor Training</title>
        <meta
          name="description"
          content="Welcome to Taraknath Motor Training, one of the oldest and most trusted car repair service providers in Siliguri."
        />
        <meta name="keywords" content="about, company, values, team" />
        <meta property="og:title" content="Home  - Taraknath Motor Training" />
        <meta
          property="og:description"
          content="Learn more about our company and values."
        />
      </Head>
      <MainTemplate>
        <VideoComponent />
        <InfoSection />
        <AboutSection />
        <PackageSection />
        <ServiceSection />
        <FeedbackSection />
      </MainTemplate>
    </>
  );
}
