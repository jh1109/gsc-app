import React from 'react';
import ICTBanner from '../components/banner/ICTBanner';
import EduInfo from '../components/ictPage/EduInfo';
import Process from '../components/ictPage/Process';
import Strength from '../components/ictPage/Strength';
import Footer from '../components/layout/Footer';
import ContactBanner from '../components/banner/ContactBanner';

const ICTedu = () => {
    return (
        <main>
            <div className="mainContent">
            <ICTBanner />
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