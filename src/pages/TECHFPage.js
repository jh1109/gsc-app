import OnlyPBanner from "../components/banner/OnlyPBanner";
import CardGuide from "../components/bootcamp/CardGuide";
import Employment from "../components/bootcamp/Employment";
import KDT from "../components/bootcamp/KDT";
import TECHFReview from "../components/bootcamp/TECHFReview";
import TechFResult from "../components/bootcamp/TechFResult";
import ContactBanner from "../components/banner/ContactBanner";
import Footer from "../components/layout/Footer";

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
            <ContactBanner
                title="인재 매칭부터 온보딩까지 한번에 해결!"
                sub1="글로벌소프트웨어캠퍼스는 현재 인재 채용 파트너사 모집 중"
                btnUrl="/contact"
                btn="파트너십 문의하기"
            />
            <Footer />
    </>
)

};

export default TECHFPage;