import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SendingDetail from './SendingDetail';
import ReceivingDetail from './ReceivingDetail';

import { calculateSavings } from '../../actions/transactionActions';

class Detail extends Component {

  componentDidUpdate() {
    this.props.calculateSavings(this.props.receiving, this.props.savingsPercent);
  }

  render() {
    return (
      <div className="detail">
        <SendingDetail
          sending={this.props.sending}
        />
        <ReceivingDetail
          rate={this.props.rate}
          fee={this.props.fee}
          deliveryDate={this.props.deliveryDate}
          receiving={this.props.receiving}
          savings={this.props.savings}
        />
      </div>
    );
  }
}

Detail.propTypes = {
  rate: PropTypes.number.isRequired,
  sending: PropTypes.number.isRequired,
  fee: PropTypes.number.isRequired,
  deliveryDate: PropTypes.string.isRequired,
  receiving: PropTypes.number.isRequired,
  savings: PropTypes.number.isRequired,
  savingsPercent: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
  sending: state.transaction.sending,
  rate: state.rate.value,
  fee: state.transaction.fee,
  deliveryDate: state.transaction.deliveryDate,
  receiving: state.transaction.receiving,
  savings: state.transaction.savings,
  savingsPercent: state.transaction.savingsPercent,
});

export default connect (mapStateToProps, {
  calculateSavings
})(Detail);
