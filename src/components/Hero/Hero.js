import React from 'react';
import TypingText from "../TypingText/TypingText";
import styles from './Hero.module.css';
import SocialMediaContainer from "../SocialMediaContainer/SocialMediaContainer";
const Hero = (props) => {
    return (
        <section className={["hero", "is-medium", styles.mxpHero].join(" ")} style={{
            backgroundImage: props.background,
        }}>
            <div className="hero-body">
                <TypingText
                    title={props.title}
                    subtitle={props.subtitle}
                />
                <SocialMediaContainer />
            </div>
        </section>
    );
}

export default Hero;