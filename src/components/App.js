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

class App extends Component {

  componentDidMount() {
    // Exchange rate from, to
    this.props.getRate('EUR', 'GBP');
  }

  render() {
    return (
      <div className="app">
        <Modal />

        <div className="container">
          <Header />
          <Logo />
          <Main />
          <Transaction />
          <Detail />
          <Sidebar />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  getRate: PropTypes.func.isRequired
}

export default connect (null, {
  getRate
})(App);
