import CardGuide from "../components/bootcamp/CardGuide";
import Employment from "../components/bootcamp/Employment";
import KDT from "../components/bootcamp/KDT";
import TECHFReview from "../components/bootcamp/TECHFReview";
import TechFResult from "../components/bootcamp/TechFResult";
import Footer from "../components/layout/Footer";
import MainBanner from '../components/banner/MainBanner';
import { Link } from "react-router-dom";
import ICTBanner from "../components/banner/ICTBanner";


const TECHFPage = () => {
    return (
    <>
            <ICTBanner
                heading="글로벌소프트웨어캠퍼스의 부트캠프"
                title="TECH Frontier"
                sub1="기업과 연계한 실무형 프로젝트 중심 부트캠프,"
                sub2="교육비 0원으로 부담없이 수강해보세요."
                className="techFBanner"
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