import OnlyPBanner from "../components/banner/OnlyPBanner";
import CardGuide from "../components/bootcamp/CardGuide";
import Employment from "../components/bootcamp/Employment";
import KDT from "../components/bootcamp/KDT";
import TECHFReview from "../components/bootcamp/TECHFReview";
import TechFResult from "../components/bootcamp/TechFResult";

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
    </>
)

};

export default TECHFPage;