import React from 'react';

const Logo = () => {
  return (
    <div className="logo">
      <img  src={require("../../assets/logo.svg")}></img>
    </div>
  );
};

export default Logo;

// <img  src={require("../assets/logo.svg")}></img>
