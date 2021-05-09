import React from 'react';
import TypingText from "../TypingText/TypingText";
import './Hero.css';
import background_image from '../../assets/img/skyline.jpg';
import SocialMediaContainer from "../SocialMediaContainer/SocialMediaContainer";
const Hero = () => {
    return (
        <section className="hero is-medium" style={{
            backgroundImage: `url(${background_image})`,
        }}>
            <div className="hero-body">
                <TypingText
                    title={"Missael Hernández"}
                    subtitle={"Software engineer".toUpperCase()}
                />
                <SocialMediaContainer />
            </div>
        </section>
    );
}

export default Hero;