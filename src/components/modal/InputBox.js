import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Add focus to the next field when the user has entered an input
function nextField(e) {
  // Get id of active input and add 1 to get the next input
  let currentId = Number(e.target.id.split('-')[1]);
  let nextInput = document.querySelector('#input-' + (currentId + 1));

  // Don't call focus when at the last input
  if (currentId === 5) return;
  nextInput.focus();
}

// Check if input fields are complete when there is a change
function checkInput() {
  let btn = document.querySelector('.modal-verify-identity');
  let modalInput = document.querySelector('.modal-main-input');
  let children = modalInput.children;
  let count = 0;

  // Check the number of empty inputs, add active class if input is complete
  for (let i = 0; i < children.length; i++) {
    if (children[i].value === '') ++count;
  }

  count === 0 ?
    btn.classList.add('btn-is-active') :
    btn.classList.remove('btn-is-active');
}

const InputBox = (props) => {
  return (
    <input
      type="text"
      className="input-box"
      maxLength="1"
      onKeyPress={nextField}
      onChange={checkInput}
      id={'input-' + props.id}>
    </input>
  );
};

InputBox.propTypes = {
  id: PropTypes.number.isRequired
}

export default connect (null, {})(InputBox);
