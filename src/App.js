import React from 'react';
import './App.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Pages/Home'
import PrivateRoute from './Components/PrivateRoute'
import NotFound from '@/Pages/NotFound';
import Profolio from '@/Pages/Profolio';
import Nav from '@/Components/Nav';
class App extends React.Component {

  render() {
    return (
      <Switch>
        <Route exact component={NotFound} path='/404' />
        <Route>
          <Nav />
          <Switch>
            <Route path='/home' component={Home}></Route>
            <Route path='/profolio' component={Profolio}></Route>
            <Route path='/detail' exact component={null}></Route>
            <Route path='/detail/:id' component={null}></Route>
            <Redirect to="/home" from='/' exact />
            <PrivateRoute path='/user' component={() => (<div>rekt</div>)} />
            <Redirect to='/404' />
          </Switch>
        </Route>
      </Switch>
    )
  };
}

export default App;