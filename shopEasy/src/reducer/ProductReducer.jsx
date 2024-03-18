const productReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "SET_API_DATA":
      const featueProducts = action.payload.filter((curElem) => {
        return curElem.featured === true;
      });
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProducts: featueProducts,
      };
    case "SET_SINGLE_LOADING":
      return {
        ...state,
        isSingleLoading: true, 
      };

    case "SET_SINGLE_PRODUCT_DATA":
      return {
        ...state,
        isSingleLoading:false,
        singleProduct: action.payload
      };
      case "SET_SINGLE_ERROR":
        return{
            ...state,
          isSingleLoading: false,
          isError: true
        }
    default:
      return state;
  }
  return state;
};

export default productReducer;
