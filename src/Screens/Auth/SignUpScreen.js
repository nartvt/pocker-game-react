import React from "react";
import { Formik, Form, Field } from "formik";
import UserService, { userSignUpSchema } from "../../Services/UserService";

const SignUpScreen = () => {
  const _handleSubmit = value => {
    console.log(value);
    const result = UserService.signUp(value);
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
            initialValues={{
              taiKhoan: "",
              matKhau: "",
              hoten: "",
              email: "",
              soDT: "",
              maNhom: "GP01"
            }}
            validationSchema={userSignUpSchema}
            onSubmit={_handleSubmit}
            // render={(formikProps) => ( // {formikProps.handleChange}
            render={({ handleChange, errors, touched, values }) => {
              return (
                <Form>
                  <h4 className="display-4">Đăng Ký</h4>
                  <div className="form-group">
                    <label>Tài Khoản</label>
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
                    <label>Mật Khẩu</label>
                    <Field
                      type="password"
                      name="matKhau"
                      onChange={handleChange}
                      className="form-control"
                    />
                    {errors.matKhau && touched.matKhau && (
                      <p className="alert alert-danger">{errors.matKhau}</p>
                    )}
                  </div>
                  <div className="form-group">
                    <label>Họ Tên: </label>
                    <Field
                      type="text"
                      name="hoten"
                      onChange={handleChange}
                      className="form-control"
                    />
                    {errors.hoten && touched.hoten && (
                      <p className="alert alert-danger">{errors.hoten}</p>
                    )}
                  </div>
                  <div className="form-group">
                    <label>email</label>
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
                    <label>Số ĐT</label>
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
              );
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SignUpScreen;
