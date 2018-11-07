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

function test(e, test) {
  // console.log(test);
  let container = document.querySelector( ".transaction-input" );

  if (isLocalNode( container, e.target )) {
    container.classList.add('transaction-input-active');
  }
}

function isLocalNode( node, target ) {
  while ( target && ( target.nodeType !== Node.ELEMENT_NODE ) ) {
    target = target.parentNode;
  }

  return node.contains( target ) ? true : false;
}


const Input = (props) => {
  return (
      <a onClick={(e) => test(e, props.label)} className={props.class}>

        <form className="row">
          <div>
            {props.label} <br/>
            {props.symbol}
            <input></input>
          </div>

          <div className="transaction-input-flag-container col">
            <img
              src={props.imgSrc}
              className="transaction-input-flag">
            </img>
          </div>
        </form>
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
