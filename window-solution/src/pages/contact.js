import ContactPageSection from "@/components/ContactPageSection";
import Banner from "@/components/global/Banner";
import EnquirySection from "@/components/home/EnquirySection";
import MainTemplate from "@/components/templates/MainTemplate";

export default function Contact() {
    return (
      <>
        <MainTemplate>
          <Banner />
          <EnquirySection heading={"Upgrade Your Home with Durable UPVC"} />
          <ContactPageSection />
        </MainTemplate>
      </>
    );
}