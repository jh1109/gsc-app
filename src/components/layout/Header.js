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
    const [onb2b, setOnb2b] = useState(false);
    const [b2bArrow, setb2bArrow] = useState(false);

    const handleContactDetailNav = () => {
        setOnContact(true);
        setContactArrow(true);
    }
    const handleContactDetailNavOut = () => {
        setOnContact(false);
        setContactArrow(false);
    }
    const handleB2bDetailNav = () => {
        setOnb2b(true);
        setb2bArrow(true);
    }
    const handleB2bDetailNavOut = () => {
        setOnb2b(false);
        setb2bArrow(false);
    }

    const handleDetailNav = () => {
        setOndetail(true);
        setArrow(true);
    }
    const handleDetailNavOut = () => {
        setOndetail(false);
        setArrow(false);
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
    const b2bList = [{
        name: "신입사원 DX",
        usrl: "/b2b-ojtDX"
    },{
        name: "재직자 DX",
        usrl: "/b2b-teamsDX"
    },{
        name: "C-Level DX",
        usrl: "/b2b-CLevelDX"
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
                    <li className={classes.navLi} onMouseEnter={handleDetailNav} onMouseLeave={handleDetailNavOut}>
                        <button type="button" className={classes.navBtn} >서비스 <IoIosArrowDown className={!arrow ? classes.arrowIcon : classes.arrowIconTrans}/></button>
                            {ondetail && <NavLiItem handleDetailNavOut={ handleDetailNavOut } list={serviceList} />}
                    </li>
                    <li className={classes.navLi} onMouseEnter={handleB2bDetailNav} onMouseLeave={handleB2bDetailNavOut}>
                        <button type="button" className={classes.navBtn}>기업교육 <IoIosArrowDown className={!b2bArrow ? classes.arrowIcon : classes.arrowIconTrans}/></button>
                        {onb2b && <NavLiItem handleDetailNavOut={ handleB2bDetailNavOut } list={b2bList}/>}
                    </li>
                    <li className={classes.navLi}><Link to="/techfrontiers">부트캠프</Link></li>
                    <li className={classes.navLi}><Link to="/about">회사소개</Link></li>
                    <li className={classes.navLi} onMouseEnter={handleContactDetailNav} onMouseLeave={handleContactDetailNavOut}>
                        <button type="button" className={classes.navBtn}>문의하기 <IoIosArrowDown className={!contactArrow ? classes.arrowIcon : classes.arrowIconTrans}/></button>
                        {onContact && <NavLiItem handleDetailNavOut={ handleContactDetailNavOut } list={contactList}/>}
                    </li>
                </ul>
            </nav>

         </header>

        </div>
    )
};

export default Header;