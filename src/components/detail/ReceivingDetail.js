import React from 'react';

import ReceivingInfo from './ReceivingInfo'
;

function Header(props) {
  return (
    <div className="receiving-detail-header row">
      <p className="col">Receiving Details</p>
      <p className="col"><a href="#" >As of right now</a></p>
    </div>
  );
}

function Footer(props) {
  return (
    <div className="receiving-detail-footer row">
      You save £{props.savings.toFixed(2)} compared to your bank!
    </div>
  );
}

const ReceivingDetail = (props) => {
  return (
    <div className="receiving-detail">
      <Header />
      <ReceivingInfo
        sendingAmount={props.sendingAmount}
        exchangeRate={props.exchangeRate}
        fee={props.fee}
        deliveryDate={props.deliveryDate}
        recipientGets={props.recipientGets}
      />
      <Footer
        savings={props.savings}
      />
    </div>
  );
};

export default ReceivingDetail;
