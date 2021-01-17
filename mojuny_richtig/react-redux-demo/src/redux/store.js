import { createStore, applyMiddleware } from "redux";
import mainCategoryReducer from "./reducers/mainCategoryReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(mainCategoryReducer, composeWithDevTools(applyMiddleware()));

export default store;
