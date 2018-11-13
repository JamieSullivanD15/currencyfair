import axios from 'axios';

import {
  GET_RATE_REQUEST,
  GET_RATE_SUCCESS,
  GET_RATE_FAILURE
}  from './types';

function getRateRequest() {
  return {
    type: GET_RATE_REQUEST,
    sendingRequest: true
  }
}

function getRateSuccess(value) {
  return {
    type: GET_RATE_SUCCESS,
    sendingRequest: false,
    payload: value
  }
}

function getRateFailure(err) {
  return {
    type: GET_RATE_FAILURE,
    sendingRequest: false,
    payload: err
  }
}

export const getRate = (from, to) => (dispatch) => {
  const URL =`https://api.exchangeratesapi.io/latest?base=${from}&symbols=${to}`;

  dispatch(getRateRequest());

  return axios.get(URL)
    .then(res => dispatch(getRateSuccess(res.data.rates[Object.keys(res.data.rates)[0]])))
    .catch(err => dispatch(getRateFailure(err)));
}
