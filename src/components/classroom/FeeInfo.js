import React from 'react';

import { TbArrowBigRightLines } from "react-icons/tb";
import { Link } from 'react-router-dom';
import FeeDetail from './FeeDetail';

import { GrFormSubtract } from "react-icons/gr";
import classes from './FeeInfo.module.css';


const FeeInfo = () => {

    return (
        <div className={classes.feeInfoWrapper}>
            <section>
                <h2>강의실/비대면 스튜디오 이용료</h2>
                <div className={classes.eventArea}>
                    <p>강의장 장기 이용 시 비용 조정 가능!</p>
                    <TbArrowBigRightLines /><TbArrowBigRightLines />
                    <Link to="/contact-classroom">교육장 대관 문의하기</Link>
                </div>
                <div className={classes.detailWrapper}>
                    <FeeDetail title="PC 강의장" sub="1일 8시간 700,000원" subject1="TECH 1 ~ 3 강의장(3개 강의장)" comment="시간 초과 시 시간당 비용 발생">
                        <li><GrFormSubtract />CPU : AMD Ryzen 5 3400G</li>
                        <li><GrFormSubtract />RAM : 32G (DDR4 16G PC4-21300*2)</li>
                        <li><GrFormSubtract />SSD : 240GB</li>
                        <li><GrFormSubtract />모니터 : 27인치</li>
                        <li><GrFormSubtract />빔 프로젝트 : CANON 3600Ansi Full HD</li>
                        <li><GrFormSubtract />각 28석 <span>(최대 30인까지 수용 가능!)</span></li>
                    </FeeDetail>
                    <FeeDetail title="PC 강의장" sub="1일 8시간 700,000원" subject1="TECH 4 ~ 5 강의장(2개 강의장)" comment="시간 초과 시 시간당 비용 발생">
                        <li><GrFormSubtract />CPU : AMD Ryzen 5 PRO 4650G</li>
                        <li><GrFormSubtract />RAM : 32G (DDR4 16G PC4-21300*2)</li>
                        <li><GrFormSubtract />SSD : 256GB</li>
                        <li><GrFormSubtract />모니터 : 27인치</li>
                        <li><GrFormSubtract />빔 프로젝트 : CANON 3600Ansi Full HD</li>
                        <li><GrFormSubtract />각 28석 <span>(최대 30인까지 수용 가능!)</span></li>
                    </FeeDetail>
                    <FeeDetail title="WebCam STUDIO" sub="1일 8시간 220,000원" subject1="TECH 6 ~ 10 강의장(5개 studio)" comment="1~2인 기준 시간당 30,000원">
                        <li><GrFormSubtract />CPU : AMD Ryzen 5 3400G</li>
                        <li><GrFormSubtract />RAM : 32G (DDR4 16G PC4-21300*2)</li>
                        <li><GrFormSubtract />SSD : 240GB</li>
                        <li><GrFormSubtract />CAM : Logitech Stream Cam WEBCAM 화상카메라</li>
                        <li><GrFormSubtract />MIC : RODE NT-USB 컨덴서 마이크 / 마이크 스탠드 PSA1</li>
                        <li><GrFormSubtract />모니터 : 27인치 Dual 제공</li>
                    </FeeDetail>
                </div>
            </section>
        </div>
    );
};

export default FeeInfo;