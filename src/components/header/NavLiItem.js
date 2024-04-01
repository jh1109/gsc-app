import React from 'react';
import { Link } from 'react-router-dom';
import classes from './NavLiItem.module.css'


const NavLiItem = ({handleMouseOver}) => {
    return (
        <ul className={classes.navLiItem}>
            <li><Link to="/service-ICTedu" onClick={handleMouseOver}>맞춤형 ICT교육</Link></li>
            <li><Link to="/service-cases" onClick={handleMouseOver}>교육 사례</Link></li>
            <li><Link to="/service-classroom" onClick={handleMouseOver}>교육장 대관</Link></li>
        </ul>
    );
};

export default NavLiItem;