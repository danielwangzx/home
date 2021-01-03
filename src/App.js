import logo from './logo.svg';
import React from 'react';
import './App.scss';
import { userLogin } from './actions/user';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Pages/Home'

@connect(({ user }) => ({ user }), { userLogin })
class App extends React.Component {
  render() {
    const { user, userLogin } = this.props;
    console.log(user);
    return (
      <Switch>
        <Route path='/home' exact component={Home}></Route>
        <Route path='/login' component={()=>(<div>hellwo</div>)}></Route>
        <Route path='/detail' exact component={null}></Route>
        <Route path='/detail/:id' component={null}></Route>
        <Redirect to="/home" from='/' exact/>
        <Route component={()=>(<div>oops not found</div>)}/>
      </Switch>)
  };
}


export default App;