import React from 'react';
import Modal from './modal';
import styles from './Subjects.module.css';
import subject from '../images/father.png';
import calendar from '../images/calendar.png'
import notas from '../images/nota.png';
import alarme from '../images/bell.png';
import { Link } from "react-router-dom";
import { useState } from 'react';

const Subjects = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);

  return (
    <section className={styles.subjects} id="ferramentas">
      <h1 className='heading'>nossas ferramentas</h1>

      
      <div className={styles.boxContainer}>     
          <Link to="/canvas" onClick={() => setShowModal(true)}>
            <div className={styles.box}>
              <img src={subject} alt />
              <h3>mapa mental</h3>
              <p>monte sua rotina</p>
              {showModal && (<Modal title={<span>Desenho</span>}/>)}
            </div>
          </Link>
        
          <Link to="/calendar"  onClick={() => setShowModal2(true)}>
            <div className={styles.box}>
              <img src={calendar} alt />
              <h3>calendário</h3>
              <p>não desperdice nenhum dia!</p>
              {showModal2 && (<Modal title={<span>calendar</span>}/>)}
            </div>
            </Link>
            
          <Link to="/notas" onClick={() => setShowModal3(true)}>  
            <div className={styles.box}>
              <img src={notas} alt />
              <h3>Notas</h3>
              <p>Organize-se &amp; anote</p>
              {showModal3 && (<Modal title={<span>Notas</span>}/>)}
            </div>
          </Link>
          <Link to="/notas" onClick={() => setShowModal4(true)}>
            <div className={styles.box}>
              <img src={alarme} alt />
              <h3>Alarmes</h3>
              <p>Mantenha-se em tempo</p>
              {showModal4 && (<Modal title={<span>Relógios</span>}/>)}
            </div>
          </Link>
      </div>
    </section>
  );
};

export default Subjects;
