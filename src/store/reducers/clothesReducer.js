import { FETCH__CLOTHES } from "../actions/fetchClothesAction";

const clothesReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH__CLOTHES:
      let items = action.payload;
      return items;
    default:
      return state;
  }
};

export default clothesReducer;
