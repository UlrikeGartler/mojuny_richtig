import { combineReducers } from "redux";
import mainCategoryDecisionReducer from "./mainCategoryReducer";
import subCategoryDecisionReducer from "./subCategoryReducer";
import solutionDecisionReducer from "./solutionReducer";
import { firebaseReducer, firestoreReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  main: mainCategoryDecisionReducer, // put in correct thing
  sub: subCategoryDecisionReducer,
  sol: solutionDecisionReducer,
});

export default rootReducer;
