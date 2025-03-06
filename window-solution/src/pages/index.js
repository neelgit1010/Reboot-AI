import AboutSection from "@/components/home/AboutSection";
import CustomerSection from "@/components/home/CustomerSection";
import EnquirySection from "@/components/home/EnquirySection";
import GallerySection from "@/components/home/GallerySection";
import HomeBanner from "@/components/home/HomeBanner";
import InfoSection from "@/components/home/InfoSection";
import ServiceSection from "@/components/home/ServiceSection";
import MainTemplate from "@/components/templates/MainTemplate";

export default function Home() {
  return (
    <>
      <MainTemplate>
        <HomeBanner />
        <InfoSection />
        <AboutSection />
        <EnquirySection heading={"Get a Free Quote for UPVC Solutions"} />
        <ServiceSection />
        <GallerySection />
        <CustomerSection />
      </MainTemplate>
    </>
  );
}