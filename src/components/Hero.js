import React from 'react';
import SplitText from "./SplitText/SplitText";

const Hero = () => {
    return (
        <section className="hero is-medium">
            <div className="hero-body">
                <SplitText
                    title={"Missael Hernández"}
                    subtitle={"Software engineer"}
                />
            </div>
        </section>
    );
}

export default Hero;