import React from 'react';

const CaseTabBtn = ({ children, onSelect, className }) => {
    const style = {
        background: "blue",
        color: "#ffffff",
        borderRadius: "20px",
    };

    
    return (
        <li>
            <button type="button" onClick={onSelect} style={className === "active" ? style : null}>{children}</button>
        </li>
    );
};

export default CaseTabBtn;