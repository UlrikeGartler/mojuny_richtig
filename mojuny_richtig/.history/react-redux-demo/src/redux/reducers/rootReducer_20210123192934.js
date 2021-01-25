import { combineReducers } from "redux";
import mainCategoryDecisionReducer from "./mainCategoryReducer";
import subCategoryDecisionReducer from "./subCategoryReducer";

const rootReducer = combineReducers({
  mainCategoryDecisionReducer, // put in correct thing
  //subCategoryList: subCategoryDecisionReducer,
});

export default rootReducer;
