import { clickASK } from "./subCategoryTypes";
import { clickCODE } from "./subCategoryTypes";
import { clickCONCEPT } from "./subCategoryTypes";
import { clickERROR } from "./subCategoryTypes";
import { clickGENERAL } from "./subCategoryTypes";
import { clickLEARN } from "./subCategoryTypes";
import { ERROR } from "./subCategoryTypes";
import firebase from "firebase";
import { getFirebase } from "react-redux-firebase";
import store from "../store";

//Action creators
export const clickOnASK = () => {
  return (dispatch, getState, { getFirebase }) => {
    //async call to db
    const firestore = getFirebase().firestore().collection("mainCategory");
    firestore
      .get()
      .function((querySnapshot) => {
        querySnapshot.forEach(function (doc) {
          console.log(doc.id, " => ", doc.data());
        });
      })
      .then(() => {
        dispatch({
          type: clickASK,
        });
      })
      .catch((error) => {
        dispatch({
          type: ERROR,
          error,
        });
      });
    // dispatch({ type: "clickASK" });
  };
};

export const clickOnCODE = () => {
  return {
    type: clickCODE,
  };
};
// export const clickOnCONCEPT = () => {
//   return {
//     type: clickCONCEPT,
//   };
// };
// export const clickOnERROR = () => {
//   return {
//     type: clickERROR,
//   };
// };
// export const clickOnGENERAL = () => {
//   return {
//     type: clickGENERAL,
//   };
// };
// export const clickOnLEARN = () => {
//   return {
//     type: clickLEARN,
//   };
// };
