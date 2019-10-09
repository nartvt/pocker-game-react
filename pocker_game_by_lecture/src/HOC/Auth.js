import React from 'react'
import {  Route, Redirect } from "react-router-dom";
const Auth = ({ path, component: Component }) => {
  return (
    <Route path={path}
      render={(routeProps) => {
        if (localStorage.getItem('userLogin')) {
          return <component />;
        }
        alert('Login in Please');
        return <Redirect to='/signin' />
      }} />
  );
};

export default Auth;
db.createUser({
  user: "root",
  pwd: "root123",
  roles: [
    {
      role: "userAdminAnyDatabase", db: "admin"
    }
  ]
})