import React from 'react';

const NavbarActionLink = (props) => {
    let buttonLabel;
    switch (props.type){
        case "link":
            buttonLabel = "is-link";
            break;
        default:
            buttonLabel = "is-dark";
    }
    return (
        <div className="buttons">
            <a href={props.href} onClick={props.onClick} className={"button " + buttonLabel}>{props.label}</a>
        </div>
    );
}

export default NavbarActionLink;