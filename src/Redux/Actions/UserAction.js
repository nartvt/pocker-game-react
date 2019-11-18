import { FETCH_CREDENTIALS } from "../../Common/TypeCommon";
import UserService from './../../Services/UserService';
import restConnector from './../../Services/index';

export const signInUser=(data)=>{
  return {
    type: FETCH_CREDENTIALS,
    payload: data
  }
}

export const actLoginUser =(account)=>{
  return dispatch=>{
    UserService.signIn(account).then(res=>{
      localStorage.setItem('userLogin',JSON.stringify(res.data));
      restConnector.defaults.headers['Authorization']=`Brearer${res.data.accessToken}`;
      dispatch(signInUser(res.data));
    }).catch(err=>{
      console.log(err);
    })
  }
}