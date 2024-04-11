/* eslint-disable array-callback-return */
import React, { useState } from 'react';
import classes from './Pagination.module.css';

const Pagination = ({ totalPosts, limit, page, setPage }) => {
    const numPages = Math.ceil(totalPosts / limit);
    const [currPage, setCurrPage] = useState(page);
    let firstNum = currPage - (currPage % 5) + 1;
    let lastNum = currPage - (currPage % 5) + 5;

    return (
        <section className={classes.pagenationSection}>
            <button 
                    onClick={() => {setPage(page-1); setCurrPage(page-2);}} 
                    disabled={page===1}>
                    &lt;
                </button>
                <button 
                    onClick={() => setPage(firstNum)}
                    aria-current={page === firstNum ? "page" : null}>
                    {firstNum}
                </button>
                {Array(3).fill().map((_, i) =>{
                    if(i <=2){
                        return (
                            <button
                                border="true" 
                                key={i+1} 
                                onClick={() => {setPage(firstNum+1+i)}}
                                aria-current={page === firstNum+1+i ? "page" : null}>
                                {firstNum+1+i}
                            </button>
                        )
                    }
                    else if(i>=3){
                        return (
                            <button
                                border="true" 
                                key ={i+1}
                                onClick={() => setPage(lastNum)}
                                aria-current={page === lastNum ? "page" : null}>
                                {lastNum}
                            </button>
                        )  
                    }
                })}
                <button 
                    onClick={() => {setPage(page+1); setCurrPage(page);}} 
                    disabled={page===numPages}>
                    &gt;
                </button>
        </section>
    );
};

export default Pagination;