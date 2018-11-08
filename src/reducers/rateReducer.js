import { GET_RATE } from '../actions/types';

const initialState = {
  value: 0
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_RATE:
      return {
        ...state,
        value: action.payload
      }
    default:
      return state;
  }
}
