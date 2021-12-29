export const ADD__ITEM = "ADD__ITEM";
export const REMOVE__ITEM = "REMOVE__ITEMS";

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
