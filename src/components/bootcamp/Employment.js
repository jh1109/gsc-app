import React from 'react';
import companyImage from '../../assets/TECHF/employCompany.png';
import classes from './Employment.module.css';

const Employment = () => {
    return (
        <section className={classes.employmentWrapper}>
            <h2>TECH Frontier와 함께한 수료생은 이런 곳에 취업했습니다.</h2>
            <img src={companyImage} alt="우리카드, NH농협은행, LG CNS 등 18개 이상 기업" />
            <p># animation 효과</p>
        </section>
    );
};

export default Employment;