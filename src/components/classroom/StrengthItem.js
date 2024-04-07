import React from 'react';
import classes from './StrengthItem.module.css';

const StrengthItem = ({content, children}) => {
    return (
        <li className={classes.strengthItemWrapper}>
            {children}
            <p>{content}</p>
        </li>
    );
};

export default StrengthItem;