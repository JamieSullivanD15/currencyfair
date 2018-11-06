import React from 'react';

const NextButton = ({handleOpenModal}) => {
  return (
    <div>
      <button
        className="btn transaction-next"
        onClick={handleOpenModal}
      >
        Next
      </button>
    </div>
  );
};

export default NextButton;
