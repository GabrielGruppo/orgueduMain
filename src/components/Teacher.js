import React from 'react';
import styles from './Teacher.module.css';
import Lontra from '../images/lontra.png';
const Teacher = () => {
  return (
    <section className={styles.teacher} id="teacher">
      <h1 className='heading'>Porque nos escolher?</h1>

      <div className={styles.boxContainer}>
        <div className={styles.box}>
          <div className={styles.chooseBoxContent1}>
            
            <div className={styles.chooseBox}>
             <i className="fa-solid fa-brain"></i>
             <div className="chooseBoxText">
              <h4>Mapa mental</h4>
              <p>Um mapa mental é uma poderosa ferramenta visual que estimula a criatividade, melhora a organização de ideias e facilita a compreensão de conceitos complexos.</p>
             </div>
            </div>
            <div className={styles.chooseBox}>
            <i className="fa-solid fa-calendar-day"></i>
             <div className="chooseBoxText">
              <h4>Calendário</h4>
              <p>Um calendário ajuda a manter a vida organizada, permitindo o planejamento eficiente de compromissos, tarefas e metas, garantindo maior produtividade e redução do estresse.</p>
             </div>
            </div>
            <div className={styles.chooseBox}>
            <i className="fa-solid fa-note-sticky"></i>
             <div className="chooseBoxText">
              <h4>Notas interativas</h4>
              <p>Notas interativas proporcionam uma forma dinâmica de aprender, envolvendo os sentidos e melhorando a retenção de informações por meio da combinação de texto e elementos interativos.</p>
             </div>
            </div>
          </div>
          <div className={styles.chooseBoxContent2}>
           <img src={Lontra} alt="" />
          </div>
          <div className={styles.chooseBoxContent3}>
          <div className={styles.chooseBox}>
             <i className="fa-solid fa-sitemap"></i>
             <div className="chooseBoxText">
              <h4>Organização</h4>
              <p>A organização é a chave para maximizar a eficiência, reduzir o caos e alcançar o equilíbrio em todas as áreas da vida.</p>
             </div>
            </div>
            <div className={styles.chooseBox}>
            <i className="fa-solid fa-yin-yang"></i>
             <div className="chooseBoxText">
              <h4>Praticidade</h4>
              <p>Praticidade é a chave para simplificar tarefas e atividades, tornando a vida mais eficiente e facilitando o alcance de objetivos de forma rápida e descomplicada.</p>
             </div>
            </div>
            <div className={styles.chooseBox}>
            <i className="fa-solid fa-file-contract"></i>
             <div className="chooseBoxText">
              <h4>Interatividade</h4>
              <p>Interatividade é a capacidade de engajar, envolver e permitir a participação ativa dos usuários em experiências digitais, criando conexões mais significativas e enriquecedoras.</p>
             </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teacher;
