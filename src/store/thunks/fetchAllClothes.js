import firebase from "../../firebase";
import fetchClothesAction from "../actions/fetchClothesAction";

const fetchAllClothes = () => {
  const clothesRef = firebase.firestore().collection("collections");
  return (dispatch) => {
    clothesRef.get().then((item) => {
      const items = item.docs.map((doc) => doc.data());
      dispatch(fetchClothesAction(items));
    });
  };
};
export default fetchAllClothes;
