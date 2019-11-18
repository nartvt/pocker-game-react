import * as yup from 'yup';
import restConnector from './index';

export const userSignUpSchema = yup.object().shape({
  taiKhoan: yup
    .string()
    .required(),
  matKhau: yup
    .string()
    .required()
    .min(8)
    .max(16),
  hoten: yup
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

class UserService{
  signup(user) {
    return restConnector({
      method: 'POST',
      url: 'http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy',
      data: user
    });
  }
  signIn(user) {
    return restConnector({
      method: 'POST',
      url: `http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap`,
      data: user
    });
  }
  signIn(user){
    return restConnector({
      method: 'POST',
      url:'http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
      data: user

    });
  }
}

export default new UserService();

