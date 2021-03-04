const productReducer = (state = {}, action) => {
        console.log(action.payload, "payload");

  switch (action.type) {
    case "PRODUCTS":
      return {...state, products: action.payload};
    default:
      return state;
  }
};

export default productReducer;
