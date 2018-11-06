import React from 'react';

function nextNumber(e) {
  let currentId = Number(e.target.id.split('-')[1]);
  let nextInput = document.querySelector('#input-' + (currentId + 1));

  // Don't call focus when at the last input
  if (currentId === 5) return;
  nextInput.focus();
}

function checkInput() {
  let btn = document.querySelector('.modal-verify-identity');
  let modalInput = document.querySelector('.modal-main-input');
  let children = modalInput.children;
  let count = 0;

  // Check the number of empty inputs, add active if they're completed
  for (let i = 0; i < children.length; i++) {
    if (children[i].value === '') ++count;
  }

  count === 0 ?
    btn.classList.add('btn-is-active') :
    btn.classList.remove('btn-is-active');
}

const InputBox = (props) => {
  return (
    <input
      type="text"
      className="input-box"
      maxLength="1"
      onKeyPress={nextNumber}
      onChange={checkInput}
      id={'input-' + props.id}>
    </input>
  );
};

export default InputBox;
