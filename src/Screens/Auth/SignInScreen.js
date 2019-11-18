import React ,{useState} from 'react';
import {connect} from 'react-redux';
import {actLoginUser} from './../../Redux/Actions/UserAction';
const SignInScreen = (props) => {
  const [account, setAccount]=useState({
    TaiKhoan: '',
    MatKhau: ''
  });
  const _handleChange=(event)=>{
    setAccount({
      ...account,
      [event.target.name]:event.target.value
    })
  };

  // if have multi state, every state assign a useState
  const _handleSubmit=(event)=>{
    event.preventDefault();
    props.dispatch(actLoginUser(account));
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-5 mx-auto">
          <form onSubmit={_handleSubmit}>
            <h4 className="display-4">Đăng Nhập</h4>
            <div className="form-group">
              <label >Tài Khoản</label>
              <input type="text"  onChange={_handleChange} className="form-control" />
            </div>
            <div className="form-group">
              <label >Mật Khẩu</label>
              <input type="text" onChange={_handleChange} className="form-control" />
            </div>
            <div className="form-group text-center">
              <button type="submit" className="btn btn-success">Đăng nhập</button>
            </div>
          </form>
        </div>
      </div>
    </div>

  );
};

export default connect()(SignInScreen);