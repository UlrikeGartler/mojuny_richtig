import { clickASK, clickStress, clickConcentration } from "./subCategoryTypes";
import { clickCODE } from "./subCategoryTypes";
import { clickCONCEPT } from "./subCategoryTypes";
import { clickERROR } from "./subCategoryTypes";
import { clickGENERAL } from "./subCategoryTypes";
import { clickLEARN } from "./subCategoryTypes";
import { ERROR } from "./subCategoryTypes";
import firebase from "firebase";
import { getFirebase } from "react-redux-firebase";
import store from "../store";

export const clickOnCODE = () => {
  return {
    type: clickCODE,
  };
};

export const clickOnASK = () => {
  return {
    type: clickASK,
  };
};

export const clickOnConcentration = () => {
  return {
    type: clickConcentration,
  };
};
export const clickOnStress = () => {
  return {
    type: clickStress,
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
