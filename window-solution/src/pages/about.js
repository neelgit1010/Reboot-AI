import MainTemplate from "@/components/templates/MainTemplate";
import AboutSection from "@/components/home/AboutSection";
import EnquirySection from "@/components/home/EnquirySection";
import Banner from "@/components/global/Banner";

export default function About() {
    return (
        <>
            <MainTemplate>
                <Banner />
                <AboutSection />
                <EnquirySection />
            </MainTemplate>
        </>
    );
}