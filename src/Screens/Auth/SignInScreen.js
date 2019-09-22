import React from 'react';

const SignInScreen = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-5 mx-auto">
          <form>
            <h4 className="display-4">Đăng Nhập</h4>
            <div className="form-group">
              <label >Tài Khoản</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label >Mật Khẩu</label>
              <input type="text" className="form-control" />
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

export default SignInScreen;