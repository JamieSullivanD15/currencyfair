import React from 'react';

const NextButton = ({handleOpenModal}) => {
  return (
    <div>
      <button
        className="button transaction-next-button"
        onClick={handleOpenModal}
      >
        Next
      </button>
    </div>
  );
};

export default NextButton;
