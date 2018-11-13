import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';

import * as actions from '../../actions/rateActions';
import * as types from '../../actions/types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Rate Actions', () => {
  const URL =`https://api.exchangeratesapi.io/latest?base=EUR&symbols=GBP`;
  const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));
  let store;
  let httpMock;
  let mockRate = 0.6245;

  beforeEach(() => {
    httpMock = new MockAdapter(axios);
    const mockStore = configureMockStore();
    store = mockStore({});
  });

  function getData() {
    return axios.get(URL);
  }

  it('should add fetch a rate', () => {
    // store = mockStore({});
    // store.dispatch(actions.getRate('EUR', 'GBP'));
    // expect(store.getActions()).toMatchSnapshot();
  });

  it('create GET_RATE_REQUEST and GET_RATE_SUCCESS actions', async () => {
    mockRate = await getData();

    const expectedActions = [
      { type: types.GET_RATE_REQUEST, isFetching: true },
      { type: types.GET_RATE_SUCCESS, isFetching: false, payload: mockRate }
    ];

    actions.getRate('EUR', 'GBP')(store.dispatch);
    await flushAllPromises();
    expect(store.getActions()).toEqual(expectedActions);
  });

  // it('create GET_RATE_REQUEST and GET_RATE_SUCCESS actions', async () => {
  //   store = mockStore({});
  //
  //   mockAxios.get.mockImplementationOnce(() =>
  //     Promise.resolve({ data: mockData }),
  //   )
  //
  //   const expectedActions = [
  //     { type: types.GET_RATE_REQUEST, isFetching: true },
  //     { type: types.GET_RATE_SUCCESS, isFetching: false, payload: mockData }
  //   ];
  //
  //   await store.dispatch(actions.getRate('EUR', 'GBP'))
  //   expect(store.getActions()).toEqual(expectedActions);
  // });

  it('create GET_RATE_REQUEST and GET_RATE_FAILURE actions if params aren\'t supplied', () => {
    // store = mockStore({});
    //
    // const expectedActions = [
    //   { type: types.GET_RATE_REQUEST, isFetching: true },
    //   { type: types.GET_RATE_FAILURE, isFetching: false }
    // ];
    //
    // store.dispatch(actions.getRate());
    // expect(store.getActions()).toEqual(expectedActions);

    // return store.dispatch(actions.getRate())
    //   .then(() => {
    //     expect(store.getActions()).toEqual(expectedActions);
    //   });
  });

});

// it('creates GET_RATE_REQUEST and GET_RATE_SUCCESS actions', () => {
//   axios.get(URL)
//     .then(res => value = res.data.rates[Object.keys(res.data.rates)[0]]);
//
//   const expectedActions = [
//     { type: types.GET_RATE_REQUEST, isFetching: true },
//     { type: types.GET_RATE_SUCCESS, isFetching: false, value: value }
//   ];
//
//   const store = mockStore({ value: 0, isFetching: false });
//
//   return store.dispatch(actions.getRate('EUR', 'GBP'))
//     .then(() => {
//       expect(store.getActions()).toEqual(expectedActions);
//     });
// });



// describe('Rate Actions', () => {
//   afterEach(() => {
//     fetchMock.restore();
//   });
//
//   it('creates GET_RATE_SUCCESS', () => {
//     fetchMock.getOnce('/currency', {
//       value: 0.753
//     });
// ​
//     const expectedActions = [
//       { type: types.GET_RATE_REQUEST },
//       { type: types.GET_RATE_SUCCESS }
//     ];
//
//     const store = mockStore({ value: 0 });
// ​
//     return store.dispatch(actions.getRate()).then(() => {
//       // return of async actions
//       expect(store.getActions()).toEqual(expectedActions);
//     });
//
//   });
// });

//
// describe('Rate Actions', () => {
//   afterEach(() => {
//     fetchMock.restore();
//   });
//
//   it('creates GET_RATE_SUCCESS', () => {
//     fetchMock.getOnce('https://api.exchangeratesapi.io/latest?base=EUR&symbols=GBP', {
//       value: 0.753
//     });
//
//     const expectedActions = [
//       { type: types.GET_RATE_REQUEST },
//       { type: types.GET_RATE_SUCCESS }
//     ];
//
//     const store = mockStore({ value: 0 });
//
//     return store.dispatch(actions.getRate()).then(() => {
//       // return of async actions
//       expect(store.getActions()).toEqual(expectedActions);
//     });
//   }
// });
