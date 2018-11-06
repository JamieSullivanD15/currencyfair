import React, { Component } from 'react';
import Modal from './modal/Modal';
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
      transactionDetails: {
        sendingAmount: 2000,
        exchangeRate: 0.86022,
        fee: 2.50,
        deliveryDate: '25th November'
      },
      showModal: false
    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.outsideModalClick = this.outsideModalClick.bind(this);
  }

  showModal() {
    this.setState({ showModal: true });
  }

  hideModal() {
    this.setState({ showModal: false });
  }

  outsideModalClick(e) {
    e.preventDefault();
    if (e.target.className === 'modal show-modal') this.hideModal();
  }

  render() {
    return (
      <div className="app">
        <Modal
          show={this.state.showModal}
          handleCloseModal={this.hideModal}
          handleOutsideClick={this.outsideModalClick}
        />

        <div className="container">
          <Header />
          <Logo />
          <Main />
          <Transaction
            handleOpenModal={this.showModal}
          />
          <Detail
            transactionDetails={this.state.transactionDetails}
          />
          <Sidebar />
        </div>
      </div>
    );
  }
}

export default App;
