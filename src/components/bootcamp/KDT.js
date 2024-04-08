import React from 'react';
import { Link } from 'react-router-dom';
import { KDT_DATA } from '../../data/KDTLIST';
import classes from './KDT.module.css';

const KDT = () => {
    const IoT = KDT_DATA.filter(data=>data.group==="사물인터넷")
    const AI = KDT_DATA.filter(data=>data.group==="빅데이터")
    const Cloud = KDT_DATA.filter(data=>data.group==="클라우드")
    return (
        <section className={classes.KDTWrapper}>
            <h2>K-digital Training</h2>
            <h3>GSC 추천 교육과정</h3>
            <div>
                <div>
                    <p className={classes.ulTitle}>사물인터넷</p>
                    <ul>
                        {IoT.map(data => (
                            <li key={data.id}>
                                <Link to={data.url} target="_blank">
                                    <img src="/" alt="교육과정 thumbnail" />
                                    <figcaption className="bold">{ data.name}</figcaption>
                                    <p>{ data.description}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <p className={classes.ulTitle}>빅데이터 & 인공지능</p>
                    <ul>
                        {AI.map(data => (
                            <li key={data.id}>
                                <Link to={data.url} target="_blank">
                                    <img src="/" alt="교육과정 thumbnail" />
                                    <figcaption className="bold">{ data.name}</figcaption>
                                    <p>{ data.description}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <p className={classes.ulTitle}>클라우드</p>
                    <ul>
                        {Cloud.map(data => (
                            <li key={data.id}>
                                <Link to={data.url} target="_blank">
                                    <img src="/" alt="교육과정 thumbnail" />
                                    <figcaption className="bold">{ data.name}</figcaption>
                                    <p>{ data.description}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default KDT;