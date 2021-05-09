import React from 'react';

const NavbarNavigationLink = (props) => {
    return (
        <a href={props.href} className="navbar-item has-text-centered-mobile">
            {props.label}
        </a>
    )
}

export default NavbarNavigationLink;