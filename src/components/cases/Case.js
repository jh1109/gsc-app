import React from 'react';
import classes from './Case.module.css';
import { Link } from 'react-router-dom';

const Case = ({id, image, description}) => {
    return (
        <li key={id} className={classes.CaseWrapper}>
            <Link to="https://blog.naver.com/PostList.naver?blogId=globalsoftwarecampus&from=postList&categoryNo=44">
            <img src={image} alt={description} />
            </Link>
            <p>{description}</p>
        </li>
    );
};

export default Case;