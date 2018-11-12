import React from 'react';

const Tab = () => {
  return (
    <div className="transaction-tab row">
      <div className="tab1 tab-is-active">
        <p className="transaction-tab-step">Step 1</p>
        <p className="transaction-tab-heading">Transaction info</p>
      </div>
      <div className="tab2">
        <p className="transaction-tab-step">Step 2</p>
        <p className="transaction-tab-heading">Recipient info</p>
      </div>
      <div className="tab3">
        <p className="transaction-tab-step">Step 3</p>
        <p className="transaction-tab-heading">Make payment</p>
      </div>

      <div className="transaction-tab-bar row">
        <div className="transaction-tab-progress"></div>
      </div>
    </div>
  );
};

export default Tab;
