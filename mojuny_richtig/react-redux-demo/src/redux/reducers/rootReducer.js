import { combineReducers } from "redux";
import mainCategoryReducer from "./mainCategoryReducer";

const rootReducer = combineReducers({
  categoryList: mainCategoryReducer, // put in correct thing
});

export default rootReducer;
