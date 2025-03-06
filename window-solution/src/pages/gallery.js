import GalleryPageSection from "@/components/GalleryPageSection";
import Banner from "@/components/global/Banner";
import MainTemplate from "@/components/templates/MainTemplate";

export default function Gallery() {
    return (
      <>
        <MainTemplate>
          <Banner />
          <GalleryPageSection />
        </MainTemplate>
      </>
    );
}