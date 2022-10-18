import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import style from './Footer.module.scss';

export default function Footer() {
  return (
    <div className={style.social__wrap}>
      {/* <div className={style.footer}>
        <div>Lucas Shtorache</div>
        <div className={style.social__link}>
          <a
            className={style.social__link_a}
            href="https://www.instagram.com/lucasshtorache/"
            target="_blank"
            title="Instagram"
            rel="noreferrer"
          >
            <InstagramIcon />
          </a>
          <a
            className={style.social__link_a}
            href="https://www.instagram.com/lucasshtorache/"
            target="_blank"
            title="Instagram"
            rel="noreferrer"
          >
            <WhatsAppIcon />
          </a>
        </div>
        <div>Santos, São Paulo</div>
      </div> */}
      <a href="https://www.instagram.com/lucasshtorache/">@lucasshtorache</a>
    </div>
  );
}
