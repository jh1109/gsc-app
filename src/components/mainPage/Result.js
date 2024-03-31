import React from 'react';
import classes from './Result.module.css'
import ResultItem from './ResultItem';

const Result = () => {
  return (
    <div className={`${"mainContent"} ${classes.result}`}>
      <p className="bold bigfont2">숫자로 한눈에 보는 GSC 교육 성과</p>
      <div className={classes.contentArea}>
        <ResultItem subject="교육 만족도" result="95점" />
        <ResultItem subject="누적 교육생" result="6569명" />
        <ResultItem subject="교육 제공 고객" result="61개사" />
        <ResultItem subject="교육 수료율" result="94%" />

      </div>
      <p>*'24년.3 글로벌 소프트웨어캠퍼스 내부 데이터 기준</p>
    </div >
  );
};

export default Result;