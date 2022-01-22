import React from 'react';
import './styles.scss';

const Modal = ({ onClose = () => {}, children }) => {
  return (
    <main className="Modal" onClick={onClose}>
      <div className="modal__container">
        <button className="btn__close" onClick={onClose}>
        </button>
        <div className="modal__content">{children}</div>
      </div>
    </main>
  );
};

export default Modal;
