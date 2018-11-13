import {
  GET_RATE_REQUEST,
  GET_RATE_SUCCESS,
  GET_RATE_FAILURE
}  from '../actions/types';

const initialState = {
  value: 0.86022,
  sendingRequest: false,
  err: 'No error'
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_RATE_REQUEST:
      return {
        ...state,
        sendingRequest: action.sendingRequest
      }
    case GET_RATE_SUCCESS:
      return {
        ...state,
        value: action.payload,
        sendingRequest: action.sendingRequest
      }
    case GET_RATE_FAILURE:
      return {
        ...state,
        err: action.payload,
        sendingRequest: action.sendingRequest
      }
    default:
      return state;
  }
}
