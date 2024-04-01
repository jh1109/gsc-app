import React from 'react';
import classes from './ProcessItem.module.css'

const ProcessItem = ({imgUrl, title, content}) => {
    return (
        <div className={classes.list}>
            <img src={imgUrl} alt="아이콘" />
            <span>{title}</span>
            <p>{content}</p>
        </div>
    );
};

export default ProcessItem;