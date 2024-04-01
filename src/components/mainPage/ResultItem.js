import React from 'react';
import classes from './ResultItem.module.css'

const ResultItem = ({ imgUrl, imgAlt, subject, result }) => {
  return (
    <div className={classes.iconWrapper}>
      <img src={imgUrl} alt={imgAlt} className={classes.icon}/>
      <p className={`${"bigfont1"} ${classes.title}`}>{subject}</p>
      <p className="bigfont2 boldBlue">{result}</p>
    </div>
  );
};

export default ResultItem;