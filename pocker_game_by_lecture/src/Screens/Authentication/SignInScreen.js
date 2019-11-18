import React, { useState } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../Redux/Actions/User";

const SignInScreen = (props) => {

  const [account, setAccount] = useState({
    taiKhoan: "",
    matKhau: ""
  });

  // const [user, setUser] = useState({})

  const _handleChange = event => {
    setAccount({
      ...account,
      [event.target.name]: event.target.value
    });
  };

  const _handleSubmit = event => {
    event.preventDefault();
    props.dispatch( loginUser(account,props.history) )
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-5 mx-auto">
          <form onSubmit={_handleSubmit}>
            <h4 className="display-4">Đăng Nhập</h4>
            <div className="form-group">
              <label >Tài Khoản</label>
              <input
                type="text"
                name="taiKhoan"
                onChange={_handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label >Mật Khẩu</label>
              <input
                type="text"
                name="matKhau"
                onChange={_handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group text-center">
              <button type="submit" className="btn btn-success">
                Đăng nhập
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default connect()(SignInScreen);
