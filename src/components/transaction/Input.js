import React from 'react';

function getValue(e) {
  e.preventDefault();
  let input = e.target.children[2];
  console.log(input.value);
}

function checkLength(e) {
  e.preventDefault();
  if (e.target.value.length > 9) {
    e.target.value = e.target.value.slice(0, 9);
  }
}

function test(e) {
  let target = document.querySelector('.test');
  target.classList.add('transaction-input-active');
  console.log(target);
}


const Input = (props) => {

  return (

    <div className="transaction-input">
      <a onClick={test} className="test">
        <div className="sending">
          <form onSubmit={getValue}>
            <label>You Send</label> <br /> €
            <input
              type="number"
              onChange={checkLength}
              defaultValue={props.sendingAmount.toFixed(2)}>
            </input>
          </form>
          <p>Euro Image</p>
        </div>
      </a>
      <div className="receiving">
        <p>Receiver Gets <br /> £1,717.94</p>
        <p>Pound Image</p>
      </div>
    </div>
  );
};

export default Input;
