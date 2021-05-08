import React from 'react';
import "./SplitText.css"
const SplitText = (props) => {
    return (
        <div className="wrapper">
            <div className="typing-title">
                {props.title}
            </div>
            <p className="typing-subtitle">
                {props.subtitle}
            </p>
        </div>
    );
}

export default SplitText;