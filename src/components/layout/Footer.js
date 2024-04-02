import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={classes.footerBackground}>
            <div className={classes.footerWrapper}>
                <img src="logoBlack.png" alt="글로벌소프트웨어캠퍼스 로고" />
                <div className={classes.contentWrapper}>
                    <p>글로벌소프트웨어캠퍼스(주)</p>
                    <div className={classes.content}>
                        <span>대표이사 : 김성우</span>
                        <span>|</span>
                        <span>사업자등록번호 : 220-88-63489</span>
                    </div>
                    <div className={classes.content}>
                        <span>이메일 : help@gscampus.net</span>
                        <span>|</span>
                        <span>전화번호 : 070-4231-0811</span>
                        <span>|</span>
                        <span>팩스 : 02-546-6789</span>
                    </div>
                    <span>주소 : 서울시 강남구 도곡로 111, 10층 (역삼동, 미진빌딩)</span>
                    <span>Copyright 2013 <span className="bold">GLOBAL SOFTWARE CAMPUS</span> All Rights Reserved.</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;