import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Service.module.css'
import ServiceImage from './ServiceImage';

const Service2 = () => {
  return (
    <section className={classes.service_section}>
      <div className={classes.content_area}>
        <h2 className="boldBlue">교육장 대관</h2>
        <div className={classes.content}>
          <p>교육공간만 필요로 해도 즣습니다. <br /> 교육에만 온전히 집중할 수 있는 강의장을 제공합니다.</p>
        </div>
        <div className={classes.btn_area}>
          <Link to="/" className={classes.big_btn}>교육장 대관 상세보기</Link>
          <Link to="/" className={classes.big_btn}>교육장 대관 문의하기</Link>
        </div>
      </div>
      <ServiceImage />
    </section>
  );
};

export default Service2;