import React from 'react';
import classes from './OnlyPBanner.module.css';

const OnlyPBanner = () => {
    return (
        <div className={classes.pZoneWrapper}>
            <p className={classes.title}>고객사례</p>
            <p className={classes.content}>글로벌소프트웨어캠퍼스의 생생한<br />
            교육현장을 확인해보세요.</p>
            <p className={classes.subContent}>글로벌소프트웨어캠퍼스의 교육 현장의 모습을 소개합니다.</p>
        </div>
    );
};

export default OnlyPBanner;