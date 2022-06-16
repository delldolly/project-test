import React from "react";

import "./Button.css";

const Button = ({ label }) => {

    return (
        <div className="button-container">
            <p className="button" lang="th">
                {label}
            </p>
        </div>
    );
};

export default Button;
