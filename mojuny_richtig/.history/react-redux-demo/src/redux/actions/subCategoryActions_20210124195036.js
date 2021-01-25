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

//array
const items = [];

//Action creators
export const clickOnASK = (mainCategory) => {
  return (dispatch, getState, { getFirebase }) => {
    //async call to db
    const firestore = getFirebase().firestore();
    firestore
      .collection("mainCategory")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          //console.log(doc.id, " => ", doc.data());
          items.push(doc.data());
        });
        mainCategory = items;
      })
      .then(() => {
        dispatch({
          type: clickASK,
          mainCategory: mainCategory,
          //solutions: solutions,
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
  return (dispatch, getState, { getFirebase }) => {
    //async call to db
    const firestore = getFirebase().firestore();
    firestore
      .collection("mainCategory/strategy/subCategory/code/codeSolutions")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          //  console.log(doc.id, " => ", doc.data());
        });
      })
      .then(() => {
        dispatch({
          type: clickCODE,
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

// export const clickOnCODE = () => {
//   return {
//     type: clickCODE,
//   };
// };
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