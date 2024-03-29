import { Link } from 'react-router-dom';
import MainMenuList from "../header/MainMenuList";

const Header = () => {
    return (
        <header>
            <h1>
                <Link to="/">
                    <img src="/gsc-logo.png" alt="GlobalSoftwareCampus(GSC)"/>
                </Link>
            </h1>
            <nav>
                <h2 className="a11yHidden">메인메뉴</h2>
                <ul>
                    <MainMenuList menu="서비스" menudetail={["맞춤형 ICT교육", "교육 사례", "교육장 대관"]} />
                    <li>
                        <Link to="/b2b">기업교육</Link>
                        <ul>
                            <li>신입사원 DX</li>
                            <li>재직자 DX</li>
                            <li>C-Level DX</li>
                        </ul>
                    </li>
                    <li><Link to="/techfrontiers">부트캠프</Link></li>
                    <li><Link to="/about">회사소개</Link></li>
                    <MainMenuList menu="문의하기" menudetail={["교육 문의하기", "대관 문의하기"]} />
                </ul>
            </nav>

        </header>
    )
};

export default Header;