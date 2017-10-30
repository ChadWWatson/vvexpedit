import React, { Component } from 'react';
import { Provider } from 'react-redux';
import logo from './assets/img/record.svg';
import './App.css';
import store from './store'
import Search from './components/Search';

class App extends Component {

  componentDidMount() {
  
  }

  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Virtual Vinyl</h1>
        </header>
        <Search />
      </div>
      </Provider>
    );
  }
}

export default App;
