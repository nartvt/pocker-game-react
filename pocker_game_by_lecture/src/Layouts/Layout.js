import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch,Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./Header";
import SignInScreen from "../Screens/Authentication/SignInScreen";
import SignUpScreen from "../Screens/Authentication/SignUpScreen";
import { actLoginUser } from "../Redux/Actions/User";
// import { restConnector } from "../Services/Index";
import HomeScreen from "../Screens/Home/HomeScreen";
import Hallway from "../Screens/Game/Hallway";
import RoomScreen from "../Screens/Game/RoomScreen";
import Auth from "../HOC/Auth";

const Layout = (props) => {
  //didmount,didupdate,willunmount
  useEffect(() => {
    let user = localStorage.getItem("userLogin");
    if (user) {
      const userObj = JSON.parse(user);
      props.dispatch(actLoginUser(userObj));
      // restConnector.defaults.headers[
      //   "Authorization"
      // ] = `Bearer ${userObj.accessToken}`;
    }
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/signin" component={SignInScreen} />
        <Route path="/signup" component={SignUpScreen} />
        {/* <Route path="/hallway" component={Hallway} /> */}
        <Auth path={'/hallway'} component={Hallway}/>
        <Route path="/match/:matchId" component={RoomScreen} />
        <Route path="/" component={HomeScreen} />
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = state => {
  return {
    credentials: state.user.credentials
  };
};
export default connect(mapStateToProps)(Layout);
