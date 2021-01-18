import { BUY_STRATEGY } from "./mainCategoryTypes";
import { BUY_MOTIVATION } from "./mainCategoryTypes";
import { LOAD_CATEGORIES } from "./mainCategoryTypes";

export const buyStrategy = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    firestore
      .collection("mainCategory")
      .doc(2)
      .get()
      .then((doc) => {
        if (doc.exists) {
          const data = doc.data();
          // console.log(data);
          dispatch({ type: "BUY_MOTIVATION", data });
        } else {
          console.log("does not exist");
        }
      });
  };
};
export const buyMotivation = () => {
  return {
    type: BUY_MOTIVATION,
  };
};

export const loadCategories = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    firestore
      .collection("mainCategory")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          console.log(doc.id, "=> ", doc.data());
        });
      })
      .catch((err) => {
        dispatch({
          type: "LOAD_CAT_ERR",
        });
      });
    // .then((doc) => {
    //   if (doc.exists) {
    //     const data = doc.data();
    //     console.log(data);
    //     dispatch({ type: "LOAD_CATEGORIES", data });
    //   } else {
    //     console.log("does not exist");
    //   }
    // });
  };
};
