import Hero from "../components/Hero/Hero";
import Navbar from "../components/Nabvar/Navbar";
import NavbarLinksProvider from "../utils/InfoProviders/NavbarLinksProvider";
import AboutMe from "../components/AboutMe/AboutMe";

const Home = () => {
    return(<>
        <Navbar
            navigationLinks={NavbarLinksProvider.navigationLinks}
            actionLinks={NavbarLinksProvider.actionLinks}
        />
        <Hero/>
        <AboutMe />
    </>)
}

export default Home;