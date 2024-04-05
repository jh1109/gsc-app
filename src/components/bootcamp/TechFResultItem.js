import React from 'react';
import { BiLike } from "react-icons/bi";
import { LuGraduationCap } from "react-icons/lu";
import { FaBuildingUser } from "react-icons/fa6";

import classes from './TechFResultItem.module.css';

const TechFResultItem = ({children, result}) => {
    let iconClassName;
    
    (children === "만족도") && (iconClassName = <BiLike className={classes.icon}/>);
    (children === "수료율") && (iconClassName = <LuGraduationCap className={classes.icon}/>);
    (children === "취업률") && (iconClassName = <FaBuildingUser className={classes.icon}/>);

    return (
        <li className={classes.techFResultItemWrapper}>
            <div>{iconClassName}</div>
            <p className="bold bigfont2">{children}</p>
            <p className="boldBlue bigfont2">{result}</p>
        </li>
    );
};

export default TechFResultItem;