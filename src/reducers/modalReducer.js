import { SHOW_MODAL, HIDE_MODAL } from '../actions/types';

const initialState = {
  show: false,
  userNumber: '872251177',
  numberPrefix: '+353 '
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        show: action.payload
      }
    case HIDE_MODAL:
      return {
        ...state,
        show: action.payload
      }
    default:
      return state;
  }
}
