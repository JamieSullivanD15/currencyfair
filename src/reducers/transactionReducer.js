import {
  SET_SENDING_AMOUNT,
  SET_RECEIVING_AMOUNT,
  SET_SENDING_INPUT,
  SET_RECEIVING_INPUT,
  CALCULATE_SENDING_AMOUNT,
  CALCULATE_RECEIVING_AMOUNT
} from '../actions/types';

const initialState = {
  fee: 2.50,
  sending: 0,
  receiving: 0,
  sendingInput: 0,
  receivingInput: 0
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_SENDING_AMOUNT:
      return {
        ...state,
        sending: action.payload
      }
    case SET_RECEIVING_AMOUNT:
      return {
        ...state,
        receiving: action.payload
      }
    case SET_SENDING_INPUT:
      return {
        ...state,
        sendingInput: action.payload
      }
    case SET_RECEIVING_INPUT:
      return {
        ...state,
        receivingInput: action.payload
      }
    case CALCULATE_SENDING_AMOUNT:
      return {
        ...state,
        sending: action.payload,
        sendingInput: action.payload
      }
    case CALCULATE_RECEIVING_AMOUNT:
      return {
        ...state,
        receiving: action.payload,
        receivingInput: action.payload
      }
    default:
      return state;
  }
}
