import React from 'react';
import NavbarNavigationLink from "./NavbarNavigationLink/NavbarNavigationLink";
import NavbarActionLink from "./NavbarActionLink/NavbarActionLink";

const Navbar = (props) => {
    return (
        <nav className="navbar is-dark">
            <div className="container">
                <div id="navMenu" className="navbar-menu">
                    {props.navigationLinks && (
                        <div className="navbar-start">
                            {props.navigationLinks.map((link, i) => (
                                <NavbarNavigationLink {...link} key={i} />
                            ))}
                        </div>
                    )}
                    {props.actionLinks &&
                        <div className="navbar-end">
                            <div className="navbar-item">
                                {props.actionLinks.map((link, i) =>
                                    <NavbarActionLink
                                        {...link}
                                        key={i} />
                                )}
                            </div>
                        </div>
                    }
                </div>
            </div>
        </nav>
    );
}

export default Navbar;