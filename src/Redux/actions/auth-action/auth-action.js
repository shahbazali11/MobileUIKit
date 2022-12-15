import * as TYPES from '../../types/auth-types/auth-types';

const setUserData = params => {
  return {
    type: TYPES.SIGNUP_REQUEST_REQUEST,
    params,
  };
};

// const saveUserInfo = (params, cbSuccess, cbFailure) => {
//   return {
//     type: TYPES.SAVE_INFO_REQUEST,
//     params,
//     cbSuccess,
//     cbFailure,
//   };
// };

export {setUserData};
