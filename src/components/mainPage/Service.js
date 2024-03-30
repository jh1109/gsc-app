import React from 'react';
import ServiceImage from './ServiceImage'
import { Link } from 'react-router-dom';
import classes from './Service.module.css'

const Service = () => {
  return (
    <section className={classes.service_section}>
      <ServiceImage />
      <div className={classes.content_area}>
        <h2 className="boldBlue">맞춤형 ICT교육</h2>
        <div className={classes.content}>
          <p>빠르게 변화하는 디지털 전환 시대를 선도할 수 있는, <br /> 기술 R&D와 연계한 실무형 프로젝트 교육을 고객 맞춤으로 제공합니다.</p>
        </div>
        <div className={classes.btn_area}>
          <Link to="/" className={classes.big_btn}>맞춤형ICT교육 상세보기</Link>
          <Link to="/b2b" className={classes.small_btn}>기업교육 바로가기</Link>
          <Link to="/techfrontiers" className={classes.small_btn}>부트캠프 바로가기</Link>
        </div>
      </div>

    </section >
  );
};

export default Service;