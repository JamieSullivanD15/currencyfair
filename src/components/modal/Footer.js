import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Footer = (props) => {
  return (
    <div className="modal-footer col">

      <div className="row">
        <div className="row">
          <button
            className="btn modal-verify-identity"
            onClick={props.handleBackClick}
          >
            Verify Identity
          </button>
          <button
            className="btn modal-back"
            onClick={props.handleBackClick}
          >
            Back
          </button>
        </div>

        <div className="col">
          <a href="#">I can't access this mobile device</a>
        </div>
      </div>

    </div>
  );
};

Footer.propTypes = {
  handleBackClick: PropTypes.func.isRequired
}

export default connect (null, {})(Footer);
