import React from 'react';
import SocialMedias from '../SocialMedias';
import './styles.scss';

const Footer = () => {
  return (
    <footer className="Footer">
      <main className="footer__container">
        <h3>Kenai</h3>
        <SocialMedias />
      </main>
    </footer>
  );
};

export default Footer;
