import { createStore, applyMiddleware, compose } from "redux";
import mainCategoryReducer from "./reducers/mainCategoryReducer";
import { reactReduxFirebase } from "react-redux-firebase";
import { reduxFirestore } from "redux-firestore";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { createFirestoreInstance } from "redux-firestore";
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";

const store = createStore(
  mainCategoryReducer,
  //initialState,
  composeWithDevTools(
    compose(
      reactReduxFirebase(firebase, rrfConfig),
      reduxFirestore(firebase),
      applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
    )
  )
);

export default store;
