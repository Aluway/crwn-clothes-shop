export const ADD__ITEM = "ADD__ITEM";
export const REMOVE__ITEM = "REMOVE__ITEMS";
export const INCREASE__QTY = "INCREASE__QTY";
export const DECREASE__QTY = "DECREASE__QTY";

export const addItem = (item) => {
  return {
    type: ADD__ITEM,
    payload: {
      id: item.id,
      imgUrl: item.imgUrl,
      name: item.name,
      price: item.price,
    },
  };
};

export const removeItem = (itemId) => {
  return {
    type: REMOVE__ITEM,
    payload: itemId,
  };
};

export const increaseQty = (itemId) => {
  return {
    type: INCREASE__QTY,
    payload: itemId,
  };
};

export const decreaseQty = (itemId) => {
  return {
    type: DECREASE__QTY,
    payload: itemId,
  };
};
