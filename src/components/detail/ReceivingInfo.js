import React from 'react';

const ReceivingInfo = (props) => {
  // if ((props.recipientGets === null) || (isNaN(props.recipientGets))) {
  //   console.log('error');
  // }

  return (
    <div className="col">
      <div className="receiving-detail-info row">
        <p className="col">Rate</p>
        <p className="col">{props.exchangeRate}</p>
      </div>
      <div className="receiving-detail-info row">
        <p className="col">Fee</p>
        <p className="col">£{props.fee.toFixed(2)}</p>
      </div>
      <div className="receiving-detail-info row">
        <p className="col">Delivery date</p>
        <p className="col">{props.deliveryDate}</p>
      </div>
      <div className="receiving-detail-info row">
        <p className="col">Recipient Gets</p>
        <p className="col">£{props.recipientGets.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ReceivingInfo;
