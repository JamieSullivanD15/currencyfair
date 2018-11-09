import React from 'react';

import InputBox from './InputBox';

const Input = () => {
  let inputs = [];

  /* 
    Create 6 input boxes annd add to array. Add an id and key to each input field, this enables a way of adding focus to the next field by referencing it's id
  */
  for (let i = 0; i < 6; ++i) {
    if (i === 0) inputs.push(<InputBox key={i} id={i} />)
    else inputs.push(<InputBox key={i} id={i} />);
  }

  return (
    <div className="modal-main-input row">
      {inputs}
    </div>
  );
};

export default Input;
