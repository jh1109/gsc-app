import React from 'react';
import { Link } from 'react-router-dom';
import classes from './MainBanner.module.css'

const MainBanner = () => {
  return (
    <div className={classes.main_banner}>
      <div className={classes.banner_title}>"글로벌 첨단 산업을 선도하는 인재 양성"</div>
      <div className={classes.banner_content}>
        <p>글로벌소프트웨어캠퍼스는 고객이 필요로 하고 고민하는 ICT교육을 즉시에 개발하고 제공합니다.</p>
        <p>교육에 대한 고민, 글로벌소프트웨어캠퍼스와 함께 해결하세요.</p>

      </div>
      <Link to="/contact">교육 문의하기</Link>
    </div>
  );
};

export default MainBanner;