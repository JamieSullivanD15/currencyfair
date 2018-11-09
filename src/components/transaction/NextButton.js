import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { showModal } from '../../actions/modalActions';

const NextButton = (props) => {
  return (
    <div>
      <button
        className="btn transaction-next"
        onClick={props.showModal}
      >
        Next
      </button>
    </div>
  );
};

NextButton.propTypes = {
  showModal: PropTypes.func.isRequired
}

export default connect (null, {
  showModal
})(NextButton);
