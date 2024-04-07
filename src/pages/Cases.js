import React from 'react';
import OnlyPBanner from '../components/banner/OnlyPBanner';
import CasesContent from '../components/cases/CasesContent';
import Footer from '../components/layout/Footer';

const Cases = () => {
    return (
        <>
            <OnlyPBanner
                headline="고객사례"
                title="글로벌소프트웨어캠퍼스의 생생한 교육현장을 확인해보세요."
                sub="글로벌소프트웨어캠퍼스의 교육 현장의 모습을 소개합니다."
            />
            <CasesContent />
            <Footer />
        </>
    );
};

export default Cases;