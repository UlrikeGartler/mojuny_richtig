import { combineReducers } from "redux";
import mainCategoryDecisionReducer from "./mainCategoryReducer";
import subCategoryDecisionReducer from "./subCategoryReducer";

const rootReducer = combineReducers({
  mainCategory: mainCategoryDecisionReducer, // put in correct thing
  subCategory: subCategoryDecisionReducer,
});

export default rootReducer;
