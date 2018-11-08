import { SET_SENDING_AMOUNT, SET_RECEIVING_AMOUNT } from '../actions/types';

const initialState = {
  sending: 0,
  receiving: 0
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_SENDING_AMOUNT:
    console.log(action.payload);
      return {
        ...state,
        sending: action.payload
      }
    case SET_RECEIVING_AMOUNT:
    console.log(action.payload);
      return {
        ...state,
        receiving: action.payload
      }
    default:
      return state;
  }
}
