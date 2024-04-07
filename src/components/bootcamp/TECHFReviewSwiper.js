import { Pagination } from 'swiper/modules';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {TECHF_REVIEW_DATA} from '../../data/TECHFReviewData';

import 'swiper/css';
import 'swiper/css/pagination';
import classes from './TECHFReviewSwiper.module.css';
import TECHFReviewItem from './TECHFReviewItem';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";


const TECHFReviewSwiper = () => {
    const [swiper, setSwiper] = useState();

    const handlePrev = () => {
        swiper?.slidePrev()
    }
    const handleNext = () => {
      swiper?.slideNext()
    }

    return (
        <div className={classes.TECHFReviewSwiperWrapper}>
            <Swiper
            modules={[Pagination]}    
            spaceBetween={50}
                slidesPerView={3}
                pagination={{ clickable: true }}
            onSwiper={(e) => setSwiper(e)}
            className={ classes.swiperWrapper}
            >
                {TECHF_REVIEW_DATA.map(item => (
                    <SwiperSlide key={item.id}><TECHFReviewItem course={item.course} firstName={item.firstName} review={ item.review} /></SwiperSlide>
                    
                ))}
            </Swiper>
            <div className={classes.navigationWrapper}>
                <button type="button" onClick={handlePrev}><IoIosArrowDropleftCircle className={ classes.arrowIcon} /></button>
                <button type="button" onClick={handleNext}><IoIosArrowDroprightCircle className={ classes.arrowIcon}/></button>
            </div>
        </div>
    );
};

export default TECHFReviewSwiper;