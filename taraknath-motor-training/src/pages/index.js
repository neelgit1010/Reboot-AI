import MainTemplate from "../components/templates/MainTemplate"
import VideoComponent from "../components/home/VideoComponent";
import InfoSection from "../components/home/InfoSection"
import AboutSection from "../components/home/AboutSection";
import PackageSection from "../components/home/PackageSection";
import ServiceSection from "@/components/home/ServiceSection";
export default function Home() {
  return (
    <MainTemplate>
      <VideoComponent />
      <InfoSection />
      <AboutSection />
      <PackageSection />
      <ServiceSection />
    </MainTemplate>
  );
}