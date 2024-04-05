import React from 'react';
import TechFResultItem from './TechFResultItem';
import classes from './TechFResult.module.css';

const TechFResult = () => {
    return (
        <div className={classes.techFResultWrapper}>
            <p className={classes.p1}>부트캠프 교육, 고민하지 마세요!</p>
            <p className={classes.p2}>다양한 직무 및 기술 스택에 맞춰 단계별 구성된</p>
            <p className={classes.p2}>맞춤형 교육운영기업 글로벌소프트웨어캠퍼스</p>
            <p>만족도, 수료율, 취업률까지</p>
            <p>최상의 결과를 위해 전담 매니저의 밀착 운영 및 관리</p>
            <ul>
                <TechFResultItem result="95점">만족도</TechFResultItem>
                <TechFResultItem result="90%">수료율</TechFResultItem>
                <TechFResultItem result="80%">취업률</TechFResultItem>
            </ul>
        </div>
    );
};

export default TechFResult;