import React from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const Modal = ({ show, handleCloseModal, handleOutsideClick }) => {
  const showHideClassName = show ? "modal show-modal" : "modal hide-modal";

  return (
    <div
      className={showHideClassName}
      onClick={handleOutsideClick}>

      <section className="modal-container col">
        <Header />
        <Main />
        <Footer
          backClick={handleCloseModal}
        />
      </section>
    </div>
  );
}

export default Modal;

// <button
//   onClick={handleCloseModal}>
//   close
// </button>
