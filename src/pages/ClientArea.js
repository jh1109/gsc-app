import React from 'react';
import Client from '../components/mainPage/Client';
import classes from './ClientArea.module.css'

const ClientArea = () => {
  return (
    <div className={classes.clientWrapper}>
     <div className={`${"mainContent"} ${classes.clientArea}`}>
      <p className={classes.sub}>글로벌 산업을 선도하는 인재를 양성하며</p>
      <p className={classes.title}> GSC와 함께 성장하고 있는 고객</p>
      <div className={classes.clientImgArea}>
        <Client client_img_url="/client/client_01.jpg" />
        <Client client_img_url="/client/client_02.jpg" />
        <Client client_img_url="/client/client_03.jpg" />
        <Client client_img_url="/client/client_04.jpg" />
        <Client client_img_url="/client/client_05.jpg" />
        <Client client_img_url="/client/client_06.jpg" />
        <Client client_img_url="/client/client_07.jpg" />
        <Client client_img_url="/client/client_08.jpg" />
        <Client client_img_url="/client/client_09.jpg" />
        <Client client_img_url="/client/client_10.jpg" />
      </div>
    </div>
    </div>
  );
};

export default ClientArea;