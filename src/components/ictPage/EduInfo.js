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
                    <EduInfoList linkTitle="신입사원 DX" linkUrl="/b2b-ojtDX" imgSrc="/"/>
                    <EduInfoList linkTitle="재직자 DX" linkUrl="/b2b-teamsDX" imgSrc="/"/>
                    <EduInfoList linkTitle="C-Level DX" linkUrl="/b2b-CLevelDX" imgSrc="/"/>
                    <EduInfoList linkTitle="부트캠프" linkUrl="/techfrontiers" imgSrc="/"/>
                </ul>
            </div>
        </div>
    );
};

export default EduInfo;