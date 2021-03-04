import { TOGGLE } from "reduxlib/actions";

const toggleReducer = (
  state = { toggleState: false },
  action: { [key: string]: any }
) => {
  switch (action.type) {
    case TOGGLE:
      return {
        ...state,
        toggleState: action.payload,
      };
    default:
      return state;
  }
};

export default toggleReducer;