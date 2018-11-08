import React, { Component } from 'react';

import SendingDetail from './SendingDetail'
;
import ReceivingDetail from './ReceivingDetail'
;

const Detail = (props) => {
  return (
    <div className="detail">
      <SendingDetail
        sendingAmount={props.sendingAmount}
      />
      <ReceivingDetail
        exchangeRate={props.exchangeRate}
        fee={props.fee}
        deliveryDate={props.deliveryDate}
        recipientGets={props.recipientGets}
        savings={props.savings}
      />
    </div>
  );
}

export default Detail;
