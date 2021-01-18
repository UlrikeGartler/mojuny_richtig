//import { bindActionCreators } from "redux";
import { createStore, applyMiddleware } from "redux";

const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require("redux-thunk").default;
const axios = require("axios");

const initialState = {
  loading: false,
  mainCategories: [],
  error: "",
};

//actionsTypes
const FETCH_MAINCATEGORIES_REQUEST = "FETCH_MAINCATEGORIES_REQUEST";
const FETCH_MAINCATEGORIES_SUCCESS = "FETCH_MAINCATEGORIES_SUCCESS";
const FETCH_MAINCATEGORIES_FAILURE = "FETCH_MAINCATEGORIES_FAILURE";

//actionCreators
const fetchMainCategoriesRequest = () => {
  return {
    type: FETCH_MAINCATEGORIES_REQUEST,
  };
};

const fetchMainCategoriesSuccess = () => {
  return {
    type: FETCH_MAINCATEGORIES_SUCCESS,
    payload: mainCategories,
  };
};

const fetchMainCategoriesFailure = () => {
  return {
    type: FETCH_MAINCATEGORIES_FAILURE,
    payload: error,
  };
};

//reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MAINCATEGORIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MAINCATEGORIES_SUCCESS:
      return {
        loading: false,
        mainCategories: action.payload,
        error: "",
      };
    case FETCH_MAINCATEGORIES_FAILURE:
      return {
        loading: false,
        mainCategories: [],
        error: action.payload,
      };
  }
};

const fetchMainCategories = () => {
  return function (dispatch) {
    dispatch(fetchMainCategoriesRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        //response.data - array of users
        const mainCategories = response.data.map(
          (mainCategory) => mainCategory.id
        );
        dispatch(fetchMainCategoriesSuccess(mainCategories));
      })
      .catch((error) => {
        //error.message
        dispatch(fetchMainCategoriesFailure(error.message));
      });
  };
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchMainCategories());
