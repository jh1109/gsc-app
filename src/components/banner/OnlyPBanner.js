import React from 'react';
import classes from './OnlyPBanner.module.css';

const OnlyPBanner = ({headline, title, sub}) => {
    return (
        <div className={classes.pZoneWrapper}>
            <p className={classes.title}>{headline}</p>
            <p className={classes.content}>{ title }</p>
            <p className={classes.subContent}>{ sub }</p>
        </div>
    );
};

export default OnlyPBanner;