import React from 'react';
import PropTypes from 'prop-types';

const ReceivingInfo = (props) => {
  return (
    <div className="col">
      <div className="receiving-detail-info row">
        <p className="label col">Rate</p>
        <p className="value col">{props.rate}</p>
      </div>
      <div className="receiving-detail-info row">
        <p className="label col">Fee</p>
        <p className="value col">£{props.fee.toFixed(2)}</p>
      </div>
      <div className="receiving-detail-info row">
        <p className="label col">Delivery date</p>
        <p className="value col">{props.deliveryDate}</p>
      </div>
      <div className="receiving-detail-info row">
        <p className="label col">Recipient gets</p>
        <p className="main-value col">£{props.receiving.toFixed(2)}</p>
      </div>
    </div>
  );
};

ReceivingInfo.propTypes = {
  rate: PropTypes.number.isRequired,
  fee: PropTypes.number.isRequired,
  deliveryDate: PropTypes.string.isRequired,
  receiving: PropTypes.number.isRequired
}

export default ReceivingInfo;
