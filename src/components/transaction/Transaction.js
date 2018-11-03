import React, { Component } from 'react';
import Tab from './Tab';
import Header from './Header';
import Input from './Input';
import NextButton from './NextButton';
import Footer from './Footer';

class Transaction extends Component {
  // {this.props.exchangeRate}

  render() {
    return (
      <div className="transaction">
        <Tab />
        <Header />
        <Input />
        <NextButton />
        <Footer />
      </div>
    );
  }
}

export default Transaction;
