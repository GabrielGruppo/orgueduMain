import React from 'react';
import styles from './Subjects.module.css';
import subject from '../images/father.png';
import calendar from '../images/calendar.png'
import notas from '../images/nota.png';
import alarme from '../images/bell.png';
import { Link } from "react-router-dom";

const Subjects = () => {
  return (
    <section className={styles.subjects} id="ferramentas">
      <h1 className='heading'>nossas ferramentas</h1>

      <div className={styles.boxContainer}>     
          <Link to="/canvas">
            <div className={styles.box}>
              <img src={subject} alt />
              <h3>mapa mental</h3>
              <p>monte sua rotina</p>
            </div>
          </Link>
        
          <Link to="/calendar">
            <div className={styles.box}>
              <img src={calendar} alt />
              <h3>calendário</h3>
              <p>não desperdice nenhum dia!</p>
            </div>
            </Link>
            
          <Link to="/notas">  
            <div className={styles.box}>
              <img src={notas} alt />
              <h3>Notas</h3>
              <p>Organize-se &amp; anote</p>
            </div>
          </Link>
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
