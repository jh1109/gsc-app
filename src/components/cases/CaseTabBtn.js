import React from 'react';

const CaseTabBtn = ({ children, onSelect }) => {
    
    return (
        <li>
            <button type="button" onClick={ onSelect }>{children}</button>
        </li>
    );
};

export default CaseTabBtn;