const initialState = {
  name: '',
  email: '',
  password: '',
  userData: null,
};

const userReducer = (state = initialState, action = {}) => {
  console.log('actions---', action);
  switch (action?.type) {
    case 'name':
      return {
        ...state,
        name: action?.payload,
      };
    case 'email':
      return {
        ...state,
        email: action?.payload,
      };
    case 'password':
      return {
        ...state,
        password: action?.payload,
      };
    case 'UserData':
      console.log('fasjfha fhajfgajf jhfagf');
      return {
        ...state,
        userData: action?.text,
      };
    default:
      return state;
  }
};

export default userReducer;
