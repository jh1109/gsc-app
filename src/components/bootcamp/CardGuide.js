import React from 'react';
import { TbArrowBigDownLines } from "react-icons/tb";
import { Link } from 'react-router-dom';
import classes from './CardGuide.module.css';

const CardGuide = () => {
    return (
            <div className={classes.cardGuideWrapper}>
                <p className="bold">교육비 0원!</p>
                <p>K-Digital Training 교육은 <span className={classes.boldYellow}>국민내일배움카드 발급이 필수</span>입니다!</p>
                <p>아직 국민내일배움카드가 없으신가요? 글로벌소프트웨어가 알려드릴게요~  </p>
                <div><TbArrowBigDownLines /><TbArrowBigDownLines /><TbArrowBigDownLines /></div>
                <Link to="/" target="_blank" className="bold">국민내일배움카드 발급 가이드 바로가기</Link>
            </div>
    );
};

export default CardGuide;