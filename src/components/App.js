import React, { Component } from 'react';
import axios from 'axios';

import Header from './structure/Header';
import Logo from './structure/Logo';
import Main from './structure/Main';
import Sidebar from './structure/Sidebar';
import Modal from './modal/Modal';
import Transaction from './transaction/Transaction';
import Detail from './detail/Detail';

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

    this.getCurrencyRate = this.getCurrencyRate.bind(this);
    this.calculateRecipientGets = this.calculateRecipientGets.bind(this);
    this.calculateSendingAmount = this.calculateSendingAmount.bind(this);
    this.calculateSavings = this.calculateSavings.bind(this);
    this.submitInput = this.submitInput.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.outsideModalClick = this.outsideModalClick.bind(this);
  }

  componentDidMount() {
    // Get rate for EUR to GBP
    this.getCurrencyRate('EUR', 'GBP');
  }

  // Call exchange rates API
  getCurrencyRate(from, to) {
    const URL =`https://api.exchangeratesapi.io/latest?base=${from}&symbols=${to}`;

    axios.get(URL).then(res => {
      this.setState(prevState => {
        return { exchangeRate: res.data.rates[Object.keys(res.data.rates)[0]] }
      });
    });
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
    input.value = Math.abs(input.value).toFixed(2);
    let amount = Number(input.value);

    if (containerClass === 'transaction-sending') {
      this.setState(prevState => {
        return { sendingAmount: amount }
      });

      this.calculateRecipientGets(amount);

    } else if (containerClass === 'transaction-receiving')  {
      this.setState(prevState => {
        return { recipientGets: amount }
      });

      this.calculateSendingAmount(amount);
    }
  }

  showModal() {
    this.setState({ showModal: true });
  }

  hideModal() {
    this.setState({ showModal: false });
  }

  // Close modal if area outside has been clicked
  outsideModalClick(e) {
    e.preventDefault();
    if (e.target.className === 'modal show-modal') this.hideModal();
  }

  render() {
    return (
      <div className="app">
        <Modal
          show={this.state.showModal}
          handleCloseModal={this.hideModal}
          handleOutsideClick={this.outsideModalClick}
        />

        <div className="container">
          <Header />
          <Logo />
          <Main />
          <Transaction
            handleOpenModal={this.showModal}
            sendingAmount={this.state.sendingAmount}
            recipientGets={this.state.recipientGets}
            submitInput={this.submitInput}
          />
          <Detail
            sendingAmount={this.state.sendingAmount}
            exchangeRate={this.state.exchangeRate}
            fee={this.state.fee}
            deliveryDate={this.state.deliveryDate}
            recipientGets={this.state.recipientGets}
            savings={this.state.savings}
          />
          <Sidebar />
        </div>
      </div>
    );
  }
}

export default App;
