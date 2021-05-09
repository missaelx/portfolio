import SectionTitle from "../SectionTitle/SectionTitle";
import Varaapp from "./Varaapp/Varaapp";
import Musik from "./Musik/Musik";
import {Section} from "react-scroll-section";

const Projects = () => {
    return (<>
        <Section id={"projects"}>
            <section className="section">
                <div className="container">
                    <SectionTitle text={"projects"} />
                </div>
            </section>
            <Varaapp/>
            <Musik/>
        </Section>
    </>)
}

export default Projects;