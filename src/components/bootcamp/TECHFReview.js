import React from 'react';
import TECHFReviewSwiper from './TECHFReviewSwiper';
import classes from './TECHReview.module.css';
import { Link } from 'react-router-dom';

const TECHFReview = () => {
    return (
        <div className={classes.background}>
            <section className={classes.TECHFReviewWrapper}>
                <h2 className="a11yHidden">TECH Frontier 수강 후기</h2>
                <p className={classes.title}>글로벌소프트웨어캠퍼스 TECH Frontier 중 어떤 교육 과정을 수강할 지 고민이라면,</p>
                <p className={classes.title}>이미 경험한 분들의 현장감 있는 후기를 보고 선택하세요.</p>
                <TECHFReviewSwiper />
                <Link to="https://blog.naver.com/globalsoftwarecampus" target="_blank" className={classes.moreReview}>교육후기 더보기</Link>
            </section>
        </div>
    );
};

export default TECHFReview;