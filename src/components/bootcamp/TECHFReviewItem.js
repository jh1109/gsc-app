import React from 'react';
import classes from './TECHFReviewItem.module.css';

const TECHFReviewItem = ({course, firstName, review}) => {
    return (
        <div className={classes.TECHFReviewItemWrapper}>
            <div className={classes.studentInfo}>
                <div></div>
                <p>★★★★★</p>
                <p className="smallfont1">{ course }</p>
                <p className="smallfont1">{ firstName } ○ ○</p>
            </div>
            <p className={classes.review}>{review}</p>
        </div>
    );
};

export default TECHFReviewItem;