import rateReducer from '../../reducers/rateReducer';
import rateActions from '../../actions/rateActions';

describe('Rate Reducer', () => {
  it('has a default state', () => {
    expect(rateReducer(undefined, { type: 'UNEXPECTED'})).toEqual({
      value: 0.86022
    })
  });
});
