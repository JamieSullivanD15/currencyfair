import { GET_RATE } from '../actions/types';

const initialState = {
  value: 0
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_RATE:
      console.log('payload');
      console.log(action.payload);
      console.log('state');
      console.log(state.value);
      return {
        ...state,
        value: action.payload
      }
    default:
      return state;
  }
}
