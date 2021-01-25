import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import mainCategoryDecisionReducer from "./reducers/mainCategoryReducer";
import rootReducer from "./reducers/rootReducer";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

export default store;
