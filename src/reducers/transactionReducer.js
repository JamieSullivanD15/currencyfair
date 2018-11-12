import {
  SET_SENDING_AMOUNT,
  SET_RECEIVING_AMOUNT,
  SET_SENDING_INPUT,
  SET_RECEIVING_INPUT,
  CALCULATE_SENDING_AMOUNT,
  CALCULATE_RECEIVING_AMOUNT,
  CALCULATE_SAVINGS
} from '../actions/types';

const initialState = {
  sending: 0,
  fee: 2.50,
  sendingInput: '0.00',
  receivingInput: '0.00',
  deliveryDate: '25th November',
  receiving: 0,
  savings: 0,
  savingsPercent: 3.852
  // Savings compared to bank - 66.19 / 1717.94 = 0.03852 * 100 = 3.85%
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
    case CALCULATE_SAVINGS:
      return {
        ...state,
        savings: action.payload
      }
    default:
      return state;
  }
}
