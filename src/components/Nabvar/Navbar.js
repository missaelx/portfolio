import React, {useState} from 'react';
import NavbarNavigationLink from "./NavbarNavigationLink/NavbarNavigationLink";
import NavbarActionLink from "./NavbarActionLink/NavbarActionLink";

const Navbar = (props) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <nav className="navbar is-dark">
            <div className="container">
                <a onClick={() => setIsActive(!isActive)} role="button" className={"navbar-burger " + (isActive ? "is-active": "")} aria-label="menu" aria-expanded="false"
                   data-target="navbarBasicExample">
                    <span aria-hidden="true"/>
                    <span aria-hidden="true"/>
                    <span aria-hidden="true"/>
                </a>
                <div id="navMenu" className={"navbar-menu" + (isActive ? "is-active": "")}>
                    {props.navigationLinks && (
                        <div className="navbar-start">
                            {props.navigationLinks.map((link, i) => (
                                <NavbarNavigationLink {...link} key={i} />
                            ))}
                        </div>
                    )}
                    {props.actionLinks &&
                        <div className="navbar-end">
                            <div className="navbar-item has-text-centered-mobile">
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