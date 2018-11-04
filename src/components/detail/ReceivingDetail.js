import React from 'react';

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

function ReceivingInfo(props) {
  const recipientGets = (props.sendingAmount * props.exchangeRate) - props.fee;

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
        <p className="col">£{recipientGets.toFixed(2)}</p>
      </div>
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
