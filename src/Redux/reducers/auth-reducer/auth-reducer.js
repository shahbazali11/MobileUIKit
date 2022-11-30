import * as TYPES from '../../types/auth-types/auth-types';

const initialState = {
  signupObject: {
    name: '',
    email: '',
    password: '',
  },
  userData: null,
};

const userReducer = (state = initialState, action) => {
  switch (action?.type) {
    case TYPES.SAVE_INFO_REQUEST:
      return {
        ...state,
        signupObject: action.data?.params,
      };
    default:
      return state;
  }
};

export default userReducer;
