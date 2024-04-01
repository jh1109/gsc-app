import { Link } from 'react-router-dom';
import classes from './Header.module.css';
import { IoIosArrowDown } from "react-icons/io";
import { useState } from 'react';
import NavLiItem from '../header/NavLiItem';

const Header = () => {
    const [ondetail, setOndetail] = useState(false);
    const [arrow, setArrow] = useState(false);

    const handleMouseOver = () => {
        setOndetail(!ondetail);
        setArrow(!arrow);
    }

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
                        {ondetail && <NavLiItem handleMouseOver={handleMouseOver}/>}
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
                        <button type="button" className={classes.navBtn}>문의하기 <IoIosArrowDown className={classes.arrowIcon}/></button>
                        <ul>
                            {/* <li>교육 문의하기</li> */}
                            {/* <li>교육장 대관하기</li> */}
                        </ul>
                    </li>
                </ul>
            </nav>

         </header>

        </div>
    )
};

export default Header;