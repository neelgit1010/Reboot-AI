import Head from "next/head";

import MainTemplate from "../components/templates/MainTemplate";
import Banner from "../components/global/Banner";
import ContactSection from "../components/ContactSection";
export default function contact() {
  return (
    <>
      <Head>
        <title>Contact Us - Taraknath Motor Training</title>
        <meta
          name="description"
          content="At New Taraknath Motor Training School, we’re here to help! Whether you’re looking to enroll in our two-wheeler or four-wheeler training programs, need guidance on theoretical exams, or require support with vehicle fitness and insurance, our team is just a call or message away."
        />
        <meta name="keywords" content="about, company, values, team" />
        <meta
          property="og:title"
          content="Contact Us -  Taraknath Motor Training"
        />
        <meta
          property="og:description"
          content="Learn more about our company and values."
        />
      </Head>
      <MainTemplate>
        <Banner />
        <ContactSection />
      </MainTemplate>
    </>
  );
}
