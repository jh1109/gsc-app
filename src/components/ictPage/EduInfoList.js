import React from 'react';
import { Link } from 'react-router-dom';
import classes from './EduInfoList.module.css';


const EduInfoList = ({linkTitle, linkUrl, imgSrc}) => {
    return (
        <li className={classes.list}>
            <Link to={linkUrl}>{linkTitle}</Link>
            <img src={imgSrc} alt="각 교육과정 썸네일" />
        </li>
    );
};

export default EduInfoList;