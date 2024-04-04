import React from 'react';
import CaseTabBtn from '../cases/CaseTabBtn';
import image from '../../assets/classroom/classroom_01.jpg';
import classes from './ClassroomImageArea.module.css'

const ClassroomImageArea = () => {
    return (
        <section className={classes.ImageAreaWrapper}>
            <h2>교육장 소개</h2>
            <ul>
                <CaseTabBtn>강의장</CaseTabBtn>
                <CaseTabBtn>STUDIO</CaseTabBtn>
                <CaseTabBtn>기타</CaseTabBtn>
            </ul>
            <div>
                <img src={image} alt="/이미지" />
                <p>화살표</p>
            </div>
        </section>
    );
};

export default ClassroomImageArea;