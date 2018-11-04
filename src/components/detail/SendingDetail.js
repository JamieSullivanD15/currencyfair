import React from 'react';

function Header() {
  return (
    <div className="detail-sending-header row">
      Sending Details
    </div>
  );
}

function SendingAmount(props) {
  return (
    <div className="detail-sending-amount row">
      <p className="col">You Send</p>
      <p className="col">€{props.sendingAmount.toFixed(2)}</p>
    </div>
  );
}

const SendingDetail = (props) => {
  return (
    <div className="sending-detail">
      <Header />
      <SendingAmount
        sendingAmount={props.sendingAmount}
      />
    </div>
  );
};

export default SendingDetail;
