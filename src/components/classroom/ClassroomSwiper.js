import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import classes from './ClassroomSwiper.module.css';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const ClassroomSwiper = ({ dataList, alt }) => {
    
    const [swiperIndex, setSwiperIndex] = useState(0);
    const [swiper, setSwiper] = useState();

    const handlePrev = () => {
        swiper?.slidePrev()
    }
    const handleNext = () => {
      swiper?.slideNext()
    }
    
    return (
        <div>
            <Swiper
            spaceBetween={50}
            slidesPerView={2}
            onActiveIndexChange={(e)=>setSwiperIndex(e.realIndex)}
            onSwiper={(e) => setSwiper(e)}
            className={ classes.swiperWrapper}
            >
                {dataList.map(item => (
                    <SwiperSlide key={item.id}><img src={item.image} alt={alt} /></SwiperSlide>
                    
                ))}
            </Swiper>
            <div className={classes.navigationWrapper}>
                <button type="button" onClick={handlePrev}><FaArrowLeft className={ classes.arrowIcon} /></button>
                <div>
                    <span>{swiperIndex + 1}</span>
                    <span>{'/ '}</span>
                    <span>{ Math.round((dataList.length + 1)/2) }</span>
                </div>
                <button type="button" onClick={handleNext}><FaArrowRight className={ classes.arrowIcon}/></button>
            </div>
        </div>
    );
};

export default ClassroomSwiper;