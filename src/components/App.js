import React, { Component } from 'react';
import Transaction from './transaction/Transaction';
import Detail from './detail/Detail';

function Header(props) {
  // <img  src={require("../assets/logo.svg")}></img>
  return <header className="header">Header</header>;
}

function Logo(props) {
  return <main className="logo">Logo</main>;
}

function Main(props) {
  return <main className="main">Main</main>;
}

function Sidebar(props) {
  return <aside className="sidebar">Sidebar</aside>;
}

class App extends Component {
  constructor(props) {
  super(props);
    this.state = {
      exchangeRate: 60
    };
  }

  render() {
    return (
      <div className="app-container">
        <Header />
        <Logo />
        <Main />
        <Transaction />
        <Detail />
        <Sidebar />
      </div>
    );
  }
}

export default App;
