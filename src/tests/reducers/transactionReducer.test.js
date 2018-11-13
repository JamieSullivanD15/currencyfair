import transactionReducer from '../../reducers/transactionReducer';

const mockData = {
  amount: 5.63,
  value: '2.345'
}

const initialState  = {
  sending: 0,
  fee: 2.50,
  sendingInput: '0.00',
  receivingInput: '0.00',
  deliveryDate: '25th November',
  receiving: 0,
  savings: 0,
  savingsPercent: 3.852
}

let action;

describe('Transaction Reducer Can Handle Actions', () => {

  it('can handle UNEXPECTED', () => {
    action = { type: 'UNEXPECTED', payload: mockData.amount };
    expect(transactionReducer(undefined , action)).toEqual(initialState);
  });

  it('can handle SET_SENDING_AMOUNT', () => {
    action = { type: 'SET_SENDING_AMOUNT', payload: mockData.amount };
    expect(transactionReducer({}, action)).toEqual({ sending: mockData.amount });
  });

  it('can handle SET_RECEIVING_AMOUNT', () => {
    action = { type: 'SET_RECEIVING_AMOUNT', payload: mockData.amount };
    expect(transactionReducer({}, action)).toEqual({ receiving: mockData.amount });
  });

  it('can handle SET_SENDING_INPUT', () => {
    action = { type: 'SET_SENDING_INPUT', payload: mockData.value };
    expect(transactionReducer({}, action)).toEqual({ sendingInput: mockData.value });
  });

  it('can handle SET_RECEIVING_INPUT', () => {
    action = { type: 'SET_RECEIVING_INPUT', payload: mockData.value };
    expect(transactionReducer({}, action)).toEqual({ receivingInput: mockData.value });
  });

  it('can handle CALCULATE_SENDING_AMOUNT', () => {
    action = { type: 'CALCULATE_SENDING_AMOUNT', payload: mockData.amount };
    expect(transactionReducer({}, action)).toEqual({
      sending: mockData.amount,
      sendingInput: mockData.amount
    });
  });

  it('can handle CALCULATE_RECEIVING_AMOUNT', () => {
    action = { type: 'CALCULATE_RECEIVING_AMOUNT', payload: mockData.amount };
    expect(transactionReducer({}, action)).toEqual({
      receiving: mockData.amount,
      receivingInput: mockData.amount
    });
  });

  it('can handle CALCULATE_SAVINGS', () => {
    action = { type: 'CALCULATE_SAVINGS', payload: mockData.amount };
    expect(transactionReducer({}, action)).toEqual({ savings: mockData.amount });
  });
});
