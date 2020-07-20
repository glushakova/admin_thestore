import { ACTIONST_TYPE } from '../const';
import axios from 'axios';

const authorization = () =>
  (axios.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${localStorage.getItem('token')}`);

const initialState = {
  email: '',
  password: '',
  user: null,
  token: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONST_TYPE.ON_CHANGE_EMAIL: {
      return {
        ...state,
        email: action.payload,
        error: null,
      };
    }
    case ACTIONST_TYPE.ON_CHANGE_PASSWORD: {
      return {
        ...state,
        password: action.payload,
        error: null,
      };
    }
    case ACTIONST_TYPE.START_AUTH: {
      return {
        ...state,
      };
    }
    case ACTIONST_TYPE.SIGN_IN_SUCCESS: {
      localStorage.setItem('token', action.payload.accessToken);
      return {
        ...state,
        ...initialState,
        user: action.payload.user,
        token: action.payload.accessToken,
      };
    }
    case ACTIONST_TYPE.SIGN_IN_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case ACTIONST_TYPE.AUTO_SIGN_IN: {
      authorization();
      return {
        ...state,
        ...initialState,
        user: action.payload.decoded,
      };
    }
    case ACTIONST_TYPE.SIGN_OUT: {
      localStorage.removeItem('token');
      return {
        ...initialState,
      };
    }
    default:
      return state;
  }
};
