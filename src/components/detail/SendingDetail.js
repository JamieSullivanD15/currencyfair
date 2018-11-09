import React from 'react';
import PropTypes from 'prop-types';

function Header() {
  return (
    <div className="sending-detail-header row">
      Sending Details
    </div>
  );
}

function SendingAmount(props) {
  return (
    <div className="sending-detail-amount row">
      <p className="col">You Send</p>
      <p className="col">€{props.sending.toFixed(2)}</p>
    </div>
  );
}

const SendingDetail = (props) => {
  return (
    <div className="sending-detail">
      <Header />
      <SendingAmount
        sending={props.sending}
      />
    </div>
  );
};

SendingDetail.propTypes = {
  sending: PropTypes.number.isRequired
}

export default SendingDetail;
