import React from 'react';
import ICTBanner from '../components/banner/ICTBanner';
import EduInfo from '../components/ictPage/EduInfo';
import Process from '../components/ictPage/Process';
import Strength from '../components/ictPage/Strength';

const ICTedu = () => {
    return (
        <main className="mainContent">
            <ICTBanner />
            <EduInfo/>
            <Process />
            <Strength />
        </main>
    );
};

export default ICTedu;