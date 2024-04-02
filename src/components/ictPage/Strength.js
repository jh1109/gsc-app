import React from 'react';
import classes from './Strength.module.css';
import StrengthItem from './StrengthItem';

const Strength = () => {
   

    return (
        <div className={classes.strengthWrapper}>
            <p className="bold bigfont3">글로벌소프트웨어가 <span className="boldBlue">특별한 2가지 이유</span></p>
            <div className={classes.pZone}>
                <p>상담 때마다 <span className="bold">이미 정해진 교육 콘텐츠만 소개</span>받으셨나요?</p>
                <p>글로벌소프트웨어캠퍼스는 비전공자 입장에서 교육 과정을 직접 개발하고</p>
                <p className="bold">산업별, 직무별 최적의 솔루션을 제공합니다.</p>
            </div>
            <div className={classes.itemWrapper}>
                <StrengthItem
                    imgUrl="/"
                    number="01"
                    title="맞춤형 DX 교육"
                    content="미취업자교육부터 재직자교육까지, 글로벌소프트웨어 교육 전문가들이 고객 맞춤으로 직접 개발한 커리큘럼을 통해 "
                    boldBlue="당장 내일부터 업무에 적용할 수 있는 실무 중심 교육을 만나보세요."
                />
                <StrengthItem
                    imgUrl="/"
                    number="02"
                    title="교육장 보유"
                    content="교육 계획은 가지고 있는데 교육공간이 없어 교육을 미루고 계신가요? "
                    boldBlue="교육에만 온전히 집중할 수 있는 강의장을 확인해보세요."
                />
            </div>
        </div>
    );
};

export default Strength;