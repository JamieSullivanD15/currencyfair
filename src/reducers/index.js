import { combineReducers } from 'redux';
import rateReducer from './rateReducer';
import modalReducer from './modalReducer';
import transactionReducer from './transactionReducer';

export default combineReducers({
  rate: rateReducer,
  modal: modalReducer,
  transaction: transactionReducer
});
