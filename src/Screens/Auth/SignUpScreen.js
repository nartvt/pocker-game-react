import React from "react";
import { Formik, Form, Field } from "formik";
import UserService, { userSignUpSchema } from "../../Services/UserService";

const SignUpScreen = () => {
  const _handleSubmit = value => {
    console.log(value);
    const result = UserService.signup(value);
    result
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
    console.log("11111");
    console.log("22222");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-5 mx-auto">
          <Formik
            initialValue={{
              TaiKhoan: "",
              MatKhau: "",
              Hoten: "",
              Email: "",
              SoDT: "",
              MaNhom: "GP01",
              MaLoaiNguoiDung: "KhachHang"
            }}
            validationSchema={userSignUpSchema}
            onSubmit={_handleSubmit}
            // render={(formikProps) => ( // {formikProps.handleChange}
            render={({ handleChange, errors, touched }) => (
              <Form>
                <h4 className="display-4">Đăng Ký</h4>
                <div className="form-group">
                  <label>Tài Khoản</label>
                  <Field
                    type="text"
                    name="TaiKhoan"
                    onChange={handleChange}
                    className="form-control"
                  />
                  {errors.TaiKhoan && touched.TaiKhoan && (
                    <p className="alert alert-danger">{errors.TaiKhoan}</p>
                  )}
                </div>
                <div className="form-group">
                  <label>Mật Khẩu</label>
                  <Field
                    type="password"
                    name="MatKhau"
                    onChange={handleChange}
                    className="form-control"
                  />
                  {errors.MatKhau && touched.MatKhau && (
                    <p className="alert alert-danger">{errors.MatKhau}</p>
                  )}
                </div>
                <div className="form-group">
                  <label>Họ Tên: </label>
                  <Field
                    type="text"
                    name="Hoten"
                    onChange={handleChange}
                    className="form-control"
                  />
                  {errors.Hoten && touched.Hoten && (
                    <p className="alert alert-danger">{errors.Hoten}</p>
                  )}
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <Field
                    type="email"
                    name="Email"
                    onChange={handleChange}
                    className="form-control"
                  />
                  {errors.Email && touched.Email && (
                    <p className="alert alert-danger">{errors.Email}</p>
                  )}
                </div>
                <div className="form-group">
                  <label>Số ĐT</label>
                  <Field
                    type="text"
                    name="SoDT"
                    onChange={handleChange}
                    className="form-control"
                  />
                  {errors.SoDT && touched.SoDT && (
                    <p className="alert alert-danger">{errors.SoDT}</p>
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
