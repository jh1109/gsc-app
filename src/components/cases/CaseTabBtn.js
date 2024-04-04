import React from 'react';

const CaseTabBtn = ({ children, onSelect, className }) => {
    const style = {
        background: "blue",
        color: "#ffffff"
    };

    
    return (
        <li>
            <button type="button" onClick={onSelect} style={className === "active" ? style : null}>{children}</button>
        </li>
    );
};

export default CaseTabBtn;