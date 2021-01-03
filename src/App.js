import React from 'react';
import './App.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Pages/Home'
import PrivateRoute from './Components/PrivateRoute'

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/home' component={Home}></Route>
        <Route path='/login' component={()=>(<div>please login</div>)}></Route>
        <Route path='/detail' exact component={null}></Route>
        <Route path='/detail/:id' component={null}></Route>
        <Redirect to="/home" from='/' exact/>
        <PrivateRoute to='/guard' component={()=>(<div>rekt</div>)}/>
        <Route component={()=>(<div>oops not found</div>)}/>
      </Switch>)
  };
}


export default App;