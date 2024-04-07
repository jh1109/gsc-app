import React from 'react';
import { Link } from 'react-router-dom';
import { KDT_DATA } from '../../data/KDTLIST';
import classes from './KDT.module.css';

const KDT = () => {
    return (
        <section className={classes.KDTWrapper}>
            <h2>K-digital Training</h2>
            <h3>GSC 추천 교육과정</h3>
            <ul>
                {KDT_DATA.map(data => (
                    <li key={data.id}>
                        <Link to={data.url} target="_blank">
                            <img src="/" alt="교육과정 thumbnail" />
                            <figcaption className="bold">{ data.name}</figcaption>
                            <p>{ data.description}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default KDT;