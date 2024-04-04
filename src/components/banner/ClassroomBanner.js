import React from 'react';
import classes from './OnlyPBanner.module.css';
import { Link } from 'react-router-dom';


const OnlyPBanner = () => {
    return (
        <div className={`${classes.pZoneWrapper} ${classes.classroomWrapper}`}>
            <p className={`${classes.title} ${classes.classroomTitle}`}>교육장 대관</p>
            <p className={classes.content}>회사에 교육 공간이 없어도,<br />
            교육 계획만 있으면 나머지는 걱정 마세요.</p>
            <p className={classes.subContent}>#강남 중심의 IT교육장 #최신사향 정산장비 완비 #최대 30인 전산 강의장</p>
            <Link to="/contact-classroom" >대관 문의하기</Link>
        </div>
    );
};

export default OnlyPBanner;