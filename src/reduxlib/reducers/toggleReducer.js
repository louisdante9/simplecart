const toggleReducer = (state = {toggleState: false}, action) => {
  switch (action.type) {
    case "TOGGLE":
      return {
        ...state,
        toggleState: action.payload,
      };
    default:
      return state;
  }
};

export default toggleReducer;