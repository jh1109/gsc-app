import React from 'react';
import classes from './FeeDetail.module.css';


const FeeDetail = ({title, sub, subject1, children, comment}) => {
    return (
        <div className={classes.feeDetailWrapper}>
            <div className={classes.titleZone}>
                <p className={classes.title}>{title}</p>
                <p>{sub}</p>
            </div>
            <div className={classes.contentWrapper}>
                <p className={classes.subject}>강의실 정보</p>
                <p className="smallfont1">{subject1}</p>
                <ul>
                    <span className={classes.subject}>사양</span>
                    {children}
                </ul>
                <p className={classes.comment}>{comment}</p>
            </div>
        </div>
    );
};

export default FeeDetail;