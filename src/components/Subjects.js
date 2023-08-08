import React from 'react';
import styles from './Subjects.module.css';
import subject from '../images/father.png';
import calendar from '../images/calendar.png'
import notas from '../images/nota.png';
import alarme from '../images/bell.png';

const Subjects = () => {
  return (
    <section className={styles.subjects} id="ferramentas">
      <h1 className='heading'>nossas ferramentas</h1>

      <div className={styles.boxContainer}>
      
          <a href="../pages/canvas.js">
            <div className={styles.box}>
              <img src={subject} alt />
              <h3>mapa mental</h3>
              <p>monte sua rotina</p>
            </div>
          </a>
          <a href="/pages/calendar.html">
            <div className={styles.box}>
              <img src={calendar} alt />
              <h3>calendário</h3>
              <p>não desperdice nenhum dia!</p>
            </div>
          </a>
          <a href="/pages/notas.html">
            <div className={styles.box}>
              <img src={notas} alt />
              <h3>Notas</h3>
              <p>Organize-se &amp; anote</p>
            </div>
          </a>
          <div className={styles.box}>
            <img src={alarme} alt />
            <h3>Alarmes</h3>
            <p>Mantenha-se em tempo</p>
          </div>
        
      </div>
    </section>
  );
};

export default Subjects;
