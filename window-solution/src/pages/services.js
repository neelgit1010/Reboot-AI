import Banner from "@/components/global/Banner";
import ServiceSection from "@/components/home/ServiceSection";
import MainTemplate from "@/components/templates/MainTemplate";

export default function Services() {
    return (
        <>
            <MainTemplate>
                <Banner />
                <ServiceSection />
            </MainTemplate>
        </>
    );
}