import React from 'react';
import CaseTabBtn from '../cases/CaseTabBtn';
import classes from './ClassroomImageArea.module.css'
import ClassroomSwiper from './ClassroomSwiper';
import { CLASSROOM_IMAGE_DATA } from './classroomImageData';

const ClassroomImageArea = () => {
    return (
        <div>
        <section className={classes.ImageAreaWrapper}>
            <h2>교육장 소개</h2>
            <ul>
                <CaseTabBtn>강의장</CaseTabBtn>
                <CaseTabBtn>STUDIO</CaseTabBtn>
                <CaseTabBtn>기타</CaseTabBtn>
            </ul>
                <ClassroomSwiper dataList={ CLASSROOM_IMAGE_DATA } alt="강의장 사진" />
        </section>
        </div>
    );
};

export default ClassroomImageArea;