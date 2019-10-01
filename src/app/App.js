import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import PrivateRoute from '../components/PrivateRouter';

import Login from '../pages/login';
import Projects from '../pages/projects';
import Project from '../pages/project';
import User from '../pages/user';
import Photo from '../pages/photo';
import AddUser from '../pages/add-user';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute path="/projects" component={Projects} />
        <PrivateRoute path="/project/:id" component={Project} />
        <PrivateRoute path="/user/:id" component={User} />
        <PrivateRoute path="/photo/:id" component={Photo} />
        <PrivateRoute path="/add-user" component={AddUser} />
        <Redirect exact from="*" to="/projects" />
      </Switch>
    </div>
  );
}

export default App;
