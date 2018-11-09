import React from 'react';
import PropTypes from 'prop-types';

const ReceivingInfo = (props) => {
  return (
    <div className="col">
      <div className="receiving-detail-info row">
        <p className="col">Rate</p>
        <p className="col">{props.rate}</p>
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
        <p className="col">£{props.receiving.toFixed(2)}</p>
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
