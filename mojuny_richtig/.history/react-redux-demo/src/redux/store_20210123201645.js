import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import mainCategoryDecisionReducer from "./reducers/mainCategoryReducer";
import rootReducer from "./reducers/rootReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
