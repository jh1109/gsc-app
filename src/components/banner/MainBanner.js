import React from 'react';
import classes from './MainBanner.module.css'

const MainBanner = ({ heading, sub1, sub2, className, children }) => {
  return (
    <div className={`${classes.main_banner} ${className ? classes[className] : ""}`}>
      <h2>{ heading }</h2>
      <p>{sub1}</p>
      <p>{sub2}</p>
      {children ? children : null}
    </div>
  );
};

export default MainBanner;