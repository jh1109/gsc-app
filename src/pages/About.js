import { useEffect } from "react";

const AboutPage = () => {
    useEffect(() => {
        const titleElement = document.getElementsByTagName('title')[0];
        titleElement.innerHTML = "GSC - 회사소개"
    })
    return (
        <div>회사소개 페이지입니다.</div>
    )
};

export default AboutPage;