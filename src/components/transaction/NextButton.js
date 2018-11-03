import React from 'react';

function openModal() {
  console.log('Open Modal Clicked');
}

const NextButton = () => {
  return (
    <div>
      <button
        onClick={openModal}
        className="button transaction-next-button">
        Next
      </button>
    </div>
  );
};

export default NextButton;
