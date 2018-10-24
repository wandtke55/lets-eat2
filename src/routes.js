import React from 'react';
import {Switch, Route} from 'react-router-dom';
import About from './components/Navbar Components/About';
import Account from './components/Navbar Components/Account';
import Contact from './components/Navbar Components/Contact';
import Home from './components/Navbar Components/Home';
import Login from './components/Navbar Components/Login';
import Randomize from './components/Randomize';
import Restaurant from './components/Restaurant';


export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/account' component={Account}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/login' component={Login}/>
        <Route path='/randomize/:type' component={Randomize}/>
        <Route path='/restaurant' component={Restaurant}/>
    </Switch>
)