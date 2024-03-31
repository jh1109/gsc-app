import React from 'react';
import classes from './ReviewItem.module.css';

const ReviewItem = ({ reviewContent, imgurl, imgAlt, courseName, firstName }) => {
  return (
    <div className={classes.reviewItemWrapper}>
      <p className="bold bigfont1">
        {reviewContent}
      </p>
      <div className={classes.reviewerArea}>
        <img src={imgurl} alt={imgAlt} />
        <div>
          <span className={`${"smallfont1"} ${classes.courseName}`}>{courseName}</span><br />
          <span className="smallfont1">{`${firstName}**`}</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;