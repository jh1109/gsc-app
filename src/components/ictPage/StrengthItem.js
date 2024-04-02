import React from 'react';
import classes from './StrengthItem.module.css'

const StrengthItem = ({imgUrl, number, title, content, boldBlue}) => {
    return (
        <div className={classes.itemWrapper}>
            <div className={classes.upper}>
                <img src={imgUrl} alt="아이콘" />
                <span>{number}</span>
                <p>{title}</p>
            </div>
            <p className={`${"smallfont1"} ${classes.pp}`}>{content}
                <span className="boldBlue">{boldBlue}</span></p>
        </div>
    );
};

export default StrengthItem;