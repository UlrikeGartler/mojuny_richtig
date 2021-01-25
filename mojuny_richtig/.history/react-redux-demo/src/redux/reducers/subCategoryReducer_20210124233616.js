import {
  clickASK,
  clickCODE,
  clickConcentration,
  clickCONCEPT,
  clickERROR,
  clickGENERAL,
  clickLEARN,
  clickStress,
  ERROR,
} from "../actions/subCategoryTypes";

//subCategoryDecision STATE
const subCategoryDecisionState = {
  subCategoryDecision: 0,
};

const subCategoryDecisionReducer = (
  state = subCategoryDecisionState,
  action
) => {
  switch (action.type) {
    case clickASK:
      // console.log("ask");
      return {
        ...state,
        subCategoryDecision: 1,
        //mainCategory: mainCategory,
      };
    case clickCODE:
      return {
        ...state,
        subCategoryDecision: 2,
      };
    case clickStress:
      return {
        ...state,
        subCategoryDecision: 3,
      };
    case clickConcentration:
      return {
        ...state,
        subCategoryDecision: 4,
      };
    // case ERROR: {
    //   console.log("error occurred");
    //   return state;
    // }
    default:
      return state;
  }
};

//subCategoryDesicion REDUCER (STRATEGY subCategories)
// const subCategoryDecisionReducer = (
//   state = subCategoryDecisionState,
//   action
// ) => {
//   switch (action.type) {
//     case clickASK:
//       return {
//         ...state,
//         subCategoryDecision: 3,
//       };
//     case clickCODE:
//       return {
//         ...state,
//         subCategoryDecision: 4,
//       };
//     // case clickCONCEPT:
//     //   return {
//     //     ...state,
//     //     subCategoryDecision: 3,
//     //   };
//     // case clickERROR:
//     //   return {
//     //     ...state,
//     //     subCategoryDecision: 4,
//     //   };
//     // case clickGENERAL:
//     //   return {
//     //     ...state,
//     //     subCategoryDecision: 5,
//     //   };
//     // case clickLEARN:
//     //   return {
//     //     ...state,
//     //     subCategoryDecision: 6,
//     //   };
//     default:
//       return state;
//   }
// };

export default subCategoryDecisionReducer;