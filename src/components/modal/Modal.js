import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import { hideModal } from '../../actions/modalActions';

class Modal extends Component {
  componentDidUpdate() {
    // Focus first input box when modal is updated
    let modalInput = document.querySelector('.modal-main-input');
    let firstInput = modalInput.children[0];
    firstInput.focus();
  }

  componentDidMount() {
    let verifyButton = document.querySelector('.modal-verify-identity');
    verifyButton.classList.add('btn-is-disabled');
    verifyButton.disabled = true;
  }

  // Close modal if area outside modal container was clicked
  handleOutsideClick(e, props) {
    e.preventDefault();
    if (e.target.className === 'modal show-modal') this.props.hideModal();
  }

  render() {
    let showHideClassName = this.props.show ? "modal show-modal" : "modal hide-modal";

    return (
      <div
        className={showHideClassName}
        onClick={(e) => this.handleOutsideClick(e, this.props)}
      >
        <section className="modal-container col">
          <Header />
          <Main />
          <Footer
            handleBackClick={this.props.hideModal}
          />
        </section>
      </div>
    );
  }
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
