import SectionTitle from "../SectionTitle/SectionTitle";
import {Section} from "react-scroll-section";
import SocialMediaContainer from "../SocialMediaContainer/SocialMediaContainer";

const Contact = () => {
    return (
        <Section id={"contact"}>
            <section className="hero is-dark">
                <div className="hero-body">
                    <div className="section">
                        <div className="container">
                            <div className="columns block mb-6">
                                <div className="column">
                                    <SectionTitle className={"has-text-centered"} text={"Get in touch"} />
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column content">
                                    <p className={"has-text-centered"}>Hope you find my virtual home interesting. You can cantact me at the following social media :) </p>
                                    <SocialMediaContainer/>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Section>
    )
}

export default Contact;