import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import mainCategoryDecisionReducer from "./reducers/mainCategoryReducer";
import rootReducer from "./reducers/rootReducer";

const store = createStore(
  mainCategoryDecisionReducer,
  composeWithDevTools(applyMiddleware())
);

export default store;
