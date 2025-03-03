import MainTemplate from "../components/templates/MainTemplate"
import VideoComponent from "../components/home/VideoComponent";
import InfoSection from "../components/home/InfoSection"
import AboutSection from "../components/home/AboutSection";
import PackageSection from "../components/home/PackageSection";
import ServiceSection from "@/components/home/ServiceSection";
import FeedbackSection from "@/components/home/FeedbackSection";
export default function Home() {
  return (
    <MainTemplate>
      <VideoComponent />
      <InfoSection />
      <AboutSection />
      <PackageSection />
      <ServiceSection />
      <FeedbackSection />
    </MainTemplate>
  );
}