import MainBanner from "../components/banner/MainBanner";
import Result from "../components/mainPage/Result";
import Review from "../components/mainPage/Review";
import Service from "../components/mainPage/Service";
import Service2 from "../components/mainPage/Service2";
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
        </>
    )
};

export default MainPage;