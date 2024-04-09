import React from 'react';
import { Link } from 'react-router-dom';
import classes from './NavLiItem.module.css'


const NavLiItem = ({handleDetailNavOut, list }) => {
    return (
        <ul className={classes.navLiItem}>
            {list.map((item)=>(
                <li key={Math.random()}><Link to={item.usrl} onClick={handleDetailNavOut} className={classes.itemLink }>{item.name}</Link></li>
            ))}
        </ul>
    );
};

export default NavLiItem;