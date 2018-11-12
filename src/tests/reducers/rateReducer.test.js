import rateReducer from '../../reducers/rateReducer';
import * as actions from '../../actions/rateActions';
import * as types from '../../actions/types';

const initialState = {
  value: 0.21
}

const action = {
  type: types.GET_RATE,
  payload: 1.34
}

const afterState = rateReducer(initialState, action);

describe('Rate Reducer', () => {
  it('should have default state of 0.86022', () => {
    expect(rateReducer(undefined, { type: 'UNEXPECTED'})).toEqual({
      value: 0.86022
    })
  });

  it('should be an object', () => {
    expect(afterState).toBeInstanceOf(Object);
  });

  it('should change value in initialState to 1.34', () => {
    expect(afterState.value).toEqual(1.34);
  });

  it('should be greater than zero', () => {
    expect(afterState.value).toBeGreaterThan(0);
  });
});
