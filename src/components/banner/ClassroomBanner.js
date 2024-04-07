import React from 'react';
import { Link } from 'react-router-dom';
import classes from './ClassroomBanner.module.css';
import StrengthItem from '../classroom/StrengthItem';
import { SiGoogleclassroom } from "react-icons/si";
import { FaUserClock } from "react-icons/fa";
import { TbPigMoney } from "react-icons/tb";
import { FaLaptopCode } from "react-icons/fa6";

const iconStyle = {
    width: "4rem",
    height: "4rem",
}


const ClassroomBanner = () => {
    return (
        <div className={classes.classroomBannerWrapper}>
            <p className={classes.classroomTitle }>교육공간만 필요로 해도 좋습니다.<br />
            교육에만 온전히 집중할 수 있는 강의장을 제공합니다.</p>
            <ul>
                    <StrengthItem 
                        content="최대 30인까지 수용 가능한 쾌적한 강의 환경!" >
                        <SiGoogleclassroom style={iconStyle} />    
                    </StrengthItem>
                    <StrengthItem 
                        content="강남역, 양재역 도보 10분! 강남 중심 최적의 접근성" >
                        <FaUserClock style={iconStyle} />    
                    </StrengthItem>
                    <StrengthItem 
                        content="장기 및 기업교육 대관시 최대 00%까지 할인" >
                        <TbPigMoney style={iconStyle} />    
                    </StrengthItem>
                    <StrengthItem 
                        content="최신사향 PC, 빔프로젝터 등 전산 교육 시스템 완비" >
                        <FaLaptopCode style={iconStyle} />    
                    </StrengthItem>

                </ul>
            <Link to="/contact-classroom" >대관 문의하기</Link>
        </div>
    );
};

export default ClassroomBanner;