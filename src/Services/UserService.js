import * as yup from 'yup';
import axios from 'axios';

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
  signup(user) {
    return axios({
      method: 'POST',
      url: 'http://svcy2.myclass.vn/api/QuanLyNguoiDung/ThemNguoiDung',
      data: user
    });
  }
}
export default new UserService();

