import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import { hideModal } from '../../actions/modalActions';

// Close modal if area outside modal container was clicked
function handleOutsideClick(e, props) {
  e.preventDefault();
  if (e.target.className === 'modal show-modal') props.hideModal();
}

const Modal = (props) => {
  let showHideClassName = props.show ? "modal show-modal" : "modal hide-modal";

  return (
    <div
      className={showHideClassName}
      onClick={(e) => handleOutsideClick(e, props)}
    >
      <section className="modal-container col">
        <Header />
        <Main />
        <Footer
          handleBackClick={props.hideModal}
        />
      </section>
    </div>
  );
}

Modal.propTypes = {
  hideModal: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  show: state.modal.show,
});

export default connect (mapStateToProps, {
  hideModal
})(Modal);
