import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Input from './Input';

const Main = (props) => {
  return (
    <div className="modal-main col">
      <div className="modal-main-top row">
        <p>Enter the code sent via SMS to</p> &nbsp;
        <button className="modal-phone-container" disabled>
          <span className="modal-phone-prefix">
            {props.numberPrefix}
          </span>
          <span className="modal-phone-number">
            {props.userNumber}
          </span>
        </button>
      </div>

      <Input />

      <div className="modal-main-bottom row">
        <p className="row">
          <i className="fas fa-redo-alt"></i> Receive as new code
        </p>
        <p className="row">
          <i className="fas fa-phone fa-flip-horizontal"></i> Receive code via call instead
        </p>
      </div>
    </div>
  );
};

Main.propTypes = {
  userNumber: PropTypes.string.isRequired,
  numberPrefix: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  userNumber: state.modal.userNumber,
  numberPrefix: state.modal.numberPrefix
});

export default connect (mapStateToProps, {})(Main);
