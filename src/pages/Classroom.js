import React from 'react';
import ClassroomBanner from '../components/banner/ClassroomBanner';
import ClassroomImageArea from '../components/classroom/ClassroomImageArea';
import FeeInfo from '../components/classroom/FeeInfo';
import Location from '../components/classroom/Location';

const Classroom = () => {
    return (
        <div>
            <ClassroomBanner />
            <ClassroomImageArea />
            <FeeInfo />
            <Location />
        </div>
    );
};

export default Classroom;