import React from 'react';
import classes from './Review.module.css';
import ReviewItem from './ReviewItem';
import { Link } from 'react-router-dom';

const Review = () => {
  return (
    <section className={`${"mainContent"} ${classes.reviewWrapper}`}>
      <h2 className="a11yHidden">교육 후기</h2>
      <p className="bold bigfont2">글로벌소프트웨어캠퍼스 교육을 경험한 고객들의 이야기</p>
      <div className={classes.reviewItems}>
        <ReviewItem reviewContent="&ldquo;일하면서 정말로 필요한 내용을 배워서 너무 좋아요!&rdquo;"
          imgurl="memoge/memoge_01.png" imgAlt="후기 작성 교육생 사진" courseName="D사 신입사원 비개발자 교육" firstName="홍" />
        <ReviewItem reviewContent="&ldquo;강사진분들, 운영진분들 너무 좋으십니다~!&rdquo;"
          imgurl="memoge/memoge_02.png" imgAlt="후기 작성 교육생 사진" courseName="새싹 금천캠퍼스 1기" firstName="나" />
        <ReviewItem reviewContent="&ldquo;운영이 정말 체계적입니다.&rdquo;"
          imgurl="memoge/memoge_03.png" imgAlt="후기 작성 교육생 사진" courseName="우리FISA AI엔지니어링 1기" firstName="김" />
        <ReviewItem reviewContent="&ldquo;비전공자로 두려움이 많았는데 단계별로 학습할 수 있어 좋았습니다!!&rdquo;"
          imgurl="memoge/memoge_01.png" imgAlt="후기 작성 교육생 사진" courseName="우리FISA 클라우드 엔지니어링 1기" firstName="노" />
      </div>
      <p className="smallfont1">&#8251; 교육 종료 후 만족도 설문을 통해 수강생이 100% 직접 작성한 내용입니다.</p>
      <div className={classes.btnArea}>
        <Link to="https://blog.naver.com/globalsoftwarecampus" target="_blank" className="bigfont1 bold">교육후기 바로가기</Link>
        <Link to="/service-cases" className="bigfont1 bold">교육사례 바로가기</Link>
      </div>
    </section>
  );
};

export default Review;