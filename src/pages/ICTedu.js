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
            <ContactBanner />
        </main>
    );
};

export default ICTedu;