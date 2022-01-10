import {
  ADD__ITEM,
  REMOVE__ITEM,
  INCREASE__QTY,
  DECREASE__QTY,
} from "../actions/cartAction";

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD__ITEM:
      const inCart = state.find((item) => {
        return item.id === action.payload.id ? true : false;
      });
      return inCart
        ? state.map((item) => {
            return item.id === action.payload.id
              ? { ...item, qty: item.qty + 1 }
              : item;
          })
        : [...state, { ...action.payload, qty: 1 }];
    case REMOVE__ITEM:
      const withRemoved = state.filter((item) => item.id !== action.payload);
      return withRemoved;
    case INCREASE__QTY:
      return state.map((item) => {
        return item.id === action.payload
          ? { ...item, qty: item.qty + 1 }
          : item;
      });
    case DECREASE__QTY:
      return state.map((item) => {
        return item.id === action.payload
          ? { ...item, qty: item.qty - 1 }
          : item;
      });

    default:
      return state;
  }
};

export default cartReducer;
