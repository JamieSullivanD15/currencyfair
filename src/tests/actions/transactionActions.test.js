import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from '../../actions/transactionActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mockData = {
  amount: 5.63,
  value: '7.68',
  rate: 0.896,
  fee: 2.00,
  savingsPercent: 3.85
}

let store;
let expectedActions;
let calculatedSendingAmount = (mockData.amount + mockData.fee) * (1 / mockData.rate);
let calculatedReceivingAmount = (mockData.amount * mockData.rate) - mockData.fee;
let calculatedSavings = (mockData.amount / 100) * mockData.savingsPercent;

calculatedSendingAmount = parseFloat(calculatedSendingAmount.toFixed(2));
calculatedReceivingAmount = parseFloat(calculatedReceivingAmount.toFixed(2));

describe('Transaction Actions', () => {

  beforeEach(() => {
    store = mockStore({});
  });

  it('should create an action to set sending amount', () => {
    expectedActions = [
      { type: 'SET_SENDING_AMOUNT', payload: mockData.amount }
    ];
    store.dispatch(actions.setSendingAmount(mockData.amount));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create an action to set receiving amount', () => {
    expectedActions = [
      { type: 'SET_RECEIVING_AMOUNT', payload: mockData.amount }
    ];
    store.dispatch(actions.setReceivingAmount(mockData.amount));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create an action to set sending input', () => {
    expectedActions = [
      { type: 'SET_SENDING_INPUT', payload: mockData.value }
    ];
    store.dispatch(actions.setSendingInput(mockData.value));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create an action to set receiving input', () => {
    expectedActions = [
      { type: 'SET_RECEIVING_INPUT', payload: mockData.value }
    ];
    store.dispatch(actions.setReceivingInput(mockData.value));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create an action to calculate sending amount', () => {
    expectedActions = [
      { type: 'CALCULATE_SENDING_AMOUNT', payload: calculatedSendingAmount }
    ];
    store.dispatch(actions.calculateSendingAmount(mockData.amount, mockData.rate, mockData.fee));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create an action to calculate receiving amount', () => {
    expectedActions = [
      { type: 'CALCULATE_RECEIVING_AMOUNT', payload: calculatedReceivingAmount }
    ];
    store.dispatch(actions.calculateReceivingAmount(mockData.amount, mockData.rate, mockData.fee));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create an action to calculate savings amount', () => {
    expectedActions = [
      { type: 'CALCULATE_SAVINGS', payload: calculatedSavings }
    ];
    store.dispatch(actions.calculateSavings(mockData.amount, mockData.savingsPercent));
    expect(store.getActions()).toEqual(expectedActions);
  });

});
