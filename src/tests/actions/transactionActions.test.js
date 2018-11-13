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

describe('Transaction Actions', () => {

  beforeEach(() => {
    store = mockStore({});
  });

  it('should create a SET_SENDING_AMOUNT action', () => {
    expectedActions = [
      { type: 'SET_SENDING_AMOUNT', payload: mockData.amount }
    ];
    store.dispatch(actions.setSendingAmount(mockData.amount));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create a SET_RECEIVING_AMOUNT action', () => {
    expectedActions = [
      { type: 'SET_RECEIVING_AMOUNT', payload: mockData.amount }
    ];
    store.dispatch(actions.setReceivingAmount(mockData.amount));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create a SET_SENDING_INPUT actiont', () => {
    expectedActions = [
      { type: 'SET_SENDING_INPUT', payload: mockData.value }
    ];
    store.dispatch(actions.setSendingInput(mockData.value));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create a SET_RECEIVING_INPUT action', () => {
    expectedActions = [
      { type: 'SET_RECEIVING_INPUT', payload: mockData.value }
    ];
    store.dispatch(actions.setReceivingInput(mockData.value));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create a CALCULATE_SENDING_AMOUNT action', () => {
    let calculatedSendingAmount = (mockData.amount + mockData.fee) * (1 / mockData.rate);
    calculatedSendingAmount = parseFloat(calculatedSendingAmount.toFixed(2));

    expectedActions = [
      { type: 'CALCULATE_SENDING_AMOUNT', payload: calculatedSendingAmount }
    ];

    store.dispatch(actions.calculateSendingAmount(mockData.amount, mockData.rate, mockData.fee));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create a CALCULATE_RECEIVING_AMOUNT action', () => {
    let calculatedReceivingAmount = (mockData.amount * mockData.rate) - mockData.fee;
    calculatedReceivingAmount = parseFloat(calculatedReceivingAmount.toFixed(2));

    expectedActions = [
      { type: 'CALCULATE_RECEIVING_AMOUNT', payload: calculatedReceivingAmount }
    ];

    store.dispatch(actions.calculateReceivingAmount(mockData.amount, mockData.rate, mockData.fee));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create a CALCULATE_SAVINGS action', () => {
    let calculatedSavings = (mockData.amount / 100) * mockData.savingsPercent;

    expectedActions = [
      { type: 'CALCULATE_SAVINGS', payload: calculatedSavings }
    ];

    store.dispatch(actions.calculateSavings(mockData.amount, mockData.savingsPercent));
    expect(store.getActions()).toEqual(expectedActions);
  });

});
