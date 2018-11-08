import { GET_RATE }  from './types';
import axios from 'axios';

export const getRate = (from, to) => (dispatch) => {
  const URL =`https://api.exchangeratesapi.io/latest?base=${from}&symbols=${to}`;

  axios.get(URL)
  .then(res => dispatch({
    type: GET_RATE,
    payload: res.data.rates[Object.keys(res.data.rates)[0]]
  }));
}
