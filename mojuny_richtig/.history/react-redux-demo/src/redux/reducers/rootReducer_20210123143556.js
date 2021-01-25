import { combineReducers } from "redux";
import mainCategoryDecisionReducer from "./mainCategoryReducer";

const rootReducer = combineReducers({
  categoryList: mainCategoryDecisionReducer, // put in correct thing
  subCategoryList: subCategoryDecisionReducer,
});

export default rootReducer;
