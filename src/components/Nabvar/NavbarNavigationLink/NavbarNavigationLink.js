import React from 'react';
import {useScrollSection} from 'react-scroll-section';

const NavbarNavigationLink = (props) => {
    const targetSection = useScrollSection(props.href);
    return (
        <a onClick={targetSection.onClick} href={props.href} className="navbar-item has-text-centered-mobile">
            {props.label}
        </a>
    )
}

export default NavbarNavigationLink;