import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./SocialMediaContainer.sass";
import SocialMediaProvider from "../../utils/InfoProviders/SocialMediaProvider";

const SocialMediaContainer = (props) => {

    return (
        <p className="has-text-centered block">
            {SocialMediaProvider.map((link, i) => (
                <a href={link.href} className={"socialIconLink"} key={i}>
                    <FontAwesomeIcon icon={link.icon} size="lg" />
                </a>
            ))}
        </p>
    )
}

export default SocialMediaContainer;