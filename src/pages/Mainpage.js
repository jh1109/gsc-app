import ContactBanner from "../components/banner/ContactBanner";
import MainBanner from "../components/banner/MainBanner";
import Result from "../components/mainPage/Result";
import Review from "../components/mainPage/Review";
import Service from "../components/mainPage/Service";
import Service2 from "../components/mainPage/Service2";
import Footer from "../components/layout/Footer";
import ClientArea from "./ClientArea";

const MainPage = () => {
    return (
        <>
            <MainBanner />
            <Service />
            <Service2 />
            <ClientArea />
            <Result />
            <Review />
            <ContactBanner
                title="무료상담으로 교육에 대한 고민을 해결하세요!"
                sub1="글로벌 첨단 산업을 선도하는 맞춤형 인재 양성 교육을 확인해 보세요."
                sub2="문의 내용을 남겨주시면 담당자가 빠른 시일 내에 답변드리겠습니다."
                btnUrl="/contact"
                btn="교육 문의하기"
            />
            <Footer />
        </>
    )
};

export default MainPage;