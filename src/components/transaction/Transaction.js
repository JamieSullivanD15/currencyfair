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
        class={'transaction-sending'}
        imgSrc={require('../../assets/eur-symbol.png')}
        label={'You Send'}
        symbol={'€'}
        amount={props.sendingAmount}
        handleSubmit={props.submitInput}
      />
      <Input
        class={'transaction-receiving'}
        imgSrc={require('../../assets/gbp-symbol.png')}
        label={'Receiver Gets'}
        symbol={'£'}
        amount={props.recipientGets}
        handleSubmit={props.submitInput}
      />
      <NextButton
        handleOpenModal={props.handleOpenModal}
      />
      <Footer />
    </div>
  );
}

export default Transaction;
