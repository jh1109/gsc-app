import React from 'react';
import { Link } from 'react-router-dom';
import classes from './ContactBanner.module.css'

const ContactBanner = () => {
  return (
    <div className={classes.main_banner}>
      <div className={classes.banner_title}>무료상담으로 교육에 대한 고민을 해결하세요!</div>
      <div className={classes.banner_content}>
        <p>글로벌 첨단 산업을 선도하는 맞춤형 인재 양성 교육을 확인해보세요.</p>
        <p>문의 내용을 잠겨주시면 담당자가 빠른 시일 내에 답변드리겠습니다.</p>
      </div>
      <Link to="/contact">교육 문의하기</Link>
    </div>
  );
};

export default ContactBanner;