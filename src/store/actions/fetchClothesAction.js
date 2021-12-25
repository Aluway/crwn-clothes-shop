export const FETCH__CLOTHES = "FETCH__CLOTHES";

const fetchClothesAction = (clothes) => {
  return {
    type: FETCH__CLOTHES,
    payload: clothes,
  };
};

export default fetchClothesAction;
