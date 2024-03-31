import React from 'react';
import classes from './ResultItem.module.css'

const ResultItem = ({ subject, result }) => {
  return (
    <div className={classes.iconWrapper}>
      <div className={classes.icon}>아이콘</div>
      <p className={`${"bigfont1"} ${classes.title}`}>{subject}</p>
      <p className="bigfont2 boldBlue">{result}</p>
    </div>
  );
};

export default ResultItem;