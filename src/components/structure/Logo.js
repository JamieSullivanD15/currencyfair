import React from 'react';

const Logo = () => {
  return (
    <div className="logo">
      <a href="#">
        <img src={require("../../assets/logo.svg")}></img>
      </a>
    </div>
  );
};

export default Logo;
