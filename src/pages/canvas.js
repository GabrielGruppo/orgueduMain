import React from 'react';
import './notas.css';

function Notas() {
  return (
    <div className="Notas">
      <header className="modal__container">
        <div className="modal__close">&times;</div>
        <div className="modal__title">
          Title
        </div>
        <div className="modal__conten">
          Content
        </div>
        <div className="modal__footer">
           <button className="btn">Close</button>
        </div>
      </header>
    </div>
  );
}

export default Notas;
