import React from 'react';
import  styles from './modal.module.css';
import { Link } from "react-router-dom";

function Modal({ title, content, close}) {
  return (
    <div className={styles.Modal}>
      <header className={styles.modal__container}>
        
      <Link to={'/'}>
        <div className={styles.modal__close} onClick={()=> close(false)}>&times;</div>
      </Link>
        <div className={styles.modal__title}>
          {title}
        </div>
        <div className={styles.modal__conten}>
          {content}
        </div>
      </header>
    </div>
  );
}

export default Modal;
