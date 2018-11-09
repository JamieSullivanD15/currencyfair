import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Input from './Input';

const Main = (props) => {
  return (
    <div className="modal-main col">
      <div className="modal-main-top row">
        Enter the code sent via SMS to {props.numberPrefix}{props.userNumber}
      </div>

      <Input />

      <div className="modal-main-bottom row">
        <p className="col">
          Receive as new code
        </p>
        <p className="col">
          Receive code via call instead
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
