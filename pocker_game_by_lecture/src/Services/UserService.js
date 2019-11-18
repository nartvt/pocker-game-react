import * as yup from "yup";
import { restConnector } from "./Index";

export const userSignupSchema = yup.object().shape({
  taiKhoan: yup.string().required(),
  matKhau: yup
    .string()
    .required("Vui lòng nhập mật khẩu")
    .min(8, "Mật khẩu phải có từ 8 tới 16 kí tự")
    .max(16),
  hoTen: yup
    .string()
    .required()
    .matches(/^[a-zA-Z ]*$/),
  email: yup
    .string()
    .required()
    .email(),
  soDT: yup
    .string()
    .required()
    .matches(/^[0-9]*$/)
});

class UserService {
  signup(user) {
    return restConnector({
      method: "POST",
      url: "http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      data: user
    });
  }

  signIn(user) {
    return restConnector({
      method: "POST",
      url: "http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      data: user
    });
  }
}
export default new UserService();
