import modalReducer from '../../reducers/modalReducer';
import * as actions from '../../actions/rateActions';
import * as types from '../../actions/types';

const initialState = {
  show: false
}

let afterState;
let action;

describe('Rate Reducer Can Handle Actions', () => {

  it('can handle UNEXPECTED', () => {
    action = { type: 'UNEXPECTED', payload: true };
    expect(modalReducer(initialState , action)).toEqual(initialState);
  });

  it('can handle SHOW_MODAL', () => {
    action = {
      type: 'SHOW_MODAL',
      show: true
    };

    afterState = modalReducer(initialState , action);
    expect(modalReducer(initialState , action)).toEqual(afterState);
  });

  it('can handle HIDE_MODAL', () => {
    action = {
      type: 'HIDE_MODAL',
      show: false
    };

    afterState = modalReducer(initialState , action);
    expect(modalReducer(initialState , action)).toEqual(afterState);
  });
});
