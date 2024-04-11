import React from 'react';
import classes from './StrengthItem.module.css';

const StrengthItem = ({content1, content2, children}) => {
    return (
        <li className={classes.strengthItemWrapper}>
            {children}
            <p>{content1}</p>
            <p>{content2}</p>
        </li>
    );
};

export default StrengthItem;