import { createStore, applyMiddleware, compose } from "redux";
import mainCategoryReducer from "./reducers/mainCategoryReducer";
import { reactReduxFirebase } from "react-redux-firebase";
import { reduxFirestore } from "redux-firestore";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(
  mainCategoryReducer,
  composeWithDevTools(compose(applyMiddleware(thunk.withExtraArgument({}))))
);

export default store;
