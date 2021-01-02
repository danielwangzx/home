import logo from './logo.svg';
import './App.scss';
import { userLogin } from './actions/user';
import { connect } from 'react-redux';

function App({ user, userLogin }) {
  console.log(user)
  console.log(typeof userLogin)
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
  );
}

const actualApp = connect(({ user }) => ({ user }), { userLogin })(App);
export default actualApp;