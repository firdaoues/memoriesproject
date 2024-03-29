import React from "react";
import { Container } from "@material-ui/core";

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import PostDetails from './components/PostDetails/PostDetails';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import Users from './components/Users/Users';
import User from './components/Users/User/User';

 
const App = () => {

 const user = JSON.parse(localStorage.getItem('profile'));
  return (
    <BrowserRouter>
    <Container maxWidth="xl">
    <Navbar />
    <Switch>
    <Route path="/users" exact component={Users} /> 
    <Route path="/users/:id" component={User} />
    <Route path="/" exact component={() => <Redirect to="/posts" />} />  
    <Route path="/posts" exact component={Home} />
    <Route path="/posts/search" exact component={Home} />
    <Route path="/posts/:id" component={PostDetails} />
    <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/posts" />)}/>  
    </Switch>
   
    </Container>
  </BrowserRouter>
  )
};
export default App;
