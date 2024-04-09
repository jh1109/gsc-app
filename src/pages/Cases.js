import React from 'react';
import CasesContent from '../components/cases/CasesContent';
import Footer from '../components/layout/Footer';
import ICTBanner from '../components/banner/ICTBanner';

const Cases = () => {
    return (
        <>
            <ICTBanner
                    heading="고객 사례"
                    title="글로벌소프트웨어캠퍼스와 함께 성장한 고객 사례"
                    sub1="글로벌 산업을 선도하는 인재를 양성하며"
                    sub2="글로벌소프트웨어캠퍼스와 함께 성장한 고객 사례를 소개합니다."
                    className="ictBanner"
                >
                </ICTBanner>
            <CasesContent />
            <Footer />
        </>
    );
};

export default Cases;