import logo from './logo.svg';
import React from 'react';
import './App.scss';
import { userLogin } from './actions/user';
import { connect } from 'react-redux';

@connect(({ user }) => ({ user }), { userLogin })
class App extends React.Component {
  render() {
    const {user, userLogin} = this.props;
    console.log(user);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            haha
        </a>
          <button onClick={() => userLogin(12)}>click</button>
        </header>
      </div>
    )
  };
}


export default App;