import React from 'react';
import Input from './Input';

const Main = () => {
  return (
    <div className="modal-main col">
      <div className="modal-main-top row">
        Enter the code sent via SMS to +353 872251177
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

export default Main;
