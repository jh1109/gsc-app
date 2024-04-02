import React from 'react';
import classes from './Client.module.css';

const Client = ({ client_img_url }) => {
  return (
    <div>
      <img className={classes.client_img} src={client_img_url} alt="과학기술정보통신부" />
    </div>
  );
};

export default Client;