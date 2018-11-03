import React from 'react';

const Input = () => {
  return (
    <div className="transaction-input">
      <div className="sending">
        <p>You Send <br /> €5,000.00</p>
        <p>Euro Image</p>
      </div>
      <div className="receiving">
        <p>Receiver Gets <br /> £1,717.94</p>
        <p>Pound Image</p>
      </div>
    </div>
  );
};

export default Input;
