//solutionDecision STATE
const solutionDecisionState = {
  solutionDecision: 0,
};

//mainCategoryDesicion REDUCER
const solutionDecisionReducer = (state = solutionDecisionState, action) => {
  switch (action.type) {
    //   case STRATEGY:
    //     return {
    //       ...state,
    //       mainCategoryDecision: 1,
    //     };
    //   case MOTIVATION:
    //     return {
    //       ...state,
    //       mainCategoryDecision: 2,
    //     };
    default:
      return state;
  }
};
