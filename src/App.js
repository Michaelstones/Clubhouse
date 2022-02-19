import './App.css';
import Welcome from './components/Welcome';
import PhoneConfrim from './components/PhoneConfrim';
import PlanLayout from './components/layout/PlanLayout';
import React from 'react';
import CodeConfirm from './components/CodeConfirm';
// import {Routes, Route} from 'react-router-dom'
import { BrowserRouter,  Route, Link, Switch } from 'react-router-dom';
import AllowNotification from './components/AllowNotification';
import AppLayout from './components/layout/AppLayout';
import Home from './components/Home';
import Explore from './components/Explore'
import Profile from './component2/Profile';

function App() {
  return (
    <>
    <BrowserRouter>
    <Route
    exact
    path={[
      '/',
      '/invites',
      '/get_username',
      '/code_confirm',
      '/notifications',
    ]}
    >

      <PlanLayout>
        <Switch>
        <Route exact path='/' component={Welcome}/>
        <Route exact path='/invites' component={PhoneConfrim}/>
        <Route exact path='/code_confirm' component={CodeConfirm}/>
        <Route exact path='/notifications' component={AllowNotification}/>
        </Switch>
      </PlanLayout>
    </Route>
    <Route exact path={['/home', '/explore', '/profile']}>
      <AppLayout>
        <Switch>
          <Route exact path={'/home'} component={Home}/>
          <Route exact path={'/explore'} component={Explore}/>
          <Route exact path={'/profile'} component={Profile}/>
        </Switch>
      </AppLayout>
    </Route>
    </BrowserRouter>
    </>
  )
    
  
}

export default App;
