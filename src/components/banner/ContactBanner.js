import React from 'react';
import MainBanner from './MainBanner';
import { Link } from 'react-router-dom';

const ContactBanner = () => {
    return (
        <MainBanner
                heading="무료상담으로 교육에 대한 고민을 해결하세요!"
                sub1="글로벌 첨단 산업을 선도하는 맞춤형 인재 양성 교육을 확인해보세요."
                sub2="문의 내용을 남겨주시면 담당자가 빠른 시일 내에 답변드리겠습니다."
                className="mainPageContact"
            >
                <Link to="/contact">교육 문의하기</Link>
            </MainBanner>
    );
};

export default ContactBanner;