import { combineReducers } from "redux";
import mainCategoryDecisionReducer from "./mainCategoryReducer";
import subCategoryDecisionReducer from "./subCategoryReducer";

const rootReducer = combineReducers({
  main: mainCategoryDecisionReducer, // put in correct thing
  sub: subCategoryDecisionReducer,
  sol: solutionDecisionReducer,
});

export default rootReducer;
