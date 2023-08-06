import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.boxContainer}>
        <div className={styles.box}>
          <h3>find us here</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum beatae.</p>
          <div className={styles.share}>
            <a href="#" className="fab fa-facebook-f"></a>
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-instagram"></a>
            <a href="#" className="fab fa-linkedin"></a>
          </div>
        </div>

        <div className={styles.box}>
          <h3>contact us</h3>
          <p>+1234 587 1478</p>
          <a href="#" className={styles.link}>gabrielgroppo5@gmail.com</a>
        </div>

        <div className={styles.box}>
          <h3>localization</h3>
          <p>230 points of the pines </p>
          <p>colorado springs</p>
          <p>united states</p>
        </div>
      </div>
      <div className={styles.credit}>created by <span>Gabriel Maia</span>| all rights are reserved!</div>
    </section>
  );
};

export default Footer;
