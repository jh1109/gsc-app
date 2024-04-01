import React from 'react';
import classes from './Process.module.css'
import ProcessItem from './ProcessItem';


const Process = () => {
    return (
        <div className={classes.processWrapper}>
            <p>
                글로벌소프트웨어캠퍼스는 전문 직무부터 첨단산업 교육까지<br/>
                수행 가능한 교육 전문 기업입니다.    
            </p>
            <p>
                단편적인 기업교육이 아닌 <span className="bold">맞춤형 솔루션</span>으로 기업이 요구하는<br/>
                디지털 전환 교육방법을 제시합니다.    
            </p>
            <div className={classes.lists}>
               <ProcessItem imgUrl="/" title="교육문의" content="IT관련 지식이 없어도 기업의 니즈와 목표를 통한 전담 매니저와 교육 기획"/>
               <ProcessItem imgUrl="/" title="교육설계 및 비용 협의" content="기업의 니즈를 바탕으로 설계된 맞춤형 커리큘럼과 비용 협의"/>
               <ProcessItem imgUrl="/" title="맞춤형 커리큘럼과 전담 강사 배정" content="맞춤형 커리큘럼 구성과 효과적인 목표 달성을 위한 전담 강사 투입"/>
               <ProcessItem imgUrl="/" title="맞춤형 교육 운영" content="원활한 교육을 위한 준비부터 상시 모니터링을 통한 전담 매니저의 밀착 관리"/>
               <ProcessItem imgUrl="/" title="결과 공유" content="교육 내 역량 테스트부터 만족도까지 전체 교육 결과 공유로 효과 확인"/>
                
            </div>
        </div>
    );
};

export default Process;