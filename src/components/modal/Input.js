import React from 'react';

function nextNumber(e) {
  let currentId = Number(e.target.id.split('-')[1]);
  let nextInput = document.querySelector('#input-' + (currentId + 1));
  nextInput.focus();
}

function checkDelete(e) {
  console.log(e.which);
  console.log(e.target);
}


function InputBox(props) {
  return (
    <input
      type="number"
      className="input-box"
      maxLength="1"
      onInput={nextNumber}
      onKeyDown={checkDelete}
      id={'input-' + props.id}>
    </input>
  );
}

const Input = () => {
  let inputs = [];

  for (let i = 0; i < 6; ++i) {
    inputs.push(<InputBox key={i} id={i} />)
  }

  return (
    <div className="modal-input row">
      {inputs}
    </div>
  );
};

export default Input;
