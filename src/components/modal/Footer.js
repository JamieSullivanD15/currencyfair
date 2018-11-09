import React from 'react';

const Footer = (props) => {
  return (
    <div className="modal-footer col">

      <div className="row">
        <div className="row">
          <button
            className="btn modal-verify-identity">
            Verify Identity
          </button>
          <button
            className="btn modal-back"
            onClick={props.handleBackClick}>
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

export default Footer;
