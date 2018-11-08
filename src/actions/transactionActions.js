import { SET_SENDING_AMOUNT, SET_RECEIVING_AMOUNT }  from './types';

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
