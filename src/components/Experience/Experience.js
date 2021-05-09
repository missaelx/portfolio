import {Section} from "react-scroll-section";
import SectionTitle from "../SectionTitle/SectionTitle";
import {useState} from "react";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import ExperienceProvider from "../../utils/InfoProviders/ExperienceProvider";

const Experience = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const experienceElements = ExperienceProvider(currentStep);

    return (
        <Section id={"experience"}>
            <section className="hero is-dark">
                <div className="hero-body">
                    <div className="section">
                        <div className="container">
                            <div className="columns block mb-6">
                                <SectionTitle text={"experience"} />
                            </div>
                            <div className="columns block">
                                <div className="column is-one-quarter">
                                    <aside className="menu">
                                        <ul className="menu-list">
                                            {experienceElements.map((link, i) => (
                                                <li key={i} onClick={() => setCurrentStep(i)}><a className={link.className}>{link.label}</a></li>
                                            ))}
                                        </ul>
                                    </aside>
                                </div>
                                <div className="column">
                                    <ExperienceCard
                                        description={experienceElements[currentStep].description}
                                        company={experienceElements[currentStep].label}
                                        position={experienceElements[currentStep].position}
                                        period={experienceElements[currentStep].period}
                                        />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Section>
    )
}

export default Experience;