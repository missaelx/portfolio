import SectionTitle from "../SectionTitle/SectionTitle";
import missaelxp from '../../assets/img/missaelxp.png';
import {Section} from 'react-scroll-section';

const AboutMe = () => {
    return (
        <Section id={"aboutme"}>
            <section className={"section"} id="#aboutme">
                <div className="container mt-6">
                    <div className="columns">
                        <div className="column">
                            <SectionTitle text={"about me"} />
                            <p className={"block"}>Hi, welcome to my virtual home. My name is <strong className={"has-text-primary"}>Missael</strong>. I'm a software engineer based in Mexico.</p>
                            <p className={"block"}>
                                I really love programming (I started since I was 12 yo), I'm a Javascript lover but I've tried many technologies. I like to look up for the technology that fits best for every project.
                            </p>
                            <p className="block">
                                My hobbies include swimming, running, byking, trekking and just traveling. Also I enjoy working on freelance projects that let me colaborate with interdisciplinary teams. Checkout my apps :)
                            </p>
                        </div>
                        <div className="column is-two-fifths">
                            <img src={missaelxp} alt={"Picture of Missael (me)"}/>
                        </div>
                    </div>
                </div>
            </section>
        </Section>
    )
}

export default AboutMe;