import React from 'react';
import PropTypes from 'prop-types';

import ReceivingInfo from './ReceivingInfo';

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
        rate={props.rate}
        fee={props.fee}
        deliveryDate={props.deliveryDate}
        receiving={props.receiving}
      />
      <Footer
        savings={props.savings}
      />
    </div>
  );
};

ReceivingDetail.propTypes = {
  rate: PropTypes.number.isRequired,
  fee: PropTypes.number.isRequired,
  deliveryDate: PropTypes.string.isRequired,
  receiving: PropTypes.number.isRequired,
  savings: PropTypes.number.isRequired
}

export default ReceivingDetail;
