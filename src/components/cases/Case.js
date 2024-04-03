import React from 'react';
import classes from './Case.module.css';
import { Link } from 'react-router-dom';

const Case = ({item}) => {
    return (
        <li className={classes.CaseWrapper}>
            <Link to="https://blog.naver.com/PostList.naver?blogId=globalsoftwarecampus&from=postList&categoryNo=44">
                <img src={item.image} alt={item.description} />
            </Link>
            <p>{item.description}</p>
        </li>
    );
};

export default Case;