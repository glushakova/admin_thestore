import { ACTIONST_TYPE } from '../const';
import axios from 'axios';

const authorization = () =>
  (axios.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${localStorage.getItem('token')}`);
authorization();

export const onChangeEmail = (emailValue) => ({
  type: ACTIONST_TYPE.ON_CHANGE_EMAIL,
  payload: emailValue,
});

export const onChangePassword = (passwordValue) => ({
  type: ACTIONST_TYPE.ON_CHANGE_PASSWORD,
  payload: passwordValue,
});

const start = () => ({
  type: ACTIONST_TYPE.START_AUTH,
});

const signInSuccess = (user) => ({
  type: ACTIONST_TYPE.SIGN_IN_SUCCESS,
  payload: user,
});

const signInFailure = (err) => ({
  type: ACTIONST_TYPE.SIGN_IN_FAILURE,
  payload: err,
});

export const signIn = ({ email, password, history }) => {
  return async (dispatch) => {
    dispatch(start());
    try {
      authorization();
      const response = await axios.post(
        `${process.env.REACT_APP_API}/sign-in`,
        {
          email,
          password,
        }
      );
      dispatch(signInSuccess(response.data));
      history.push('/products');
    } catch (err) {
      dispatch(signInFailure(err.message));
    }
  };
};

export const autoSignIn = (user) => ({
  type: ACTIONST_TYPE.AUTO_SIGN_IN,
  payload: user,
});

export const signOut = () => ({
  type: ACTIONST_TYPE.SIGN_OUT,
});
