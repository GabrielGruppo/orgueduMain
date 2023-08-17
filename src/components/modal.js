import React from 'react';
import  styles from './modal.module.css';

function Modal({ title, content, close}) {
  return (
    <div className={styles.Modal}>
      <header className={styles.modal__container}>
      <div className={styles.modal__close} onClick={()=> close(false)}>&times;</div>
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
