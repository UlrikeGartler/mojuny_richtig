import { BUY_STRATEGY } from "../actions/mainCategoryTypes";

const inititalState = {
  numOfCakes: "",
};

const mainCategoryReducer = (state = inititalState, action) => {

  switch (action.type) {

    case BUY_STRATEGY:
      return {
        ...state,
        numOfCakes: state.numOfCakes + "Strategie",
      };

    default:
      return state;
  }
};

export default mainCategoryReducer;
