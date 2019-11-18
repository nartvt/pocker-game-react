import * as yup from 'yup';
import restConnector from './index';

export const userSignUpSchema = yup.object().shape({
  TaiKhoan: yup
    .string()
    .required(),
  MatKhau: yup
    .string()
    .required()
    .min(8)
    .max(16),
  Hoten: yup
    .string()
    .required()
    .matches(/^[a-zA-Z ]*$/),
  Email: yup
    .string()
    .required()
    .email(),
  SoDT: yup
    .string()
    .required()
    .matches(/^[0-9]*$/)
});

class UserService{
  signUp(user) {
    return restConnector({
      method: 'POST',
      url: 'http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy',
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

