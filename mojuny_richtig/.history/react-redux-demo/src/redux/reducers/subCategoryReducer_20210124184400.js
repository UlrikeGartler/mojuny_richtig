import {
  clickASK,
  clickCODE,
  clickCONCEPT,
  clickERROR,
  clickGENERAL,
  clickLEARN,
  ERROR,
} from "../actions/subCategoryTypes";

//subCategoryDecision STATE
const subCategoryDecisionState = {
  subCategoryDecision: 0,
};

const subCategoryDecisionReducer = (state = subCategoryDecision, action) => {
  switch (action.type) {
    case clickASK: {
      console.log("ask");
      return state;
    }
    case clickCODE: {
      console.log("code");
    }
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
