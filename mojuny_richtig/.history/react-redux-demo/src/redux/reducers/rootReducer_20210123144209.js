import { combineReducers } from "redux";
import mainCategoryDecisionReducer from "./mainCategoryReducer";
import subCategoryDecisionReducer from "./mainCategoryReducer";

const rootReducer = combineReducers({
  mainCategoryDecisionReducer, // put in correct thing
  subCategoryDecisionReducer,
});

export default rootReducer;
