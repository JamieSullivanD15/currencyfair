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
      transactionDetails: {
        sendingAmount: 2000,
        exchangeRate: 0,
        fee: 2.50,
        deliveryDate: '25th November',
      },
      showModal: false
    };

    this.getCurrencyRate = this.getCurrencyRate.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.outsideModalClick = this.outsideModalClick.bind(this);
  }

  componentDidMount() {
    this.getCurrencyRate('EUR', 'GBP');
  }

  getCurrencyRate(from, to) {
    const URL =`https://api.exchangeratesapi.io/latest?base=${from}&symbols=${to}`;
    let transactionDetails = Object.assign({}, this.state.transactionDetails);
    let rate = 0;

    axios.get(URL).then(res => {
      // Get first property of rates data which will be currency that is converted
      rate = res.data.rates[Object.keys(res.data.rates)[0]];
      transactionDetails.exchangeRate = rate;
      this.setState(prevState => {
        return { transactionDetails }
      });
    });
  }

  showModal() {
    this.setState({ showModal: true });
  }

  hideModal() {
    this.setState({ showModal: false });
  }

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
          />
          <Detail
            transactionDetails={this.state.transactionDetails}
          />
          <Sidebar />
        </div>
      </div>
    );
  }
}

export default App;
