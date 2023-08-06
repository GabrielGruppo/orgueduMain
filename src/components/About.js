import React from 'react';
import styles from './About.module.css';
import about from '../images/about.jpg';
import about2 from '../images/about-1.jpg';

const About = () => {
  return (
    <section className={styles.about} id="about">
      <h1 className='heading'>sobre nós</h1>
      <div className={styles.container}>
          <figure className={styles.aboutImage}>
            <img src={about} alt height={500} />
            <img src={about2} alt className={styles.aboutImg} />
          </figure>
          <div className={styles.aboutContent}>
            <h3>Determinados a ajudar</h3>
            <p>
            Somos uma equipe apaixonada de estudantes determinados a superar os desafios da falta de concentração em nossas jornadas educacionais. Cansados de distrações e dificuldades para manter o foco, decidimos unir nossas habilidades em design, programação e psicologia para criar uma solução eficaz: o ConcentraMind.
            </p>
            <p>
            Nossa missão é simples: capacitar estudantes a liberar seu potencial máximo através da organização e do aprimoramento da concentração. Acreditamos que todos merecem uma chance justa de alcançar seus objetivos educacionais, independentemente das dificuldades que enfrentem.
            </p>
            <a href="#" className="btn">
              <span className="text text1">read more</span>
              <span className="text text2" aria-hidden="true">
                read more
              </span>
            </a>
          </div>
      </div>
    </section>
  );
};

export default About;
