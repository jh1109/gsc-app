import React from 'react';
import ICTBanner from '../components/banner/ICTBanner';
import EduInfo from '../components/ictPage/EduInfo';
import Process from '../components/ictPage/Process';

const ICTedu = () => {
    return (
        <main className="mainContent">
            <ICTBanner />
            <EduInfo/>
            <Process />
        </main>
    );
};

export default ICTedu;