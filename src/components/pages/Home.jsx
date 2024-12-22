import '../../App.css'
import HomeHeroSection from "../Section/HomeSection"
import HomeAboutInfo from "../HomeSectionInfo/HomeAboutInfo"
import HomeExtraInfo from "../HomeSectionInfo/HomeExtraInfo"
import HomeServiceInfo from "../HomeSectionInfo/HomeServiceInfo"
import Footer from "../Footer/Footer"

function Home() {
    return (
        <div>
            <HomeHeroSection />
            <HomeAboutInfo/>
            <HomeExtraInfo/>
            <HomeServiceInfo/>
            <Footer/>
        </div>
    )
}

export default Home