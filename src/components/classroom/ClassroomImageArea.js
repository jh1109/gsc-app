import React, { useState } from 'react';
import CaseTabBtn from '../cases/CaseTabBtn';
import classes from './ClassroomImageArea.module.css'
import ClassroomSwiper from './ClassroomSwiper';
import { CLASSROOM_IMAGE_DATA, ETC_IMAGE_DATA, STUDIO_IMAGE_DATA } from './DATA/classroomImageData';

const ClassroomImageArea = () => {
    const [selectedBtn, setSelectedBtn] = useState('강의장');

    const handleCaseTabBtn = (selectedBtn) => {
        setSelectedBtn(selectedBtn);
    }
    return (
        <div>
        <section className={classes.ImageAreaWrapper}>
            <h2>교육장 소개</h2>
            <ul>
                <CaseTabBtn className={selectedBtn === '강의장' ? "active" : ""} onSelect={()=>handleCaseTabBtn('강의장')} >강의장</CaseTabBtn>
                    <CaseTabBtn className={selectedBtn === 'STUDIO' ? "active" : ""} onSelect={() => handleCaseTabBtn('STUDIO')}>STUDIO</CaseTabBtn>
                    <CaseTabBtn className={selectedBtn === '기타' ? "active" : ""} onSelect={() => handleCaseTabBtn('기타')}>편의시설</CaseTabBtn>
            </ul>
                {selectedBtn === '강의장' && <ClassroomSwiper dataList={CLASSROOM_IMAGE_DATA} alt="강의장 사진" classroomInfo="TECH 1 ~ 5 (5개 강의장)" />}
                {selectedBtn === 'STUDIO' && <ClassroomSwiper dataList={STUDIO_IMAGE_DATA} alt="studio 사진" classroomInfo="TECH 6 ~ 10 (5개 STUDIO)" />}
                {selectedBtn === '기타' && <ClassroomSwiper dataList={ETC_IMAGE_DATA} alt="강의장 사진" classroomInfo="휴게실 및 안내데스크" />}
        </section>
        </div>
    );
};

export default ClassroomImageArea;