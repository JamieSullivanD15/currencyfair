import {
  SET_SENDING_AMOUNT,
  SET_RECEIVING_AMOUNT,
  SET_SENDING_INPUT,
  SET_RECEIVING_INPUT,
  CALCULATE_SENDING_AMOUNT,
  CALCULATE_RECEIVING_AMOUNT,
  CALCULATE_SAVINGS
} from './types';

export const setSendingAmount = (amount) => (dispatch) => {
  dispatch({
    type: SET_SENDING_AMOUNT,
    payload: amount
  });
}

export const setReceivingAmount = (amount) => (dispatch) => {
  dispatch({
    type: SET_RECEIVING_AMOUNT,
    payload: amount
  });
}

export const setSendingInput = (value) => (dispatch) => {
  dispatch({
    type: SET_SENDING_INPUT,
    payload: value
  });
}

export const setReceivingInput = (value) => (dispatch) => {
  dispatch({
    type: SET_RECEIVING_INPUT,
    payload: value
  });
}

// Full receiving amount = amount + fee
// GBP to EUR rate = 1 / exchangeRate
// Sending amount = fullAmount * rate
export const calculateSendingAmount = (amount, rate, fee) => (dispatch) => {
  amount = (amount + fee) * (1 / rate);
  amount = parseFloat(amount.toFixed(2));


  dispatch({
    type: CALCULATE_SENDING_AMOUNT,
    payload: amount
  });
}

// Receiving amount = (sendingAmount * rate) - fee
export const calculateReceivingAmount = (amount, rate, fee) => (dispatch) => {
  amount = (amount * rate) - fee;
  amount = parseFloat(amount.toFixed(2));

  dispatch({
    type: CALCULATE_RECEIVING_AMOUNT,
    payload: amount
  });
}

// Savings = (receiving / 100) * savingsPercent
export const calculateSavings = (receiving, savingsPercent) => (dispatch) => {
  let amount = (receiving / 100) * savingsPercent;

  dispatch({
    type: CALCULATE_SAVINGS,
    payload: amount
  });
}
