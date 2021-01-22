import { createStore, applyMiddleware } from "redux";
import mainCategoryReducer from "./reducers/mainCategoryReducer";
import { reactReduxFirebase } from "react-redux-firebase";
import { reduxFirestore } from "redux-firestore";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import { getFirebase, ReactReduxFirebaseProvider } from "react-redux-firebase";
import firebase from "firebase";
import mainCategoryDecisionReducer from "./reducers/mainCategoryReducer";

const store = createStore(
  mainCategoryDecisionReducer,
  composeWithDevTools(applyMiddleware())
);

export default store;
