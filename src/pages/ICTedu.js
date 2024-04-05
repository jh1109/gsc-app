import React from 'react';
import ContactBanner from "../components/banner/ContactBanner";
import ICTBanner from '../components/banner/ICTBanner';
import EduInfo from '../components/ictPage/EduInfo';
import Process from '../components/ictPage/Process';
import Strength from '../components/ictPage/Strength';

const ICTedu = () => {
    return (
        <main>
            <div className="mainContent">
            <ICTBanner />
            <EduInfo/>
            <Process />
            <Strength />
            </div>
            <ContactBanner
                title="무료상담으로 교육에 대한 고민을 해결하세요!"
                sub1="글로벌 첨단 산업을 선도하는 맞춤형 인재 양성 교육을 확인해보세요."
                sub2="문의 내용을 남겨주시면 담당자가 빠른 시일 내에 답변드리겠습니다."
                btnUrl="/contact"
                btn="교육 문의하기" />
        </main>
    );
};

export default ICTedu;