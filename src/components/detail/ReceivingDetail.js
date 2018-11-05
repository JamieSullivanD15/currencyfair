import React from 'react';
import ReceivingInfo from './ReceivingInfo'
;

function Header() {
  return (
    <div className="receiving-detail-header row">
      <p className="col">Receiving Details</p>
      <p className="col"><a href="#" >As of right now</a></p>
    </div>
  );
}

function Footer() {
  return (
    <div className="receiving-detail-footer row">
      You save £66.19 compared to your bank!
    </div>
  );
}

const ReceivingDetail = (props) => {
  return (
    <div className="receiving-detail">
      <Header />
      <ReceivingInfo
        sendingAmount={props.transactionDetails.sendingAmount}
        exchangeRate={props.transactionDetails.exchangeRate}
        fee={props.transactionDetails.fee}
        deliveryDate={props.transactionDetails.deliveryDate}
      />
      <Footer />
    </div>
  );
};

export default ReceivingDetail;
