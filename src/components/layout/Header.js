import { Link } from 'react-router-dom';
import classes from './Header.module.css';
import { IoIosArrowDown } from "react-icons/io";
import { useState } from 'react';
import NavLiItem from '../header/NavLiItem';

const Header = () => {
    const [ondetail, setOndetail] = useState(false);
    const [arrow, setArrow] = useState(false);
    const [onContact, setOnContact] = useState(false);
    const [contactArrow, setContactArrow] = useState(false);

    const handleMouseOver = () => {
        setOndetail(!ondetail);
        setArrow(!arrow);
    }
    const handleContact = () => {
        setOnContact(!onContact);
        setContactArrow(!contactArrow);
    }

    const serviceList = [{
        name: "맞춤형 ICT 교육",
        usrl: "/service-ICTedu"
    },{
        name: "교육 사례",
        usrl: "/service-cases"
    },{
        name: "교육장 대관",
        usrl: "/service-classroom"
    }]
    const contactList = [{
        name: "교육 문의하기",
        usrl: "/contact"
    },{
        name: "교육장 대관하기",
        usrl: "/contact-classroom"
    }]

    return (
        <div className={classes.headerWrapper}>
         <header className={classes.header}>
            <h1>
                <Link to="/">
                    <img src="/gsc-logo.png" alt="GlobalSoftwareCampus(GSC)" />
                </Link>
            </h1>
            <nav>
                <h2 className="a11yHidden">메인메뉴</h2>
                <ul className={classes.nav_list}>
                    <li className={classes.navLi}>
                        <button type="button" className={classes.navBtn} onClick={handleMouseOver}>서비스 <IoIosArrowDown className={!arrow ? classes.arrowIcon : classes.arrowIconTrans}/></button>
                        {ondetail && <NavLiItem handleMouseOver={handleMouseOver} list={serviceList}/>}
                    </li>
                    <li className={classes.navLi}>
                        <Link to="/b2b">기업교육 <IoIosArrowDown className={classes.arrowIcon}/></Link>
                        <ul>
                            {/* <li>신입사원 DX</li> */}
                            {/* <li>재직자 DX</li> */}
                            {/* <li>C-Level DX</li> */}
                        </ul>
                    </li>
                    <li className={classes.navLi}><Link to="/techfrontiers">부트캠프</Link></li>
                    <li className={classes.navLi}><Link to="/about">회사소개</Link></li>
                    <li className={classes.navLi}>
                        <button type="button" className={classes.navBtn} onClick={handleContact}>문의하기 <IoIosArrowDown className={!contactArrow ? classes.arrowIcon : classes.arrowIconTrans}/></button>
                        {contactArrow && <NavLiItem handleMouseOver={handleContact} list={contactList}/>}
                    </li>
                </ul>
            </nav>

         </header>

        </div>
    )
};

export default Header;