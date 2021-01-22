import { STRATEGY, MOTIVATION } from "../actions/mainCategoryTypes";

//STATES
//mainCategoryDecision STATE
const mainCategoryDecisionState = {
  mainCategoryDecision: 0,
};

// //subCategoryDecision STATE
// const subCategoryDecisionState = {
//   subCategoryDecision: 0,
// };

// //solutionDecision STATE
// const solutionDecisionState = {
//   solutionDecision: 0,
// };

//REDUCERS
//mainCategoryDesicion REDUCER
const mainCategoryDecisionReducer = (
  state = mainCategoryDecisionState,
  action
) => {
  switch (action.type) {
    case STRATEGY:
      return {
        ...state,
        mainCategoryDecision: 1,
      };
    case MOTIVATION:
      return {
        ...state,
        mainCategoryDecision: 2,
      };
    default:
      return state;
  }
};

// //subCategoryDesicion REDUCER (STRATEGY subCategories)
// const subCategoryDecisionReducer = (
//   state = subCategoryDecisionState,
//   action
// ) => {
//   switch (action.type) {
//     case clickASK:
//       return {
//         ...state,
//         subCategoryDecision: 1,
//       };
//     case clickCODE:
//       return {
//         ...state,
//         subCategoryDecision: 2,
//       };
//     case clickCONCEPT:
//       return {
//         ...state,
//         subCategoryDecision: 3,
//       };
//     case clickERROR:
//       return {
//         ...state,
//         subCategoryDecision: 4,
//       };
//     case clickGENERAL:
//       return {
//         ...state,
//         subCategoryDecision: 5,
//       };
//     case clickLEARN:
//       return {
//         ...state,
//         subCategoryDecision: 6,
//       };
//   }
// };

// //solutionDesicion REDUCER
// const solutionDecisionReducer = (state = solutionDecisionState, action) => {};

export default mainCategoryDecisionReducer;
