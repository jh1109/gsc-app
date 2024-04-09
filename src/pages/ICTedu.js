import React from 'react';
import EduInfo from '../components/ictPage/EduInfo';
import Process from '../components/ictPage/Process';
import Strength from '../components/ictPage/Strength';
import Footer from '../components/layout/Footer';
import ContactBanner from '../components/banner/ContactBanner';
import ICTBanner from '../components/banner/ICTBanner';
import { Link } from 'react-router-dom';

const ICTedu = () => {
    return (
        <main>
            <div className="mainContent">
                <ICTBanner
                    heading="맞춤형 ICT 교육"
                    title="ICT교육의 새로운 지평을 열다!"
                    sub1="미취업자와 재직자를 위한 ICT 교육, 이제 만족도 100%를 경험하세요."
                    sub2="당신의 성장을 위한 최적의 교육 솔루션을 만나보세요."
                    className="ictBanner"
                >
                    <Link to="/">교육 문의하기</Link>
                </ICTBanner>
            <EduInfo/>
            <Process />
            <Strength />
            </div>
            <ContactBanner />
        <Footer />
        </main>
    );
};

export default ICTedu;