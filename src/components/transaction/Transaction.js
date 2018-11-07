import React, { Component } from 'react';

import Tab from './Tab';
import Header from './Header';
import Input from './Input';
import NextButton from './NextButton';
import Footer from './Footer';

const Transaction = (props) => {

  return (
    <div className="transaction">
      <Tab />
      <Header />
      <Input
        class={'transaction-input-sending col'}
        imgSrc={require('../../assets/europe.png')}
        label={'You Send'}
        symbol={'€'}
        sendingAmount={props.transactionDetails.sendingAmount}
        exchangeRate={props.transactionDetails.exchangeRate}
      />
      <NextButton
        handleOpenModal={props.handleOpenModal}
      />
      <Footer />
    </div>
  );
}

export default Transaction;
