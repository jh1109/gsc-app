import React from 'react';
import ClassroomStrength from '../components/classroom/ClassroomStrength';
import ClassroomBanner from '../components/banner/ClassroomBanner';

const Classroom = () => {
    return (
        <div>
            <ClassroomBanner />
            <ClassroomStrength />
        </div>
    );
};

export default Classroom;