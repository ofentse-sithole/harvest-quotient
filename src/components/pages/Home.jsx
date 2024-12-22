import '../../App.css'
import HomeHeroSection from "../Section/HomeSection"
import HomeAboutInfo from "../HomeSectionInfo/HomeAboutInfo"
import HomeExtraInfo from "../HomeSectionInfo/HomeExtraInfo"
import HomeServiceInfo from "../HomeSectionInfo/HomeServiceInfo"

function Home() {
    return (
        <div>
            <HomeHeroSection />
            <HomeAboutInfo/>
            <HomeExtraInfo/>
            <HomeServiceInfo/>
        </div>
    )
}

export default Home