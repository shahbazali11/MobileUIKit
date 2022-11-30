import * as TYPES from '../../types/product-types/product-types';

const setProductData = data => {
  return {
    type: TYPES.PRODUCT_DATA_REQUEST,
    data,
  };
};

export {setProductData};
