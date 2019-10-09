import { FETCH_CREDENTIALS } from "./ActionType";
import UserService from "../../Services/UserService";
// import { restConnector } from "../../Services/Index";

// async action
export const loginUser = (account,history) => {
  return dispatch => {
    UserService.signIn(account)
      .then(res => {
        localStorage.setItem("userLogin", JSON.stringify(res.data));
        // restConnector.defaults.headers['Authorization'] = `Bearer ${res.data.accessToken}`
        dispatch(actLoginUser(res.data));
        history.push('/hallway');
      })
      .catch(err => {
        console.log(err);
      });
  };
};

//Action creator
export const actLoginUser = data => {
  return {
    type: FETCH_CREDENTIALS,
    payload: data
  };
};
