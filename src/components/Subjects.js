import React from 'react';
import Modal from './modal';
import styles from './Subjects.module.css';
import subject from '../images/father.png';
import calendar from '../images/calendar.png'
import notas from '../images/nota.png';
import alarme from '../images/bell.png';
import Canvas from '../pages/canvas';
import Alarm from '../pages/alarm';
import Notes from '../pages/notas';
import Calendar from '../pages/calendar';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

const Subjects = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [showModal5, setShowModal5] = useState(false);
  const [showModal6, setShowModal6] = useState(false);

  const handleCloseModal = () => {
    console.log("Closing modal");
    setShowModal(false);
  };

  const handleCloseModal2 = () => {
    console.log("Closing modal");
    setShowModal2(false);
  };

  const handleCloseModal3 = () => {
    console.log("Closing modal");
    setShowModal3(false);
  };

  const handleCloseModal4 = () => {
    console.log("Closing modal");
    setShowModal4(false);
  };

  const handleCloseModal5 = () => {
    console.log("Closing modal");
    setShowModal5(false);
  };

  const handleCloseModal6 = () => {
    console.log("Closing modal");
    setShowModal6(false);
  };

  
  
  return (
    <section className={styles.subjects} id="ferramentas">
      <h1 className='heading'>nossas ferramentas</h1>

      
      <div className={styles.boxContainer}>     
          <Link to="/canvas" onClick={() => setShowModal(true)}>
            <div className={styles.box}>
              <img src={subject} alt />
              <h3>mapa mental</h3>
              <p>monte sua rotina</p>  
            </div>
          </Link>
          {showModal && (
              <Modal 
              title={<span>Drawing</span>}
              content={<Canvas />}
              close={handleCloseModal}
              />)}

          <Link to="/calendar"  onClick={() => setShowModal2(true)}>
            <div className={styles.box}>
              <img src={calendar} alt />
              <h3>calendário</h3>
              <p>não desperdice nenhum dia!</p>
            </div>
            </Link>
            {showModal2 && (
              <Modal 
              title={<span>Calendário</span>}
              content={<Calendar />}
              close={handleCloseModal2}
              />)}
            
            <Link to="/notas" onClick={() => setShowModal3(true)}>  
              <div className={styles.box}>
                <img src={notas} alt />
                <h3>Notas</h3>
                <p>Organize-se &amp; anote</p>
              </div>
            </Link>
            {showModal3 && (
                <Modal 
                title={<span>Notes</span>}
                content={<Notes />}
                close={handleCloseModal3}
             />)}

            <Link to="/alarm" onClick={() => setShowModal4(true)}>
              <div className={styles.box}>
                <img src={alarme} alt />
                <h3>Alarmes</h3>
                <p>Mantenha-se em tempo</p>
              </div>
            </Link>
            {showModal4 && (
                <Modal 
                title={<span>Alarmes</span>}
                content={<Alarm />}
                close={handleCloseModal4}
                />)}
        
            <Link to="/alarm" onClick={() => setShowModal5(true)}>
              <div className={styles.box}>
                <img src={alarme} alt />
                <h3>Kanban</h3>
                <p>Mantenha-se em tempo</p>
              </div>
            </Link>
            {showModal5 && (
                <Modal 
                title={<span>Alarmes</span>}
                close={handleCloseModal5}
                />)}
          <QueryClientProvider client={queryClient}>
            <Link to="/todo" onClick={() => setShowModal6(true)}>
              <div className={styles.box}>
                <img src={alarme} alt />
                <h3>To-Do</h3>
                <p>Explore the To-Do list</p>
              </div>
            </Link>
            {showModal6 && (
                <Modal 
                title={<span>To-Do</span>}
                close={handleCloseModal6}
                />)}
          </QueryClientProvider>
      </div>
    </section>
  );
};

export default Subjects;
