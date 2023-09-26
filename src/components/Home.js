import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <section className={styles.home} id="home">
      <div className={styles.content}>
        <h3>melhore sua organização</h3>
        <p>ConcentraMind: Sua dose diária de foco e organização! 💡📚 Desperte o poder da concentração e conquiste a produtividade com nossa ajuda 🚀</p>
        <a href="#about" className='btn'>
          <span className="text text1">Veja mais</span>
          <span className="text text2" aria-hidden="true">
            veja mais
          </span>
        </a>
      </div>
    </section>
  );
};

export default Home;
