import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './EduInfoList.module.css';
import { TbHandFinger } from "react-icons/tb";


const EduInfoList = ({ linkTitle, linkUrl, imgSrc }) => {
    const [seeFingerIcon, setSeeFingerIcon] = useState(false);
    
    const handleFingerIcon = () => {
        setSeeFingerIcon(true);
    }

    const handleFingerIconLeave = () => {
        setSeeFingerIcon(false);
    }

    return (
        <li className={classes.list}>
            <Link to={linkUrl}
                onMouseEnter={handleFingerIcon}
                onMouseLeave={handleFingerIconLeave}
            >
                {linkTitle}<br />
                {seeFingerIcon ? <TbHandFinger className={classes.fingerIcon} /> : null}
            </Link>
            <img src={imgSrc} alt="각 교육과정 썸네일" />
        </li>
    );
};

export default EduInfoList;