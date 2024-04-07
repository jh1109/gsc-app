import React from 'react';
import ClassroomBanner from '../components/banner/ClassroomBanner';
import ClassroomImageArea from '../components/classroom/ClassroomImageArea';
import FeeInfo from '../components/classroom/FeeInfo';
import Location from '../components/classroom/Location';
import ContactBanner from '../components/banner/ContactBanner';
import Footer from '../components/layout/Footer';

const Classroom = () => {
    return (
        <div>
            <ClassroomBanner />
            <ClassroomImageArea />
            <FeeInfo />
            <Location />
            <ContactBanner
                title="교육장에 대한 고민을 해결하세요!"
                sub1="문의 내용을 남겨주시면 담당자가 빠른 시일 내에 답변드리겠습니다."
                btnUrl="/contact-classroom"
                btn="교육장 대관 문의하기"
            />
            <Footer />
        </div>
    );
};

export default Classroom;