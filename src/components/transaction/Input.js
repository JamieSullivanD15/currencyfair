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

  // Check if the element that was clicked is a child of the container
  if (isLocalNode(container, e.target)) {
    // Remove the active class from opposite input
    if (container.className === 'transaction-sending') {
      document.querySelector('.transaction-receiving').children[0].classList.remove('transaction-input-active');
    } else if (container.className === 'transaction-receiving') {
      document.querySelector('.transaction-sending').children[0].classList.remove('transaction-input-active');
    }

    // Apply active class and focus on container input field
    child.classList.add('transaction-input-active');
    input.focus();
    input.select();
  }
}

function handleChange(e, props) {
  e.preventDefault();

  // Prevent numbers greater than 9 digits
  if (e.target.value.length > 9) e.target.value = e.target.value.slice(0, 9);

  changeValues(e.target.value, props);
}

function handleSubmit(e, props) {
  e.preventDefault();

  let container = document.querySelector(`.${props.class}`);
  container.children[0].classList.remove('transaction-input-active');
}

function changeValues(value, props) {
  // If the user is entering values into sending input
  if (props.class === 'transaction-sending') {
    // Set the input value that is being changed
    props.setSendingInput(value);

    // If input is empty, reset other values to zero
    if (value === '') {
      props.setReceivingInput(0);
      props.setSendingAmount(0);
      props.setReceivingAmount(0);
    } else {
      // If not empty calculate values based on user input
      value = parseFloat(value);
      props.setSendingAmount(value);
      props.calculateReceivingAmount(value, props.rate, props.fee);
    }

  // If the user is entering values into receiving input
  } else if (props.class === 'transaction-receiving') {
    props.setReceivingInput(value);

    if (value === '') {
      props.setSendingInput(0);
      props.setSendingAmount(0);
      props.setReceivingAmount(0);
    } else {
      value = parseFloat(value);
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
            {props.label} <br/>
            {props.symbol}
            <input
              min="3"
              step="0.01"
              type="number"
              onChange={(e) => handleChange(e, props)}
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
  calculateReceivingAmount: PropTypes.func.isRequired
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
