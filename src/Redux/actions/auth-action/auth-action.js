import * as TYPES from '../../../types/auth-types/auth-types';

const setUserData = payload => {
  return {type: TYPES.LOGIN_REQUEST_REQUEST, payload};
};
export {setUserData};
