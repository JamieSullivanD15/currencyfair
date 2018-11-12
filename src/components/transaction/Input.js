import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  setSendingAmount,
  setReceivingAmount,
  setSendingInput,
  setReceivingInput,
  calculateSendingAmount,
  calculateReceivingAmount
} from '../../actions/transactionActions';

// User may click on multiple elements within input container, check if the element clicked is a child of the container
function isLocalNode(node, target) {
  while (target && (target.nodeType !== Node.ELEMENT_NODE)) {
    target = target.parentNode;
  }

  return node.contains(target) ? true : false;
}

function applyActive(e, containerClass) {
  e.preventDefault();
  // Get container that was clicked, input field and first child to apply active class
  let container = document.querySelector(`.${containerClass}`);
  let input = document.querySelector(`.${containerClass}-input`);
  let child = container.children[0];
  let receivingForm = document.querySelector('.transaction-receiving').children[0];
  let sendingForm = document.querySelector('.transaction-sending').children[0];

  // Check if the element that was clicked is a child of the container
  if (isLocalNode(container, e.target)) {

    // Remove the active class from opposite input
    // e0e0e0 - gray border 6ec0e6 - primary blue
    if (container.className === 'transaction-sending') {
      receivingForm.classList.remove('transaction-input-active');
      receivingForm.style.borderColor = '#e0e0e0';
      receivingForm.style.borderTopColor = '#6ec0e6';
      sendingForm.style.borderColor = '#6ec0e6';
    } else if (container.className === 'transaction-receiving') {
      sendingForm.classList.remove('transaction-input-active');
      sendingForm.style.borderColor = '#e0e0e0';
      sendingForm.style.borderBottomColor = '#6ec0e6';
      receivingForm.style.borderColor = '#6ec0e6';
    }

    // Apply active class and focus on container input field
    child.classList.add('transaction-input-active');
    input.focus();
    input.select();
  }
}

function handleChange(e, props) {
  e.preventDefault();

  // Prevent numbers greater than 8 digits
  if (e.target.value.length > 8) e.target.value = e.target.value.slice(0, 8);
  changeValues(e.target.value, props);
}

function handleSubmit(e, props) {
  e.preventDefault();

  // Remove active class and focus when submitted, set input 2 decimal places
  let input = document.querySelector(`.${props.class}-input`);
  let value = parseFloat(input.value);
  let container = document.querySelector(`.${props.class}`);
  let receivingForm = document.querySelector('.transaction-receiving').children[0];
  let sendingForm = document.querySelector('.transaction-sending').children[0];
  container.children[0].classList.remove('transaction-input-active');
  receivingForm.style.borderColor = '#e0e0e0';
  sendingForm.style.borderColor = '#e0e0e0';
  input.blur();

  if (props.class === 'transaction-sending') {
    props.setSendingInput(value.toFixed(2));
  } else if (props.class === 'transaction-receiving') {
    props.setReceivingInput(value.toFixed(2));
  }
}

function changeValues(value, props) {
  // If the user is entering values in sending input
  if (props.class === 'transaction-sending') {
    // Set the input value that is being changed
    props.setSendingInput(value);

    // If input is empty, reset other values to zero
    if (value === '') {
      props.setReceivingInput('0.00');
      props.setSendingAmount(0);
      props.setReceivingAmount(0);
    } else {
      // If input is not empty, calculate values based on user input
      value = parseFloat(value);
      props.setSendingInput(value);
      props.setSendingAmount(value);
      props.calculateReceivingAmount(value, props.rate, props.fee);
    }

  // If the user is entering values in receiving input
  } else if (props.class === 'transaction-receiving') {
    props.setReceivingInput(value);

    if (value === '') {
      props.setSendingInput('0.00');
      props.setSendingAmount(0);
      props.setReceivingAmount(0);
    } else {
      value = parseFloat(value);
      props.setReceivingInput(value);
      props.setReceivingAmount(value);
      props.calculateSendingAmount(value, props.rate, props.fee);
    }
  }
}

const Input = (props) => {
  return (
    <a onClick={(e) => applyActive(e, props.class)} className={props.class}>
      <div className="transaction-input-container col">
        <form
          className={`${props.class}-form row`}
          onSubmit={(e) => handleSubmit(e, props)}
        >
          <div>
            <span className="transaction-input-label">
              {props.label}
            </span> <br/>
          <span className="transaction-input-symbol">
              {props.symbol}
            </span>
            <input
              min="3"
              step="0.0001"
              type="number"
              onChange={(e) => handleChange(e, props)}
              onBlur={(e) => handleSubmit(e, props)}
              value={props.value}
              className={`${props.class}-input`}
              name={props.name}
            >
            </input>
          </div>

          <div className="transaction-input-flag-container col">
            <img
              src={props.imgSrc}
              className="transaction-input-flag">
            </img>
          </div>
        </form>
      </div>
    </a>
  );
};

Input.propTypes = {
  setSendingAmount: PropTypes.func.isRequired,
  setReceivingAmount: PropTypes.func.isRequired,
  setSendingInput: PropTypes.func.isRequired,
  setReceivingInput: PropTypes.func.isRequired,
  calculateSendingAmount: PropTypes.func.isRequired,
  calculateReceivingAmount: PropTypes.func.isRequired,
  rate: PropTypes.number.isRequired,
  fee: PropTypes.number.isRequired,
  class: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired
}

const mapStateToProps = state => ({
  rate: state.rate.value,
  fee: state.transaction.fee
});

export default connect (mapStateToProps, {
  setSendingAmount,
  setReceivingAmount,
  setSendingInput,
  setReceivingInput,
  calculateSendingAmount,
  calculateReceivingAmount
})(Input);
