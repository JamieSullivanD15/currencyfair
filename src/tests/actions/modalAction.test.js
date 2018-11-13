import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from '../../actions/modalActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

let store;
let expectedActions;

describe('Modal Actions', () => {

  beforeEach(() => {
    store = mockStore({});
  });

  it('should create SHOW_MODAL action', () => {
    expectedActions = [
      { type: 'SHOW_MODAL', payload: true }
    ];

    store.dispatch(actions.showModal());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create HIDE_MODAL action', () => {
    expectedActions = [
      { type: 'HIDE_MODAL', payload: false }
    ];

    store.dispatch(actions.hideModal());
    expect(store.getActions()).toEqual(expectedActions);
  });


});
