import React from "react";
import { Formik, Form, Field } from "formik";
import UserService, { userSignupSchema } from "../../Services/UserService";

const SignUpScreen = (props) => {
  
  const _handleSubmit = value => {
    console.log(value);
    const result = UserService.signup(value);
    //result là 1 promise
    result
      .then(res => {
        console.log(res);
        // props.history.push('/signin');
        props.history.replace('/signin')

      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-5 mx-auto">
          <Formik
            initialValues={{
              taiKhoan: "",
              matKhau: "",
              hoTen: "",
              email: "",
              soDT: "",
              maNhom: "GP01",
              maLoaiNguoiDung: "KhachHang"
            }}
            validationSchema={userSignupSchema}
            onSubmit={_handleSubmit}
            render={({ handleChange, errors, touched }) => (
              <Form>
                <h4 className="display-4">Đăng Ký</h4>
                <div className="form-group">
                  <label >Tài Khoản</label>
                  <Field
                    type="text"
                    name="taiKhoan"
                    onChange={handleChange}
                    className="form-control"
                  />
                  {errors.taiKhoan && touched.taiKhoan && (
                    <p className="alert alert-danger">{errors.taiKhoan}</p>
                  )}
                </div>
                <div className="form-group">
                  <label >Mật Khẩu</label>
                  <Field
                    name="matKhau"
                    onChange={handleChange}
                    type="passwors"
                    className="form-control"
                  />
                  {errors.matKhau && touched.matKhau && (
                    <p className="alert alert-danger">{errors.matKhau}</p>
                  )}
                </div>
                <div className="form-group">
                  <label >Họ Tên: </label>
                  <Field
                    type="text"
                    name="hoTen"
                    onChange={handleChange}
                    className="form-control"
                  />
                  {errors.hoTen && touched.hoTen && (
                    <p className="alert alert-danger">{errors.hoTen}</p>
                  )}
                </div>
                <div className="form-group">
                  <label >email</label>
                  <Field
                    type="email"
                    name="email"
                    onChange={handleChange}
                    className="form-control"
                  />
                  {errors.email && touched.email && (
                    <p className="alert alert-danger">{errors.email}</p>
                  )}
                </div>
                <div className="form-group">
                  <label >Số ĐT</label>
                  <Field
                    type="text"
                    name="soDT"
                    onChange={handleChange}
                    className="form-control"
                  />
                  {errors.soDT && touched.soDT && (
                    <p className="alert alert-danger">{errors.soDT}</p>
                  )}
                </div>

                <div className="form-group">
                  <button className="btn btn-success" type="submit">
                    Đăng Ký
                  </button>
                </div>
              </Form>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default SignUpScreen;
