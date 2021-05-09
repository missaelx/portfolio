import React from 'react';
import TypingText from "../TypingText/TypingText";
import './Hero.css';
import SocialMediaContainer from "../SocialMediaContainer/SocialMediaContainer";
const Hero = (props) => {
    return (
        <section className="hero is-medium" style={{
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