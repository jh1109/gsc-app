import React from 'react';
import classes from './ICTBanner.module.css'

const ICTBanner = ({heading, title, sub1, sub2, className, children}) => {
  return (
    <section className={`${classes.headingBannerWrapper} ${className ? classes[className] : ""}`}>
      <h2>{heading}</h2>
      <p>{title}</p>
      <p>{sub1}</p>
      <p>{sub2}</p>
      {children ? children : null}
    </section>
  );
};

export default ICTBanner;