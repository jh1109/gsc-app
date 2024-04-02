import React from 'react';
import { Link } from 'react-router-dom';
import classes from './ICTBanner.module.css'

const MainBanner = () => {
  return (
    <div className={classes.main_banner}>
      <div className="bigfont2 bold">맞춤형 ICT 교육</div>
      <div className={classes.banner_title}>ICT교육의 새로운 지평을 열다!</div>
      <div className={classes.banner_content}>
        <p>미취업자와 재직자를 위한 ICT교육, 이제 만족도 100%을 경험하세요.</p>
        <p>당신의 성장을 위한 최적의 교육 솔루션을 만나보세요.</p>

      </div>
      <Link to="/contact">교육 문의하기</Link>
    </div>
  );
};

export default MainBanner;