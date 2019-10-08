import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { useEffect } from 'react'
import Header from './Header'
import SignInScreen from '../Screens/Auth/SignInScreen'
import SignUpScreen from '../Screens/Auth/SignUpScreen'
import { connect } from 'react-redux';
import { signInUser } from '../Redux/Actions/UserAction';
import restConnector from "../Services/index";
import HomeScreen from '../Screens/Home/HomeScreen';
import Hallway from '../Screens/Game/Hallway';
import PlayScreen from '../Screens/Game/PlayScreen';
const Layout = (props) => {
  //didMount, didUpdate, willUnMount
  useEffect(() => {
    let user = localStorage.getItem('userLogin');

    if (user) {
      const userObj ``= JSON.parse(user);
      props.dispatch(signInUser(JSON.parse(user)));
      restConnector.defaults.headers['Authorization'] = `Brearer ${userObj.accessToken}`;
    }
  }, []);  // [] didMount use empty array, didUpdate ,push a param for array
  return (
    <BrowserRouter>`
    `
      <Header />
      <Switch>
        <Route path="/signin" component={SignInScreen} />
        <Route path="/signup" component={SignUpScreen} />
        <Route path="/hallway" component={Hallway} />
        <Route path="/match/:matchid" component={PlayScreen} />
        <Route path="/" component={HomeScreen} />
        {/* 
        <Route path="/signin"extract component={SignInScreen} />
        <Route path="/signup" extract component={SignUpScreen} />
        <Route path="/" extract component={HomeScreen} /> 
        */}
      </Switch>
    </BrowserRouter>
  )
}
const _mapStateToProps = (state) => ({
  credentials: state.user.credentials
})

export default connect(_mapStateToProps)(Layout);