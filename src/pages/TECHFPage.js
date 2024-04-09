import OnlyPBanner from "../components/banner/OnlyPBanner";
import CardGuide from "../components/bootcamp/CardGuide";
import Employment from "../components/bootcamp/Employment";
import KDT from "../components/bootcamp/KDT";
import TECHFReview from "../components/bootcamp/TECHFReview";
import TechFResult from "../components/bootcamp/TechFResult";
import Footer from "../components/layout/Footer";
import MainBanner from '../components/banner/MainBanner';
import { Link } from "react-router-dom";


const TECHFPage = () => {
    return (
    <>
        <OnlyPBanner
                headline="부트캠프"
                title="TECH Frontier"
                sub="기업의 특화 기술 직무 부트캠프, 교육비 0원으로 부담없이 수강하세요!"
            />
        <KDT />
            <CardGuide />
            <TechFResult />
            <Employment />
            <TECHFReview />
            <MainBanner
                heading="글로벌소프트웨어캠퍼스는 현재 인재 채용 파트너사 모집중"
                sub1="인재 매칭부터 온보딩까지 한번에 해결할 수 있는 교육을 확인해보세요."
                sub2="문의 내용을 남겨주시면 담당자가 빠른 시일 내에 답변드리겠습니다."
                className="mainPageContact"
            >
                <Link to="/contact">파트너사 문의하기</Link>
            </MainBanner>
            <Footer />
    </>
)

};

export default TECHFPage;