import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const Modal = ({ handleCloseModal, show }) => {
  const showHideClassName = show ? "modal show-modal" : "modal hide-modal";

  function outsideClick(e) {
    e.preventDefault();
    const target = e.target.className.split(' ');
    if (target.length >= 2) handleCloseModal();
  }

  return (
    <div
      className={showHideClassName}
      onClick={outsideClick}>

      <section className="modal-container col">
        <Header />
        <Main />
        <Footer />
      </section>
    </div>
  );
}

export default Modal;

// <button
//   onClick={handleCloseModal}>
//   close
// </button>
