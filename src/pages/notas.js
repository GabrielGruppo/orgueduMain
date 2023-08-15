import React from 'react';
import './notas.css';

function Notas({ title, content, close}) {
  return (
    <div className="Notas">
      <header className="modal__container">
      <div className="modal__close" onClick={()=> close()}>&times;</div>
        <div className="modal__title">
          {title}
        </div>
        <div className="modal__conten">
          {content}
        </div>
      </header>
    </div>
  );
}

export default Notas;
