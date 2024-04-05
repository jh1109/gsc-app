import React from 'react';
import { Link } from 'react-router-dom';
import classes from './ContactBanner.module.css'

const ContactBanner = ({title, sub1, sub2, btnUrl, btn}) => {
  return (
    <div className={classes.main_banner}>
      <div className={classes.banner_title}>{title}</div>
      <div className={classes.banner_content}>
        <p>{sub1}</p>
        <p>{sub2}</p>
      </div>
      <Link to={btnUrl}>{btn}</Link>
    </div>
  );
};

export default ContactBanner;