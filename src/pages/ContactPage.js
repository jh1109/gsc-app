import { useEffect } from "react";

const ContactPage = () => {
    useEffect(() => {
        const titleElement = document.getElementsByTagName('title')[0];
        titleElement.innerHTML = "GSC - 문의하기"
    })
    return (
        <div>문의하기 페이지 입니다.</div>
    )
};

export default ContactPage;