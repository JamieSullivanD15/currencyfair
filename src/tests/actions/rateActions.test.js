import * as actions from '../../actions/rateActions';
import * as types from '../../actions/types';

const initialState = {
  value: 0.86022
}

const expectedAction = {
  type: types.GET_RATE,
  value: 0.651
}

describe('Rate Actions', () => {
  it('should create an action to get currency rate', () => {
    
  });
});
