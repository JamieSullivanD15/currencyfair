import React from 'react';

function checkInput(e) {
  e.preventDefault();
  // Prevent numbers greater than 9 digits
  if (e.target.value.length > 9) e.target.value = e.target.value.slice(0, 9);
}

function isLocalNode(node, target) {
  while (target && (target.nodeType !== Node.ELEMENT_NODE)) {
    target = target.parentNode;
  }
  return node.contains(target) ? true : false;
}

function applyActive(e, containerClass) {
  e.preventDefault();
  // Get container that was clicked, input field and first child to apply active class
  let container = document.querySelector(`.${containerClass}`);
  let input = document.querySelector(`.${containerClass}-input`);
  let child = container.children[0];

  // Check if the element that was clicked is a child of the container
  if (isLocalNode(container, e.target)) {
    // Remove the active class from opposite input
    if (container.className === 'transaction-sending') {
      document.querySelector('.transaction-receiving').children[0].classList.remove('transaction-input-active');
    } else if (container.className === 'transaction-receiving') {
      document.querySelector('.transaction-sending').children[0].classList.remove('transaction-input-active');
    }
    // Apply active class and focus on container input field
    child.classList.add('transaction-input-active');
    input.focus();
    input.select();
  }
}

const Input = (props) => {
  return (
    <a onClick={(e) => applyActive(e, props.class)} className={props.class}>
      <div className="transaction-input-container col">
        <form className={`${props.class}-form row`} onSubmit={(e) => props.handleSubmit(e, props.class)}>
          <div>
            {props.label} <br/>
            {props.symbol}
            <input
              min="3"
              step="0.01"
              type="number"
              onChange={checkInput}
              defaultValue={props.amount.toFixed(2)}
              className={`${props.class}-input`}>
            </input>
          </div>

          <div className="transaction-input-flag-container col">
            <img
              src={props.imgSrc}
              className="transaction-input-flag">
            </img>
          </div>
        </form>
      </div>
    </a>
  );
};

export default Input;


// function test(e, test) {
//   // console.log(test);
//   let container = document.querySelector( ".transaction-input-flag-container" );
//
//   // if (isLocalNode( container, e.target )) {
//   //   container.classList.add('transaction-input-active');
//   // }
//
//   console.log(isLocalNode( container, e.target ));
// }
//
// function isLocalNode( node, target ) {
//   return (node === target) ? false : node.contains(target);
//
//   while ( target && ( target.nodeType !== Node.ELEMENT_NODE ) ) {
//     target = target.parentNode;
//   }
//
//   if (node.contains( target )) return true;
// }






// <a onClick={test} className={props.class}>
//
//   <form onSubmit={getValue}>
//     <label>{props.label}</label> <br />
//     {props.symbol}
//     <input
//       type="number"
//       onChange={checkLength}
//       defaultValue={props.sendingAmount.toFixed(2)}>
//     </input>
//   </form>
//
//   <div className="col">
//     <img
//       src={props.imgSrc}
//       className="transaction-input-flag">
//     </img>
//   </div>
// </a>









// <img  src={require("../assets/logo.svg")}></img>


// <div className="transaction-input">
//   <a onClick={test} className="test">
//     <div className="sending">
//       <form onSubmit={getValue}>
//         <label>You Send</label> <br /> €
//         <input
//           type="number"
//           onChange={checkLength}
//           defaultValue={props.sendingAmount.toFixed(2)}>
//         </input>
//       </form>
//       <p>Euro Image</p>
//     </div>
//   </a>
//   <div className="receiving">
//     <p>Receiver Gets <br /> £1,717.94</p>
//     <p>Pound Image</p>
//   </div>
// </div>
