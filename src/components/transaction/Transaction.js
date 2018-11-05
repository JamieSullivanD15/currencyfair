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
      <Input />
      <NextButton
        handleOpenModal={props.handleOpenModal}
      />
      <Footer />
    </div>
  );
}

export default Transaction;
