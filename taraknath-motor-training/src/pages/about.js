import MainTemplate from "../components/templates/MainTemplate"
import Banner from "../components/global/Banner"
import AboutSection from "../components/home/AboutSection"
import InfoSection from "../components/home/InfoSection"
export default function about() {
    return (
        <MainTemplate>
            <Banner/>
            <AboutSection/>
            <InfoSection/>
        </MainTemplate>
    )
}