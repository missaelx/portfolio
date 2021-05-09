import Hero from "../components/Hero/Hero";
import Navbar from "../components/Nabvar/Navbar";
import NavbarLinksProvider from "../utils/InfoProviders/NavbarLinksProvider";
import AboutMe from "../components/AboutMe/AboutMe";
import HeroProvider from "../utils/InfoProviders/HeroProvider";
import TecList from "../components/TecList/TecList";
import Experience from "../components/Experience/Experience";

const Home = () => {
    return(<>
        <Navbar
            navigationLinks={NavbarLinksProvider.navigationLinks}
            actionLinks={NavbarLinksProvider.actionLinks}
        />
        <Hero
            background={HeroProvider.backgroundImage}
            title={HeroProvider.title}
            subtitle={HeroProvider.subtitle}
        />
        <AboutMe />
        <TecList/>
        <Experience/>
    </>)
}

export default Home;