import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from './structure/Header';
import Logo from './structure/Logo';
import Main from './structure/Main';
import Sidebar from './structure/Sidebar';
import Modal from './modal/Modal';
import Transaction from './transaction/Transaction';
import Detail from './detail/Detail';

import { getRate } from '../actions/rateActions';
import { setSendingAmount, setReceivingAmount } from '../actions/transactionActions';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // savings compared to bank - 66.19 / 1717.94 = 0.03852 * 100 = 3.85%
      sendingAmount: 0,
      exchangeRate: 0.86022,
      fee: 2.50,
      deliveryDate: '25th November',
      recipientGets: 0,
      bankSavingsPercent: 3.852,
      savings: 0,
      showModal: false
    };

    this.calculateRecipientGets = this.calculateRecipientGets.bind(this);
    this.calculateSendingAmount = this.calculateSendingAmount.bind(this);
    this.calculateSavings = this.calculateSavings.bind(this);
    this.submitInput = this.submitInput.bind(this);
  }

  componentDidMount() {
    // this.props.getRate('EUR', 'GBP');
  }

  // Calculate recipient amount when user enters sending amount
  calculateRecipientGets(amount) {
    // recipientGets = (sending * rate) - fee
    let recipientGets = ((amount * this.state.exchangeRate) - this.state.fee);
    let recipientInput = document.querySelector('.transaction-receiving-input');

    recipientGets = parseFloat(recipientGets);
    recipientInput.value = recipientGets.toFixed(2);

    this.setState(prevState => {
      return { recipientGets }
    }, success => this.calculateSavings());
  }

  // Calculate sending amount when user enters recipient amount
  calculateSendingAmount(amount) {
    // GBP to EUR rate = 1 / exchangeRate
    // Full receiving amount = amount + fee
    // Sending amount = amount * rate
    let rate = 1 / this.state.exchangeRate;
    amount += this.state.fee;
    let sendingAmount = (amount * rate);
    let sendingInput = document.querySelector('.transaction-sending-input');

    sendingAmount = parseFloat(sendingAmount);
    sendingInput.value = sendingAmount.toFixed(2);

    this.setState(prevState => {
      return { sendingAmount }
    }, success => this.calculateSavings());
  }

  // Calculate the savings compared to user's bank
  calculateSavings() {
    let savings = (this.state.recipientGets / 100) * this.state.bankSavingsPercent;

    this.setState(prevState => {
      return { savings }
    });
  }

  // Called when user enters value into sending or recieving input field
  submitInput(e, containerClass) {
    e.preventDefault();
    let input = document.querySelector(`.${containerClass}-input`);
    let amount = 0;
    input.value = Math.abs(input.value).toFixed(2);
    amount = Number(input.value);


    if (containerClass === 'transaction-sending') {

      this.props.setSendingAmount(amount);
      this.calculateRecipientGets(amount);

    } else if (containerClass === 'transaction-receiving')  {

      this.props.setReceivingAmount(amount);
      this.calculateSendingAmount(amount);

    }
  }

  render() {
    return (
      <div className="app">
        <Modal />

        <div className="container">
          <Header />
          <Logo />
          <Main />
          <Transaction
            submitInput={this.submitInput}
          />
          <Detail
            sendingAmount={this.props.sending}
            exchangeRate={this.state.exchangeRate}
            fee={this.state.fee}
            deliveryDate={this.state.deliveryDate}
            recipientGets={this.props.receiving}
            savings={this.state.savings}
          />
          <Sidebar />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  getRate: PropTypes.func.isRequired,
  setSendingAmount: PropTypes.func.isRequired,
  setReceivingAmount: PropTypes.func.isRequired,
  rate: PropTypes.number.isRequired,
  sending: PropTypes.number.isRequired,
  receiving: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
  rate: state.rate.value,
  sending: state.transaction.sending,
  receiving: state.transaction.receiving
});

export default connect (mapStateToProps, {
  getRate,
  setSendingAmount,
  setReceivingAmount
})(App);
