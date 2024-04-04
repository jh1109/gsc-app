import React from 'react';
import ClassroomBanner from '../components/banner/ClassroomBanner';
import ClassroomImageArea from '../components/classroom/ClassroomImageArea';
import FeeInfo from '../components/classroom/FeeInfo';

const Classroom = () => {
    return (
        <div>
            <ClassroomBanner />
            <ClassroomImageArea />
            <FeeInfo />
        </div>
    );
};

export default Classroom;