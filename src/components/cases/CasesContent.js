import React from 'react';
import classes from './CasesContent.module.css';

const CasesContent = () => {
    return (
        <div className={`${"mainContent"}`}>
            <ul className={classes.casesUl}>
                <li><button type="button">전체</button><span>|</span></li>
                <li><button type="button">기업</button><span>|</span></li>
                <li><button type="button">기관</button><span>|</span></li>
                <li><button type="button">학교</button><span>|</span></li>
                <li><button type="button">부트캠프</button><span>|</span></li>
                <li><button type="button">기타</button></li>
            </ul>
        </div>
    );
};

export default CasesContent;