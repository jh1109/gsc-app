import React from 'react';
import classes from './EduInfo.module.css'
import EduInfoList from './EduInfoList';

const EduInfo = () => {
    return (
        <div className={classes.eduInfoWrapper}>
            <p className={classes.title}>국내 No.1 산업기술 퍼포먼스 그룹</p>
            <p className={classes.subTitle}>세계 첨단산업을 선도하는 기술인력양성 전문 기업</p>
            <div className={classes.listWrapper}>
                <ul className={classes.lists}>
                    <EduInfoList linkTitle="신입사원 DX" linkUrl="/b2b-newcomerDX" imgSrc="/"/>
                    <EduInfoList linkTitle="재직자 DX" linkUrl="/b2b-juniorDX" imgSrc="/"/>
                    <EduInfoList linkTitle="C-Level DX" linkUrl="/b2b-seniorDX" imgSrc="/"/>
                    <EduInfoList linkTitle="부트캠프" linkUrl="/TECHF" imgSrc="/"/>
                </ul>
            </div>
        </div>
    );
};

export default EduInfo;