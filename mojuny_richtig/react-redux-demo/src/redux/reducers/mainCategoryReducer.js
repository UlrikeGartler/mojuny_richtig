import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import { loadCategories } from "../actions/mainCategoryActions";

import { BUY_STRATEGY, LOAD_CATEGORIES } from "../actions/mainCategoryTypes";
import { BUY_MOTIVATION } from "../actions/mainCategoryTypes";

const inititalState = {
  mainCategory: [],
};

// const categoryState = {
//   categoryList: [],
// };

const mainCategoryReducer = (state = inititalState, action) => {
  switch (action.type) {
    case BUY_STRATEGY:
      return {
        ...state,
        numOfStrategies: "strategy",
      };

    case BUY_MOTIVATION:
      return {
        ...state,
        mainCategory: [...state.mainCategory, action.payload],
      };

    case LOAD_CATEGORIES:
      return {
        ...state,
        mainCategory: [...state.mainCategory, action.payload],
      };

    default:
      return state;
  }
};

// Add firebase to reducers
// export default combineReducers({
//   firebase: firebaseReducer,
//   // firestore: firestoreReducer // <- needed if using firestore
// })

export default mainCategoryReducer;
