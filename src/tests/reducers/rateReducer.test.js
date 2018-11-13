import rateReducer from '../../reducers/rateReducer';

const initialState = {
  value: 0.86022,
  sendingRequest: false,
  err: 'No error'
}

const mockData = {
  value: 0.89652
}

let afterState;
let action;

describe('Rate Reducer Can Handle Actions', () => {

  it('can handle UNEXPECTED', () => {
    action = { type: 'UNEXPECTED', payload: mockData.rate };
    expect(rateReducer(initialState , action)).toEqual(initialState);
  });

  it('can handle GET_RATE_REQUEST', () => {
    action = {
      type: 'GET_RATE_REQUEST',
      sendingRequest: true
    };

    afterState = rateReducer(initialState , action);
    expect(rateReducer(initialState , action)).toEqual(afterState);
  });

  it('can handle GET_RATE_SUCCESS', () => {
    action = {
      type: 'GET_RATE_SUCCESS',
      payload: mockData.value,
      sendingRequest: false
    };

    afterState = rateReducer(initialState , action);
    expect(rateReducer(initialState , action)).toEqual(afterState);
  });

  it('can handle GET_RATE_FAILURE', () => {
    action = {
      type: 'GET_RATE_FAILURE',
      payload: 'There was an error',
      sendingRequest: false
    };

    afterState = rateReducer(initialState , action);
    expect(rateReducer(initialState , action)).toEqual(afterState);
  });
});
