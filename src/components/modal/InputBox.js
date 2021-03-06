import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { hideModal } from '../../actions/modalActions';

// Add focus to the next field when the user has entered an input
function nextField(e, props) {
  const REG = /^\d+$/;

  // Allow user to press enter if input is complete
  if (e.which === 13) {
    if (inputIsComplete()) {
      props.hideModal();
    }
  }

  // Don't allow input or navigate to next field if value is not a number
  if (!(e.target.value.match(REG))) {
    e.target.value = e.target.value.replace(e.target.value, '');
    return;
  }

  // Get id of active input and add 1 to get the next input
  let currentId = Number(e.target.id.split('-')[1]);
  let nextInput = document.querySelector('#input-' + (currentId + 1));

  // Don't call focus when at the last input
  if (currentId === 5) return;
  nextInput.focus();
}

// Check if user has entered more than one number prevent it if so
function checkLength(e) {
  if (e.target.value.length > 1) {
    e.target.value = e.target.value.slice(0, 1);
  }
}

function inputIsComplete() {
  let modalInput = document.querySelector('.modal-main-input');
  let children = modalInput.children;
  let count = 0;

  // Check the number of empty inputs, add active class if input is complete
  for (let i = 0; i < children.length; i++) {
    if (children[i].value === '') ++count;
  }

  return count === 0 ? true : false;
}

// Check if input fields are complete when user enters input
function checkIfComplete(e) {
  e.preventDefault();

  let btn = document.querySelector('.modal-verify-identity');

  if (inputIsComplete()) {
    btn.classList.remove('btn-is-disabled');
    btn.disabled = false;
  } else {
    btn.classList.add('btn-is-disabled');
    btn.disabled = true;
  }
}

const InputBox = (props) => {
  return (
    <input
      type="number"
      className="input-box"
      maxLength="1"
      onKeyUp={(e) => nextField(e, props)}
      onChange={checkLength}
      onInput={checkIfComplete}
      id={'input-' + props.id}>
    </input>
  );
};

InputBox.propTypes = {
  id: PropTypes.number.isRequired,
  hideModal: PropTypes.func.isRequired,
}

export default connect (null, {
  hideModal
})(InputBox);
