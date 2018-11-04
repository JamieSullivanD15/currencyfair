import React, { Component } from 'react';
import SendingDetail from './SendingDetail'
;
import ReceivingDetail from './ReceivingDetail'
;
class Detail extends Component {
  // {this.props.exchangeRate}

  render() {
    return (
      <div className="detail">
        <SendingDetail
          sendingAmount={this.props.transactionDetails.sendingAmount}
        />
        <ReceivingDetail
          transactionDetails={this.props.transactionDetails}
        />
      </div>
    );
  }
}

export default Detail;
