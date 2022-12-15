import * as TYPES from '../../types';
const initialState = {
  saveData: null,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.PRODUCT_DATA_REQUEST:
      return {...state, saveData: action?.res};
    case TYPES.SET_PRODUCT_DATA:
      return {...state, saveData: action?.res};
    default:
      return {...state};
  }
};
