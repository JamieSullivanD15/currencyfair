import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Tab from './Tab';
import Header from './Header';
import Input from './Input';
import NextButton from './NextButton';
import Footer from './Footer';

import { showModal } from '../../actions/modalActions';

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
        name={'sendingInput'}
        value={props.sendingInput}
      />
      <Input
        class={'transaction-receiving'}
        imgSrc={require('../../assets/gbp-symbol.png')}
        label={'Receiver Gets'}
        symbol={'£'}
        name={'receivingInput'}
        value={props.receivingInput}
      />
      <NextButton
        handleOpenModal={props.showModal}
      />
      <Footer />
    </div>
  );
}

Transaction.propTypes = {
  showModal: PropTypes.func.isRequired,
  sendingInput: PropTypes.any.isRequired,
  receivingInput: PropTypes.any.isRequired
}

const mapStateToProps = state => ({
  sendingInput: state.transaction.sendingInput,
  receivingInput: state.transaction.receivingInput
});

export default connect (mapStateToProps, {
  showModal
})(Transaction);
