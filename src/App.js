import React from 'react';
import './App.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Pages/Home'
import PrivateRoute from './Components/PrivateRoute'
import NotFound from '@/Pages/NotFound';
import Profolio from '@/Pages/Profolio';
class App extends React.Component {

  render() {
    return (
      <Switch>
        <Route path='/home' component={Home}></Route>
        <Route path='/profolio' component={Profolio}></Route>
        <Route path='/detail' exact component={null}></Route>
        <Route path='/detail/:id' component={null}></Route>
        <Redirect to="/home" from='/' exact />
        <PrivateRoute path='/user' component={() => (<div>rekt</div>)} />
        <Route component={NotFound} />
      </Switch>)
  };
}

export default App;