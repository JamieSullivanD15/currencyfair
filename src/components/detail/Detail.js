import React, { Component } from 'react';
import SendingDetail from './SendingDetail'
;
import ReceivingDetail from './ReceivingDetail'
;

const Detail = (props) => {
  return (
    <div className="detail">
      <SendingDetail
        sendingAmount={props.transactionDetails.sendingAmount}
      />
      <ReceivingDetail
        transactionDetails={props.transactionDetails}
      />
    </div>
  );
}

export default Detail;
