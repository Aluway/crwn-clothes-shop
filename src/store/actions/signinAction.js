export const SHOW__MODAL = "SHOW__MODAL";
export const CLOSE__MODAL = "CLOSE__MODAL";

export const showModal = (content) => {
  return {
    type: SHOW__MODAL,
    payload: content,
  };
};

export const closeModal = () => {
  return {
    type: CLOSE__MODAL,
  };
};
