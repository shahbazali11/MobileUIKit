import * as TYPES from '../../types';
const initialState = {
  saveData: null,
};

export const productReducer = (state = initialState, action) => {
  console.log('Data in Reducer: ', action);
  switch (action.type) {
    case TYPES.PRODUCT_DATA_REQUEST:
      console.log('Data in Case 1: ', action);
      return {...state, saveData: action.data};
    case TYPES.SET_PRODUCT_DATA:
      console.log('Data in Case 2: ', action);
      return {...state, saveData: action.data};
    default:
      return {...state};
  }
};
