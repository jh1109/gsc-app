import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaBus } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaCarSide } from "react-icons/fa";
import classes from './Location.module.css';
import  techbrewMap  from '../../assets/classroom/techbrewMap.png';

const Location = () => {
    return (
        <section className={classes.locationWrapper}>
            <h2>교통 및 주차</h2>
            <div className={classes.mapWrapper}>
                <img src={techbrewMap} alt="카카오맵 지도" />
                <p># 카카오맵 지도 연결</p>
            </div>
            <p className={classes.address}><FaMapMarkerAlt />서울특별시 강남구 도곡로 112, 서한빌딩 3층 테크브루 아카데미</p>
            <div className={classes.transportWrapper}>
                <div className={classes.transport}>
                    <FaBus />
                    <span>대중교통</span>
                    <p>- 2호선 강남역 8번 출구에서 340번 승차 <IoIosArrowRoundForward/> 뱅뱅사거리 뱅뱅프라자 하차</p>
                    <p>- 2호선 강남역 4번 출구에서 420번 승차 <IoIosArrowRoundForward/> 뱅뱅사거리 뱅뱅프라자 하차</p>
                    <p>- 3호선 양재역 3번 출구에서 도보 약 6분 거리</p>
                </div>
                <div className={classes.transport}>
                    <FaCarSide />
                    <span>자동차</span>
                    <p>- 최초 30분 : 2,000원, 이후 10분마다 1,000원 추가</p>
                    <p>- 최초 1시간 : 5,000원, 이후 1시간마다 6,000원</p>
                    <p>- 전일(1일) : 40,000원</p>
                    <p className="smallfont1">&#8251; 07:00 ~ 20:00</p>
                </div>
            </div>
        </section>
    );
};

export default Location;