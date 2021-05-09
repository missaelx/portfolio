import React from 'react';
import SplitText from "../SplitText/SplitText";
import './Hero.css';
import background_image from '../../assets/img/skyline.jpg';
import SocialMediaContainer from "../SocialMediaContainer/SocialMediaContainer";
const Hero = () => {
    return (
        <section className="hero is-medium" style={{
            backgroundImage: `url(${background_image})`,
        }}>
            <div className="hero-body">
                <SplitText
                    title={"Missael Hernández"}
                    subtitle={"Software engineer".toUpperCase()}
                />
                <SocialMediaContainer />
            </div>
        </section>
    );
}

export default Hero;