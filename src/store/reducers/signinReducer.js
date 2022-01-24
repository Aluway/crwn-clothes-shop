import { SHOW__MODAL, CLOSE__MODAL } from "../actions/signinAction";

const INITIAL_STATE = {
  isOpen: false,
  content: null,
};

const signinReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW__MODAL:
      return {
        isOpen: true,
        content: action.payload,
      };
    case CLOSE__MODAL:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default signinReducer;
