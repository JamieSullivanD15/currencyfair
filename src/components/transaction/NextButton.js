import React from 'react';

const NextButton = ({handleOpenModal}) => {
  return (
    <div>
      <button
        className="transaction-next btn"
        onClick={handleOpenModal}
      >
        Next
      </button>
    </div>
  );
};

export default NextButton;
