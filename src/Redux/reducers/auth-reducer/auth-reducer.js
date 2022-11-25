import * as TYPES from '../../../types/auth-types/auth-types';

const initialState = {
  name: '',
  email: '',
  password: '',
  userData: null,
};

const userReducer = (state = initialState, action = {}) => {
  switch (action?.type) {
    case TYPES.LOGIN_REQUEST_REQUEST:
      return {
        ...state,
        userData: action?.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
