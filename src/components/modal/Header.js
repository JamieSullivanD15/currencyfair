import React from 'react';

const Header = () => {
  return (
    <div className="modal-header row">
      <p className="modal-header-top row">
        <i className="fas fa-lock"></i> Identity verification required
      </p>
      <p className="modal-header-bottom row">
        For your security, we ocassionally require you to verify your identity by entering a code sent to your mobile device.
      </p>
    </div>
  );
};

export default Header;
