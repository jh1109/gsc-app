import React, { useEffect } from 'react';
import ClassroomBanner from '../components/banner/ClassroomBanner';
import ClassroomImageArea from '../components/classroom/ClassroomImageArea';
import FeeInfo from '../components/classroom/FeeInfo';
import Location from '../components/classroom/Location';
import Footer from '../components/layout/Footer';
import MainBanner from '../components/banner/MainBanner';
import { Link } from 'react-router-dom';


const Classroom = () => {
    useEffect(() => {
        const titleElement = document.getElementsByTagName('title')[0];
        titleElement.innerHTML = "GSC - 교육장 대관"
    })
    return (
        <div>
            <ClassroomBanner />
            <ClassroomImageArea />
            <FeeInfo />
            <Location />
            <MainBanner
                heading="무료상담으로 교육장에 대한 고민을 해결하세요!"
                sub1="최신 장비, 편리한 위치로 교육을 위한 완벽한 공간을 제공합니다."
                sub2="문의 내용을 남겨주시면 담당자가 빠른 시일 내에 답변드리겠습니다."
                className="mainPageContact"
            >
                <Link to="https://booking.naver.com/booking/10/bizes/548221/items/3997384?area=ple&startDate=2024-04-11"
                    target="_blank"
                >교육장 대관 문의하기</Link>
            </MainBanner>
            <Footer />
        </div>
    );
};

export default Classroom;