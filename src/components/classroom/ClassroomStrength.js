import React from 'react';
import StrengthItem from './StrengthItem';

import { SiGoogleclassroom } from "react-icons/si";
import { FaUserClock } from "react-icons/fa";
import { TbPigMoney } from "react-icons/tb";
import { FaLaptopCode } from "react-icons/fa6";
import classes from './ClassroomStrength.module.css';

const iconStyle = {
    width: "4rem",
    height: "4rem",
}

const ClassroomStrength = () => {
    return (
        <section className={classes.ClassroomStrengthWrapper}>
            <div>
                <h2>글로벌소프트웨어캠퍼스는<br />교육을 위한 공간에 집중합니다.</h2>
                <ul>
                    <StrengthItem 
                        content="별도의 추가 비용 없이도 최대 30인까지 수용 가능한 쾌적한 강의 환경" >
                        <SiGoogleclassroom style={iconStyle} />    
                    </StrengthItem>
                    <StrengthItem 
                        content="강남역, 양재역 도보 10분 거리 강남 중심의 최적의 접근성" >
                        <FaUserClock style={iconStyle} />    
                    </StrengthItem>
                    <StrengthItem 
                        content="장기 및 기업교육 대관시 최대 00%까지 할인" >
                        <TbPigMoney style={iconStyle} />    
                    </StrengthItem>
                    <StrengthItem 
                        content="최신사향 PC, 빔프로젝터, 음향도구 등 전산 교육 시스템 완비" >
                        <FaLaptopCode style={iconStyle} />    
                    </StrengthItem>

                </ul>
            </div>
        </section>
    );
};

export default ClassroomStrength;