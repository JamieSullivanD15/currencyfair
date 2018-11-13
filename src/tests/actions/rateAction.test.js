import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';

import * as actions from '../../actions/rateActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mockData = {
  value: 0.86022,
  sendingRequest: false,
  err: 'No error'
}

let url;
let store;
let expectedActions;

function getData(url) {
  return axios.get(url);
}

describe('Rate Actions', () => {
  beforeEach(async () => {
    store = mockStore({});
  });

  it('should create GET_RATE_REQUEST and GET_RATE_SUCCESS actions given correct params', async () => {
    url =`https://api.exchangeratesapi.io/latest?base=EUR&symbols=GBP`;

    await getData(url).then(res => {
      mockData.value = res.data.rates[Object.keys(res.data.rates)[0]]
    }).catch(err => mockData.err = err);

    expectedActions = [
      { type: 'GET_RATE_REQUEST', sendingRequest: true },
      { type: 'GET_RATE_SUCCESS', sendingRequest: false, payload: mockData.value }
    ];

    return store.dispatch(actions.getRate('EUR', 'GBP'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('should create GET_RATE_REQUEST and GET_RATE_FAILURE actions given incorrect params', async () => {
    url =`https://api.exchangeratesapi.io/latest?base=null&symbols=null`;

    await getData(url).then(res => {
      mockData.value = res.data.rates[Object.keys(res.data.rates)[0]]
    }).catch(err => mockData.err = err);

    expectedActions = [
      { type: 'GET_RATE_REQUEST', sendingRequest: true },
      { type: 'GET_RATE_FAILURE', sendingRequest: false, payload: mockData.err }
    ];

    return store.dispatch(actions.getRate())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

});
