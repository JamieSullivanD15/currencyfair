import React from 'react';

const Footer = (props) => {
  return (
    <div className="modal-footer col">

    <div className="row">
      <div className="row">
        <button
          className="modal-verify-identity btn">
          Verify Identity
        </button>
        <button
          className="modal-back btn"
          onClick={props.backClick}>
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
