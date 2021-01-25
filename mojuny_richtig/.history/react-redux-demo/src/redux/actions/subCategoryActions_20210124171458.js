import { clickASK } from "./subCategoryTypes";
import { clickCODE } from "./subCategoryTypes";
import { clickCONCEPT } from "./subCategoryTypes";
import { clickERROR } from "./subCategoryTypes";
import { clickGENERAL } from "./subCategoryTypes";
import { clickLEARN } from "./subCategoryTypes";

//Action creators
export const clickOnASK = () => {
  return (dispatch, getState, { getFirebase }) => {
    //async call to db
    const firestore = getFirebase().firestore();
    firestore
      .collection("....")
      .get()
      .then(() => {
        dispatch({
          tpye: "clickASK",
        });
      })
      .catch((error) => {
        dispatch({
          type: "ERROR",
          error,
        });
      });
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
