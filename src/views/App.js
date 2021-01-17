/* eslint-disable no-useless-constructor */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Main from './Main';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="bg-black" style={{ height: '100vh' }}>
        <Header />
        <Main />
      </div>
    );
  }
}

const mapStateToProps = () => ({
});

const mapDispatchToProps = {
};

export default connect(
  mapStateToProps, mapDispatchToProps,
)(App);
