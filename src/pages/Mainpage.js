import MainBanner from "../components/banner/MainBanner";
import Result from "../components/mainPage/Result";
import Review from "../components/mainPage/Review";
import Service from "../components/mainPage/Service";
import Service2 from "../components/mainPage/Service2";
import Footer from "../components/layout/Footer";
import ClientArea from "./ClientArea";
import { Link } from "react-router-dom";
import ContactBanner from "../components/banner/ContactBanner";
import { useEffect } from "react";

const MainPage = () => {
    useEffect(() => {
        const titleElement = document.getElementsByTagName('title')[0];
        titleElement.innerHTML = "글로벌소프트웨어캠퍼스"
    })
    return (
        <>
            <MainBanner
                heading="글로벌 첨단 산업을 선도하는 인재 양성"
                sub1="글로벌소프트웨어캠퍼스는 고객이 필요로 하고 고민하는 ICT교육을 즉시에 개발하고 제공합니다."
                sub2="교육에 대한 고민, 글로벌소프트웨어캠퍼스와 함께 해결하세요."
                className="mainPageBanner"
            >
                <Link to="/contact">교육 문의하기</Link>
            </MainBanner>
            <Service />
            <Service2 />
            <ClientArea />
            <Result />
            <Review />
            <ContactBanner />
            <Footer />
        </>
    )
};

export default MainPage;